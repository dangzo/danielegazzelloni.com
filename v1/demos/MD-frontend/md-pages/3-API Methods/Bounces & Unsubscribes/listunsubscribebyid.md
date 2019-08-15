# Unsubscribes

#

## List unsubscribe by Id 

	[unsubscribe/{subscriberid}/?session={sessionkey}]

Unsubscribes a certain email address or mobile phone number using its id from its addresslist

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

	+ List < M3Subscriber >

> 		+ 
> 		+ 
> 		+ 
> 		+ 
