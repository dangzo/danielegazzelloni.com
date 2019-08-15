		$( document ).ready(function() {

			$('input, textarea').placeholder();
			
			// dependency on progressbtn-script.js
			$('.progress-button').progressInitialize();

			$('.menu-trigger').on( "click", function(event) {
				$('#wrapper').toggleClass('nav-active');
				$('.menu-mobile').toggleClass('nav-active');
			});
			
			$('.signup-trigger').on( "click", function(event) {
				event.preventDefault();

				$('#signup-modal').addClass('is-visible');

				return false;
			});
			$('#li3').on("click", function(event) {
				window.location("5-ways-to-integrate-email-and-social-media-marketing.html");
			});
			
 			$('#btnSend').click(function(event)
			{
		 	  event.preventDefault();
			 if(validateEmail($('#emailaddress').val()))
			 {	
				 $('#emailaddress').removeAttr('style');			 
			 	 console.log('valid email address');
				 if(validateInputFields())
				 {				 
				    $(this).progressTimed(3);
					
					var url = 'https://api.mailpartners.be/V2.svc/demo/register?session=111&EmailAddress=' + encodeURIComponent($('#emailaddress').val()) 
					+ '&DomainName=' + encodeURIComponent($('#websiteaddress').val()) + '&AccountName=' + encodeURIComponent($('#companyname').val()) 
					+ '&Name=' + encodeURIComponent($('#emailaddress').val()) + '&Language=EN&Via=' + encodeURIComponent('mymailmarket.com') + '&Pw=' + $('#pw').val();
														
					  console.log(url);

					 $.ajax(
					 {																								
						 url: url,
						 type: 'GET',
						 dataType: "jsonp",
						 contentType: "application/json",
						 success: function (data) {
							  $.each(data, function(index, element) {
								if(index == 'Result')
								{ 
								  if (element == 'NOK')
									handleError(data);
								  else
								   handleSuccess(data);
								}
							});													 
						 },
						 error: function (response) {
							 console.log("error: " + data);
							 //handleResponse(response);
							 window.alert('Problem while calling API. Contact us at yo@mymailmarket.com');
						 }
					 });	 
				 } // end validate
			 }
			 else {
			   console.log('invalid email address.');
			   $('#emailaddress').css('border-width','1px');
			   $('#emailaddress').css('border-color','red');
			 }

			});

			$('.overlay').on( "click", function() {
				$('#signup-modal').removeClass('is-visible');
			});

			$('.modal-close').on( "click", function() {
				$('#signup-modal').removeClass('is-visible');
			});
			
			$('.pricing-box ul li').on( "click", function() {
				var activeTab = $(this).data('tab');
				
				$('.pricing-box ul li').removeClass('active');
				$('.pricing-box .options').removeClass('active');
				
				$(this).addClass('active');
				$('.pricing-box .options[data-tab="' + activeTab + '"]').addClass('active');
			});
			
		});
		
		function handleSuccess(e)
		{
			$('#registertitle').html('Thanks for signing up!');
			$('#frmRegistration').css('display','none');
			$('#signedup1,#signedup2').css('display','block');
		}
		
		function handleError(e)
		{
			window.alert('Could not register an account. Please contact yo@mymailmarket.com');
		}
		
		function validateInputFields()
		{
		   $('#pw').removeAttr('style');
		   $('#websiteaddress').removeAttr('style');
		   $('#companyname').removeAttr('style');
		   
		   if($('#pw').val().length <= 0)
			{
			   $('#pw').css('border-width','1px');
			   $('#pw').css('border-color','red');
				return false;
			}
		
		  if($('#websiteaddress').val().length <= 0)
			{
				//window.alert('Please check website address');
			   $('#websiteaddress').css('border-width','1px');
			   $('#websiteaddress').css('border-color','red');
				return false;
			}
		  if($('#companyname').val().length <= 0)
			{
			   $('#companyname').css('border-width','1px');
			   $('#companyname').css('border-color','red');
				return false;
			}  
		 //if($('#username').val().length <= 0)
			//{
			//	window.alert('Please check user name');
		//		return false;
		//	}  	
		  return true;
		}
		
	function validateEmail(emailAddress) {

		var pattern = new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);
		return pattern.test(emailAddress);
	}

	
	function getUrlVars() {
         var vars = [], hash;
         var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
         for (var i = 0; i < hashes.length; i++) {
             hash = hashes[i].split('=');
             vars.push(hash[0]);
             vars[hash[0]] = hash[1];
         }
         return vars;
     }
     function trim(stringToTrim) {
         return stringToTrim.replace(/^\s+|\s+$/g, "");
     }

     var e = getUrlVars()["emailaddr"];
     if(e != null)
     {
       e = decodeURIComponent(e);
       
   	   if(isValidEmailAddress(e))
   	   {
   		 document.getElementById('txtMail').value = e;
	     window.setTimeout(function ()
	     {
	        document.getElementById('txtFirstname').focus();
	     }, 0);	 
       }
     }