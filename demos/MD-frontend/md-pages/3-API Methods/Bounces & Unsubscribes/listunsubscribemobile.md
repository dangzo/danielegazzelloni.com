# Unsubscribes

#

## List unsubscribe mobile 

	[unsubscribe/mobile/?gsm={mobilenumber}&groupid={groupId}&session={sessionke y}]

Unsubscribes a certain mobile (GSM) number from an addresslist

+ Method

	**GET** (`application/json; utf-8`)

+ Parameters

	+ mobilenumber (Varchar `11`, `string`)
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
