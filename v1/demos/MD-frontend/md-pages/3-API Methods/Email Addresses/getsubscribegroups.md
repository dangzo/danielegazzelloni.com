# Address Lists

#

## Get address lists 

	[lists?site={siteID}&session={sessionkey}]

 Returns all addresslists for a specific site.   

+ Method

	**GET** (`application/json; utf-8`)

+ Parameters

	+ siteID (Char `13`, `string`)
	+ sessionkey (Varchar `32`, `string`)
	
	
#


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