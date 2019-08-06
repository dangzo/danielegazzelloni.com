# Account

#

## Save subscriber profile 

	[subscriberprofile/persist?session={sessionkey}]

Adds a subscriber with extra profile data. In case the email address already belongs to the list, only the profile data is added or updated.  

+ Method

	**POST** (`application/json; utf-8`)

+ Parameters

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