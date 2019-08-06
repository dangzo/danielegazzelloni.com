# Introduction #

#


The myMailMarket API allows you to integrate your email/SMS address management easily and securely into your own application. 

You are able to create mailinglists, update them, remove them, to synchronize your email addresses, to retrieve which email addresses do bounce, what statistics a sent mailing has generated…  

## REST based

The myMailMarket API is a REST API developed using WCF. As it is a REST API, the usage of the API is not over SOAP, but simply uses the HTTP protocol using GET and POST. The biggest advantage of working via the HTTP protocol, is that any web language (PHP, Ruby, Javascript, .NET, …) can talk to the API with minimal effort.

## API Location

The API is located at:
 
[http://api.mailpartners.be/V2.svc/](http://api.mailpartners.be/V2.svc/)

## API Security

To connect to the myMailMarket API, you will need

- `Username`
- `Password`
- `Sitename`
- `API key`
- `Shared Secret`

The `username`, `password` and `sitename` are sent  to you after we created an account on the myMailMarket system. We advise you to create a separate user for the connections on the API.  

The `API key` and `shared secret` can be retrieved in your Mailpartners account. Just login via [https://secure.mymailmarket.be](https://secure.mymailmarket.be), at the upper right you will find a link “API”. Click on the link and  there you will find your `API key` and `shared secret`. Copy them to your code.

## Libraries & Wrappers 

>		+ ASP.NET support
>		+ POST ASP.NET 
>		+ PHP support

## Errors

myMailMarket uses standard HTTP response codes.

	Code		Description

	200		Everything is OK
	400		Missing a required parameter or calling invalid method
	401		Invalid API key provided
	404		Can't find requested items

## Support

The guide gives an overview of all available functions and how to implement these. The language is pretty technical, if some items need extra explanation, do not hesitate to mail us on [support@mymailmarket.be](mailto:support@mymailmarket.be).
 
