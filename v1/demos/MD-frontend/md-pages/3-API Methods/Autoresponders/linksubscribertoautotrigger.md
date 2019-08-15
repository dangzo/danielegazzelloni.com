# Autoresponder

#

## Link subscriber to autotrigger 

	[subscriber/trigger/{arid}/create?email={address}&reference={ref}&session={s essionkey}]

 Link a specific subscriber to a autoresponder that was created in advance. This method enables other websites (eg. E-commerce shops) to link someone that subscribed to specific events (eg. “send 5 days after registration a discount email”)

+ Method

	**GET** (`application/json; utf-8`)

+ Parameters

	+ arid (Autoresponder id, Char `13`, `string`)
	+ sessionkey (Varchar `32`, `string`)
	+ address (Emailaddress, Varchar `255`, `string`)
	+ reference (Optional reference of the client, Varchar `100`, `string`)
	
	
#

+ Model

	```
	{"username":"testuser"}
	```

+ Response 200 (`application/json`)

	+  List < M3Autoresponder >

		+ id (Char `13`, `string`)	
		+ Name (Autoresponder name, `string`)
		+ Active (True, false, `bool`)
		+ SubjectMail (Subject of Autoresponder mail, `string`)
		+ SiteId (Char `13`, `string`)
		+ TemplateId (Char `13`, `string`)
		+ AddresslistId (Char `13`, `string`)
		+ Category (Values "GSM" or "MAIL", `string`)
		+ SendTimestamp (What time the autoresponder has to be send, `datestamp`)
		+ BeforeAfter (`string`)
		+ RunAtHour (`string`)
		+ TrackLinks (Track the links in emails or not, `bool`)
		+ NumberSent (`int`)
		+ NumberOpened (`int`)
		+ NumberClicked (`int`)
		+ NumberOfDays (`int`)
