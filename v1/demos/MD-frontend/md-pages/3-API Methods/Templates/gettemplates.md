# Templates

#

## Get templates 

	[templates?site={siteID}&session={sessionkey}]

 Returns all templates for a specific site. 

+ Method

	**GET** (`application/json; utf-8`)

+ Parameters

	+ siteID (Char `13`, `string`)
	+ sessionkey (Varchar `32`, `string`)
	
	
#

+ Model

	```
	{"username":"testuser"}
	```

+ Response 200 (`application/json`)

	+ List < M3Template >

> 		+ 
> 		+ 
> 		+ 