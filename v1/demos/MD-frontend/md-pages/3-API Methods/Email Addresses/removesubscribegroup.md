# Address Lists

#

## Remove Subscribe Groups 

	[list/{groupid}/delete?session={sessionkey}]

Deletes the specified subscribergroup (mail or mobile). The subscribergroup should be part of the site that was used when the session was created

+ Method

	**POST** (`application/json; utf-8`)

+ Parameters

	+ groupid (Char `13`, `string`)
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