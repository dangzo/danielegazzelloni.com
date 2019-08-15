# Campaigns

#

## Get campaign data 

	[campaigndata/{campaignid}?session={sessionkey}]

returns the campaign and its HTML and text content 

+ Method

	**GET** (`application/json; utf-8`)

+ Parameters

	+ mailingId (Char `13`, `string`)
	+ sessionkey (Varchar `32`, `string`)
	
	
#

+ Model

	```
	{"username":"testuser"}
	```

+ Response 200 (`application/json`)

	+ M3CampaignData

> 		+
> 		+
> 		+
> 		+