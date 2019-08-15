# Autoresponder

#

## Get campaign ordered by 

	[campaigns/{siteid}/order?by={orderby}&direction={sortdirection}&session={se ssionkey}]

Returns all campaigns for a specific site ID, ordered on a specific field, in a particulare sortdirection

+ Method

	**GET** (`application/json; utf-8`)

+ Parameters

	+ siteid (Char `13`, `string`)
	+ orderby (`string`)
		+ Can be any of the following values
			+ `name`
			+ `senddate`
			+ `createdate`
			+ `lastupdate`


	+ sortdirection (`string`)
		+ Can be any of the following values
			+ `ASC`
			+ `DESC`
			
	+ sessionkey (Varchar `32`, `string`)
	
	
#

+ Model

	```
	{"username":"testuser"}
	```

+ Response 200 (`application/json`)

	+  List < M3Campaign >

	> +

		
