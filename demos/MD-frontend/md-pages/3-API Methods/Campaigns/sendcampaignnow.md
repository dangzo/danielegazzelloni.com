# Campaigns

#

## Send campaign now 

	[campaign/{campaignid}/sendnow?session={sessionkey}]

Sends a campaign at the current timestamp. The mailing or SMS campaign will be placed in the send queue and if no other campaign are currently sent (by other customers), the campaign will directly send out. 

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