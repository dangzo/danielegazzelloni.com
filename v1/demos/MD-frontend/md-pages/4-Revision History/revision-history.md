# Revision History

### Revision History version 1.0 ###


		2009 			First public release (v1.0) 
		2010 			Updated mailing to campaigns 
		March 2011 		Added autoresponders and autotriggers
		March 2012		Internal optimizations for logging and exceptions. 
						Added possibility to remove (unsubscribe) mobile GSM numbers from list
		August 2012		Changed URL of API 

### Revision History version 2.0 ###

		February 2013 	First release (v2.0)
		June 2013	 	Update for session keys: varchar(32) instead of char(13). 
						Replaced AddSubscriberprofile and UpdateSubscriberprofile with function ‘SaveSubscriberprofile’
		August 2013 	Rebranded myMailMarket to Mailpartners for API
		March 2013		Added support for triggered emails/SMS

## Major changes over version 1.0

As the first myMailMarket API version dates from 2009, it is logical that over time the code has evolved, has matured, and new and better techniques have come available.   

### Drop support of XML ###

Probably the single most important change is the drop of support for the XML datatype. XML is still quite heavily used in B2B environments, but it has become clear over the past years that it is not a proficient datatype in a web/cloud environment. The datastructure is too verbose, meaning that on a lot of XML files, the actual content was smaller than all the printed datastructure around it.

### Support of Json ###

Json is the de facto standard of datatype used by literally any new web platform. Every web programming language has support for the serialization and deserialization of objects into Json code.

### Cleaner data type objects (DTO) ###

We went through all the declared Data Type Objects and renamed some objects, for example M3Mailing is now M3Campaign. 

### Cleaner logging and error returns ###

Our API registrates better and returns cleaner error messages. 

### Renewed libraries ###

We completely rewrote the .NET API client, and upgraded the PHP5 API class. We dropped the support for PHP4. Note: if you’re webhost uses PHP4, it does not mean you can not connect to our API, it means you can not use our PHP class. If you are proficient in PHP4, you can take our PHP5 class and rewrite it in PHP4.  

As a sidenote, if your webhoster does not support PHP5 yet, you should really consider a webhost that is not stuck in the past (PHP5 exists already more than 7 years now).

