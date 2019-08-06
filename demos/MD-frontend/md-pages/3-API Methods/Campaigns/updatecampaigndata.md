# Campaigns

#

## Update campaign data 

	[campaigndata/create?session={sessionkey}]

updates an existing HTML/SMS campaign 

+ Method

	**POST** (`application/json; utf-8`)

+ Parameters

	+ campaignid (Char `13`, `string`)
	+ sessionkey (Varchar `32`, `string`)
	
	
#

+ Model

	```
	{"username":"testuser"}
	```

+ Response 200 (`application/json`)

	+  FeedbackDTO


> 		+ string Result
> 		+ string ResultID
> 		+ string ErrorMessage 