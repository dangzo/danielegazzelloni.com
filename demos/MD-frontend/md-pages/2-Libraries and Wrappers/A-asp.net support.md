# ASP.NET Support

To easily refer to our API, and not do the hard work of crafting the URLs for each method, myMailMarket has created a wrapper DLL that is available when logging on and go to the Help section.
  
Visual Studio: You can easily add the DLL to your  .NET projects by right clicking the ‘References’ folder in your .NET project, and choose ‘Add Reference’. 

(image)

After browsing to the .DLL file and adding it, it will appear under your References folder. 

(image)

In your code files, you can use the several classes to connect  to the desired functionality. To know which classes you can use, right click on the added reference and choose ‘View in Object Browser’.

(image)

An overview of all classes within the DLL will be presented.

Before using any functionality offered by the API, you must open a Session. See the example below: 

 		 _WCF_Host = "http://api.mailpartners.be/V2.svc/";
 		 
 		 var apiClient = new M3Datastore();           
 		 string sessionkey = string.Empty; 
 		 
 		 try             
 		 { 
 		 
 		     sessionkey = apiClient.CreateSession(_WCF_Host, txtUserName.Text, 
 		     HashStringToMD5(txtPass.Text), txtSite.Text, txtApiKey.Text, txtSharedSecret.Text, ref _errMessage);
 		 }             
 		 catch (Exception ex)           
 		 {                 
 		 // do some logging             
 		 }

When you get a sessionkey (string of length 13), you can call other functions.   

`string campaignId = "0616074266229"; var campaign = apiClient.GetCampaign(campaignId, sessionkey, ref _errMessage);` 
 
As you will note when using the functions, every methods comes with a errormessage by reference parameter. Use it to catch more business specific errors returned by the myMailMarket API.
