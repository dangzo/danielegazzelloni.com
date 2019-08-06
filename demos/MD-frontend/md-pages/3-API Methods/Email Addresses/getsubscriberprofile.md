# Email Address

#

## Get subscriber profile 

	[subscriberprofile/{subscriberid}/?session={sessionkey}]

 Returns the profile data for a specific email address.

+ Method

	**GET** (`application/json; utf-8`)

+ Parameters

	+ subscriberId (Char `13`, `string`)
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
> 		+ 
