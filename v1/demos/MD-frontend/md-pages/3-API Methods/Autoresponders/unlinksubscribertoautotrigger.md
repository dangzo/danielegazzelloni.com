# Autoresponder

#

## Unlink subscriber to autotrigger 

	[subscriber/trigger/remove?autosubcrid={arid}&session={sessionkey}]

Removes a link that was created for a a specific subscriber to a specific autoresponder.

+ Method

	**GET** (`application/json; utf-8`)

+ Parameters

	+ arid (Autoresponderid returned after creation of the link, Char `13`, `string`)
	+ sessionkey (Varchar `32`, `string`)
	
	
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
