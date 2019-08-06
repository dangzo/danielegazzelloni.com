# Users

#

## Get Users 

	[users?site={siteID}&session={sessionkey}]

Returns all users for a specific site

+ Method

	**GET** (`application/json; utf-8`)

+ Parameters

	+ siteId (Char `13`, `string`)
	+ sessionkey (Varchar `32`, `string`)
	
	
#

+ Model

	```
	{"username":"testuser"}
	```

+ Response 200 (`application/json`)

	+ List < M3User >

> 		+ UserId
> 		+ UserName
> 		+ UserPass
> 		+ EmailAddress
> 		+ Language

