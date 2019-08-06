# How to do a POST from an ASP.NET webpage?

For those who can not use the out-of-the-box provided .NET API library that encapsulates this functionality… 
 
You will notice that several API methods require a POST HTTP method, and that these methods require an object (eg. M3Subscriber). In this example we show how to build up such an object, and how to post it.  

In the example we will create a myMailMarket demo (please note that we have changed the endpoint of the URL and some object attributes for obfuscation reasons, however the how-to should be clear). The JsonSerializeRest is a helper function we use. A Google for it can help you there (please note again: if you use our .NET library this will all be done for you automatically).  

Create a function that will build the objects Json: 
 
(example in VB.NET)

	Private Function ConnectM3API(ByVal txtVoornaam As String, ByVal txtFamnaam As String, ByVal txtEmail As String, ByVal txtTel As String, ByVal txtDomainName As String, ByVal txtVia as String, ByVal txtCompany As String, ByVal txtPromo As String, ByVal Comment As String) As String         
		Dim response As String = String.Empty
		Dim jsonText As String

		Dim demo as new M3Demo();         
		demo.Email = [john@doe.com](mailto:john@doe.com);        
		demo.Firstname = System.Web.HttpUtility.UrlEncode( “john”);         
		demo.Lastname = System.Web.HttpUtility.UrlEncode( “doe”);  
		
		jsonText = JsonSerializeRest<M3Demo>(demo);
  
	response = CallSpecificAPI("http://api.mailpartners.be/V2.svc/demo/create?name=" & System.Web.HttpUtility.UrlEncode(txtVoornaam), "POST", "application/json; charset=utf-8", jsonText)   
		response = "OK"                  

		Return response
		
	End Function


	Private Function CallSpecificAPI(ByVal url As String, ByVal requestType As String, ByVal contentType As String, ByVal rawData As String) As String 
        Try             
		Dim request As HttpWebRequest = CType(WebRequest.Create(url), HttpWebRequest)             request.Method = requestType ' POST / GET             request.ServicePoint.Expect100Continue = False  

		request.ContentType = contentType            
		request.ContentLength = rawData.Length  
           
		' set up and write to stream           
		If requestType = "POST" Then                 Using requestStream As Stream = request.GetRequestStream()                     	Using requestWriter As New StreamWriter(requestStream)                         		requestWriter.Write(rawData)                     	End Using                 
		End Using

		End If  
            
		Using myWebResponse As WebResponse = request.GetResponse()                 Using myResponseStream As Stream = myWebResponse.GetResponseStream()                     Using myStreamReader As StreamReader = New StreamReader(myResponseStream)                         Return myStreamReader.ReadToEnd()                     End Using                 End Using             End Using         Catch ex As WebException             If ex.Response IsNot Nothing Then                                         '' can use ex.Response.Status, .StatusDescription                   If ex.Response.ContentLength <> 0 Then                     Using mystr = ex.Response.GetResponseStream()                         Using reader = New StreamReader(CType(mystr, Stream))                             ' Console.WriteLine(reader.ReadToEnd())                             Return reader.ReadToEnd()                         End Using                     End Using                 End If             End If         End Try     End Function

As one can see, we also URL encoded all the elements from the URL and the object we want to pass to the myMailMarket API. UTF-8 encoding is needed to prevent loss of data on some characters (like é, è, …)  