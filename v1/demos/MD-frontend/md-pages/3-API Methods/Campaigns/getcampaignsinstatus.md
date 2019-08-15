# Campaigns

#

## Get campaigns in status 

	[Campaigns?site={siteid}&status={status}&session={sessionkey}]

Returns all campaigns in a specific status for a specific site ID.

+ Method

	**GET** (`application/json; utf-8`)

+ Parameters

	+ siteID (Char `13`, `string`)
	+ status (Can be any of the following values
		+ `in queue`
		+ `deleted`
		+ `edit mode`
		+ `sent`
		+ `scheduled`
		+ `send now`
		+ `failed`
		+ `recipients`
		+ `sending`
		+ `partial sent`
	
	Be sure to URL encorde your values in the request.) 

	+ sessionkey (Varchar `32`, `string`)
	
	
#

+ Model

	```
	{"username":"testuser"}
	```

+ Response 200 (`application/json`)

	+ List < M3Campaign >

> 		+
> 		+
> 		+
> 		+