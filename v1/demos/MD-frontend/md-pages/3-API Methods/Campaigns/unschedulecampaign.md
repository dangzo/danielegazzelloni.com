# Campaigns

#

## Unschedule campaign 

	[campaign/{mailingId}/unschedule?session={sessionkey}]

  Unschedules a specific campaign back to “edit mode”

+ Method

	**GET** (`application/json; utf-8`)

+ Parameters

	+ campaignid (Char `13`, `string`)
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