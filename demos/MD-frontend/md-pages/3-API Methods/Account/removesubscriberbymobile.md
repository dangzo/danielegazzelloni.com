# Account

#

## Remove subscriber by mobile 

	[subscriber/mobile/{mobilenr}/delete?list={groupid}&session={sessionkey}]

 Removes a subscriber from an addresslist using its email address

+ Method

	**GET** (`application/json; utf-8`)

+ Parameters

	+ mobilenr (Varchar `15`, `string)
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