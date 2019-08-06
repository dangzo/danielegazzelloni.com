# Campaigns

#

## Add campaign data 

	[campaigndata/create?session={sessionkey}]

 adds a HTML/SMS campaign to the site that is related to the logged in sessionkey.  

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

	+  FeedbackDTO


> 		+ string Result
> 		+ string ResultID
> 		+ string ErrorMessage 