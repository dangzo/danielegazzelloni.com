# Autoresponder

#

## Send triggered autoresponder 

	[autoresponder/sendtrigger?id={autoresponderid}&to={toemailsms}&customdata={customdata} &session={sessionkey}]

Imagine you require to send an email or SMS to a person based upon an action on your website (eshop, crm, …). The email or SMS must be sent immediately and personalisation is potentially needed. a specific subscriber to a autoresponder that was created in advance.  

For personalisation and custom data some extra info: if your template contains for example 2 personalisation tags, be it [clientcode] and [clientcountry], in the API call you would insert: customdata=clientcode|132532|clientcountry|Belgium.  

Remember to always URI encode your customdata. 

+ Method

	**POST** (`application/json; utf-8`)

+ Parameters

	+ autoresponderid (Autoresponderid, Char `13`, `string`)
	+ toemailsms (Email address or Mobile number that should receive your message, Varchar `100`, `string`)
	+ customdata (Any data to customize the email template linked to the autoresponder. Use tagname|value, varchar `255`, `string`) 
	+ sessionkey (Varchar `32`, `string`)
	
	
#

+ Model

	```
	{"username":"testuser"}
	```

+ Response 200 (`application/json`)

	+ FeedbackDTO object

> 		+ string Result
> 		+ string ResultID
> 		+ string ErrorMessage 
