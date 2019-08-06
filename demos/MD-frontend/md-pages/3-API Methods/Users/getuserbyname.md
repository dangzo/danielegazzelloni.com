# Users

#

## Get User by name 

	[user?username={userName}&sitename={sitename}&session={sessionkey}]

Returns a specific user via his/her name

+ Method

	**GET** (`application/json; utf-8`)

+ Parameters

	+ userName (`string`)
	+ siteName (`string`)
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
