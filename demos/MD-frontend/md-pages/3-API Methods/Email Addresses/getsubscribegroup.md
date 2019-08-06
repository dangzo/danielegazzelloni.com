# Address Lists

#

## Get subscribe group 

	[list/{addresslistid}?session={sessionkey}]

 Returns a specific addresslist.  

+ Method

	**GET** (`application/json; utf-8`)

+ Parameters

	+ addresslistid (Char `13`, `string`)
	+ sessionkey (Varchar `32`, `string`)
	
	
#

+ Model

	```
	{"username":"testuser"}
	```

+ Response 200 (`application/json`)

	+ Array M3SubscribeGroup objects

> 		+ string Id
> 		+ string Name
> 		+ string Description
> 		+ string SiteId
> 		+ string UserLastUpdate
> 		+ string ReplyTo
> 		+ string ReplyToMailAdress
> 		+ string Language
> 		+ string ListType  