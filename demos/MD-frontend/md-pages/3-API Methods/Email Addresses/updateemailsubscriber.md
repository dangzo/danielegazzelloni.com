# Email Address

#

## Update email subscriber 

	[subscriber/address/update?oldemail={oldemail}&newemail={newemail}&group={gr oupid}&session={sessionkey} 

Updates the email address of an existing subscriber to another email address. This is needed when a subscriber (after months/years…) changes his or her email address.   

The new email address should not exist yet in the addresslist, otherwise the function will fail.
  
Both old and new email address must be valid email addresses, otherwise the function will fail.

+ Method

	**GET** (`application/json; utf-8`)

+ Parameters

	+ oldemail (Char `255`, `string`)
	+ sessionkey (Varchar `32`, `string`)
	+ newemail (Char `255`, `string`)
	+ groupid (Char `13`, `string`)
	
	
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
