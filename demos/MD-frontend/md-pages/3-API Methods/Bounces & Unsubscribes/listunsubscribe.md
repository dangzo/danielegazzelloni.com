# Unsubscribes

#


## List unsubscribe 

	[unsubscribe/?address={emailaddress}&groupid={groupId}&session={sessionkey}]

Unsubscribes a certain email address from an addresslist  

+ Method

	**GET** (`application/json; utf-8`)

+ Parameters

	+ emailaddress (`string`)
	+ groupId (Char `13`, `string`)
	+ sessionkey (Varchar `32`, `string`)
	
	
#

+ Model

	```
	{"username":"testuser"}
	```

+ Response 200 (`application/json`)

	+ List < M3Subscriber >

> 		+ 
> 		+ 
> 		+ 
> 		+ 
