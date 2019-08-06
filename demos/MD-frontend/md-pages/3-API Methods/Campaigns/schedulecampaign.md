# Campaigns

#

## Schedule campaign 

	[campaign/{campaignid}/schedule?y={year}&m={month}&d={day}&h={hour}&min={min ute}&session={sessionkey}]

 schedules a specific campaign to be send on a predefined timestamp.

+ Method

	**GET** (`application/json; utf-8`)

+ Parameters

	+ campaignid (Char `13`, `string`)
	+ year (Char `4`, `string`)
	+ month (`string`)
	+ day (`string`)
	+ hour (`string`)
	+ minute (`string`)
	+ sessionkey (Varchar `32`, `string`)
	
	
#

+ Model

	```
	{"username":"testuser"}
	```

+ Response 200 (`application/json`)

	+ FeedbackDTO object

> 		+ string Result
> 		+ string ResultID
> 		+ string ErrorMessage 