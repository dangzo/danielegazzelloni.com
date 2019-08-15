# Campaigns

#

## Get campaign statistics 

	[Campaignstats/{campaignid}?session={sessionkey}]

 Returns the statistical data fields of a specific campaign.

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

	+ M3CampaignStatistics

> 		+ 
> 		+ 
> 		+ 