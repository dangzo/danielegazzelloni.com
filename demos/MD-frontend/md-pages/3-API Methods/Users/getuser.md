# Users

#

## Get User 

	[user?id={userid}&session={sessionkey}]

 Returns a specific user

+ Method

	**GET** (`application/json; utf-8`)

+ Parameters

	+ userId (Char `13`, `string`)
	+ sessionkey (Varchar `32`, `string`)
	
	
#

+ Model

	```
	{"username":"testuser"}
	```

+ Response 200 (`application/json`)

	+ M3User

> 		+ UserId
> 		+ UserName
> 		+ UserPass
> 		+ EmailAddress
> 		+ Language
