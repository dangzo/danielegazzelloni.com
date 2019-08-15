# FeedbackDTO object

A lot of API functions return our FeedbackDTO object. This object encapsulates our response upon a persist action. For example, if you want to save a new subscriber in the database, we will return you a FeedbackDTO object. The same goes for persisting campaigns, scheduling, addresslists, … 

+ Parameters

	+ Result (Will be "OK" or "NOK", `string`)
	+ ResultID (Contains the returned ID when the result is "OK", `string`)
	+ ErrorMessage (Has only a value when "NOK", `string`)
