# Email Address

#

## Get subscriber by address 

	[Subscriber?emailaddress={emailaddress}&list={groupiD}&session={sessionkey}]

Returns a specific email address by its email address 

+ Method

	**GET** (`application/json; utf-8`)

+ Parameters

	+ emailaddress (Max varchar `255`, `string`)
	+ groupId (Char `13`, `string`)
	+ sessionkey (Varchar `32`, `string`)
	
	
#

+ Model

	```
	{"username":"testuser"}
	```

+ Response 200 (`application/json`)

	+ M3Subscriber

> 		+ MailAddress
> 		+ MobileNumber
> 		+ Language
> 		+ Status
> 		+ Groepid
> 		+ MailDomain
> 		+ UserLastUpdate
