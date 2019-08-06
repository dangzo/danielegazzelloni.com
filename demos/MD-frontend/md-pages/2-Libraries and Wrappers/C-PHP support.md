# PHP Support

For all those webdevelopers out there using PHP, we have created a handy API class you just have to refer to.  

Note: your webhost should support Json encoding/decoding. 
 
Foresee following: 	


		<?php 
		require_once('Mailpartners.api.v2.php');  

		// first create an API object 
		$api = new MailpartnersAPI(); 
		 
		$md5_pass = md5(‘blablabla’);  

		// now connect to the API to get a session key
		$session_key = $api->connect_api($username, 
		$md5_pass,$sitename,$apikey,$sharedsecret); 
    
		// … use $api->… to call the offered functions 
		?>

The API uses XML serialization to send forth and back requests and responses. So you will need to do some XML parsing in order to get the needed info.


