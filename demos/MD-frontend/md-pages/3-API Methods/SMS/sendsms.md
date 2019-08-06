# SMS

#

## Send SMS 

	[campaign/SMS/sendnow?to={mobilenumber}&from={fromname}&msg={message}&sessio n={sessionkey}]

Sends one single SMS to a specific mobile number. The from name and message text should be provided. 
 
From name (sender name): maximum character length 11.   

The from name is a free string (like for example Microsoft). However! Since end 2011 most Belgian telecom providers (eg. Proximus, Mobistar) have blocked the use of a literal textstring as “from name”. Due to this, the safest bet is to use an international mobile number (eg. 4455217453 – it doesn’t matter whether the mobile number actually exists). 
 
Message text: maximum character length 459 (3 SMS messages of 153 characters creating 1 long SMS). Default length is 160 characters.   
Impact on SMS credits: please consider that long SMS messages (so > 160 characters) will have a multiplied effect on the decrease of SMS credits. So sending a message with 150 characters will subtract 1 SMS credit, while a message with for example 200 characters, will subtract 2 SMS credits.  

If more characters than maximum allowed, a substring will be done.  

Example mobilenr format: 

	32494217453 

	whereby 32 is countrycode 
		+32 from Belgium. 

	Use 31 for Netherlands, 33 for France, …

+ Method

	**GET** (`application/json; utf-8`)

+ Parameters

	+ mobilenr (Char `11`, `string`, Adressee of the SMS)
	+ sessionkey (Varchar `32`, `string`)
	+ fromname (Char `11`, `string`, International mobile nr)
	+ message (Varchar `max 459`, `string`)
	
	
#

+ Model

	```
	{"username":"testuser"}
	```

+ Response 200 (`application/json`)

	+  FeedbackDTO


> 		+ string Result
> 		+ string ResultID
> 		+ string ErrorMessage 