# Sessions

A simple mobile app to consult prices

## Create session 

	[/session/create/{userName}/{password}/{siteName}/{apikey}/{sharedsecret}]

Creates a new session and returns a sessionkey that must be
used for each API call. The session is default 2 hours usable.

+ Method

	**GET** (`application/json; utf-8`)

+ Parameters

	+ username (required, `string`)
	+ password (required, `string`, `must be hashed using MD5`)
	+ sitename (required, `string`)
	+ apikey (required, `string`)
	+ sharedsecret (required, `string`)
	
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