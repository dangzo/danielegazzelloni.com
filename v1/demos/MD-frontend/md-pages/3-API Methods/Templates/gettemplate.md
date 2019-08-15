# Templates

#

## Get template 

	[template/{templateId}?session={sessionkey}]

 Returns a specific template.  

+ Method

	**GET** (`application/json; utf-8`)

+ Parameters

	+ templateID (Char `13`, `string`)
	+ sessionkey (Varchar `32`, `string`)
	
	
#

+ Model

	```
	{"username":"testuser"}
	```

+ Response 200 (`application/json`)

	+ M3Template
	
> 		+ string Result
> 		+ string ResultID
> 		+ string ErrorMessage 