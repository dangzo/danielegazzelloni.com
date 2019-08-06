# Email Address

#

## Add subscriber 

	[subscriber/persist?session={sessionkey}]

 Adds a new subscriber and returns the ID of the created subscriber.

+ Method

	**POST** (`application/json; utf-8`)

+ Parameters

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
