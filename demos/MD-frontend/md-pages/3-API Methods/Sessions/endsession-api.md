# Sessions

A simple mobile app to consult prices

## End session 

	[/session/end/{sessionkey}]

 Closes the session with the given sessionkey 

+ Method

	**GET** (`application/json; utf-8`)

+ Parameters

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