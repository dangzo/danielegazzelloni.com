# Email Address

#

## Get subscriber profile by address 

	[Subscriberprofile?emailaddress={emailaddress}&list={groupId}&session={sessi onkey}]

Returns the profile data for a specific email address, using an email address

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
