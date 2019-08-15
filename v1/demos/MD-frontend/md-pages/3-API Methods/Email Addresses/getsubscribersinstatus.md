# Email Address

#

## Get subscribers in status 

	[subscribers/group/{groupId}/status/{status}/?startindex={startIndex}&pagesi ze={pageSize}&session={sessionkey}]

Returns all email addresses within an addresslist. There is a pagesize you must give, because some addresslists can be too large to be sent in one chunk.

+ Method

	**GET** (`application/json; utf-8`)

+ Parameters

	+ groupId (Varchar `32`, `string`)
	+ status (`string`)
		+ allowed statuses
			+ `active`
			+ `bounced`
			+ `unsubscribed`
			+ `on hold`
			+ `deleted`
			+ `blacklist`
			+ `referred`
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
