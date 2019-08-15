# Users

#

## Add User 

	[users/persist?session={sessionkey}]

 Adds a user to a specific site and returns the ID of the newly created user. A user created via API will always be created in a ‘user’ role, it is not allowed to create administrators via the API.

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

	+ M3User

> 		+ UserId 
> 		+ UserName
> 		+ UserPass
> 		+ EmailAddress
> 		+ Language
