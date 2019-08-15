# Account

#

## Remove subscriber by address 

	[subscriber/address/{emailaddress}/delete?list={groupid}&session={sessionkey }]

Removes a subscriber from an addresslist using its email address  

+ Method

	**GET** (`application/json; utf-8`)

+ Parameters

	+ emailaddress (Varchar `255`, `string)
	+ sessionkey (Varchar `32`, `string`)
	+ groupId (Char `13`, `string`)
	
	
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