# Email Address

#

## Get subscriber 

	[Subscriber?subscriber={subscriberId}&session={sessionkey}]

Returns a specific email address. 

+ Method

	**GET** (`application/json; utf-8`)

+ Parameters

	+ subscriberId (Char `13`, `string`)
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
