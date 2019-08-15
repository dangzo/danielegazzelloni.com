# Account

#

## Remove subscriber 

	[subscriber/{subscriberId}/delete?session={sessionkey}]

Removes a subscriber from an addresslist
  
A check will be done if the addresslist belong to the same site as the logged in API person and its session key.  

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

	+ FeedbackDTO object

> 		+ string Result
> 		+ string ResultID
> 		+ string ErrorMessage 