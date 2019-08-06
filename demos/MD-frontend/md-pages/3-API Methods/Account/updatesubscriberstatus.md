# Account

#

## Updata subscriber status 

	[subscriber/{id}/status/{status}/?session={sessionkey}]

 Updates the status of a subscriber using the ID of the subscriber

+ Method

	**GET** (`application/json; utf-8`)

+ Parameters

	+ Id (Char `13`,  `string`)
	+ status (`string`)
		+ allowed statuses:
			+ `active`
			+ `bounced`
			+ `unsubscribed`
			+ `on hold`
			+ `deleted`
			+ `blacklist`
			+ `referred`
	+ sessionkey (Varchar `32`, `string`)
	
	
#

+ Model

	```
	{"username":"testuser"}
	```

+ Response 200 (`application/json`)

	+ M3SubscriberProfile

> 		+ 
> 		+ 
> 		+ 