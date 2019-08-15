# Email Address

#

## Save custom field data 

	[customfield/persist?session={sessionkey}]

Saves (add/update) a customfield value for an existing subscriber

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

	+ FeedbackDTO object

> 		+ string Result
> 		+ string ResultID
> 		+ string ErrorMessage 
