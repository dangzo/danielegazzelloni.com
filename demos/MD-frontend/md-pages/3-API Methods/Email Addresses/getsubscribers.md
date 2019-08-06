# Email Address

#

## Get subscribers 

	[subscribers/group/{groupId}/?startindex={startIndex}&pagesize={pageSize}&se ssion={sessionkey}]

Returns all email addresses within an addresslist. There is a pagesize you must give, because some addresslists can be too large to be sent in one chunk.

+ Method

	**GET** (`application/json; utf-8`)

+ Parameters

	+ groupId (Char `13`, `string`)
	+ startIndex (Start from a specific position, normally 0, `string`)
	+ pageSize (`Eg. 50`, `max 250`)
	+ sessionkey (Varchar `32`, `string`)
	
	
#

+ Model

	```
	{"username":"testuser"}
	```

+ Response 200 (`application/json`)

	+ List < M3Subscriber >

> 		+ 
> 		+ 
> 		+ 
> 		+ 
