(function ($) {

    var lastUpdated = new Date(2019, 6, 11);

    /* ---------------------------------------------- /*
     * Preloader
     /* ---------------------------------------------- */

    $(window).load(function () {
        $('#status').fadeOut();
        $('#preloader').delay(350).fadeOut('slow');
    });

    $(document).ready(function () {

        $('body').scrollspy({
            target: '.navbar-custom',
            offset: 50
        });

        $(document).on('click', '.navbar-collapse.in', function (e) {
            if ($(e.target).is('a') && $(e.target).attr('class') !== 'dropdown-toggle') {
                $(this).collapse('hide');
            }
        });

        $('a[href*=#]').bind("click", function (e) {
            if($.attr(this, 'href') !== "#") {
                $('html, body').animate({
                    scrollTop: $($.attr(this, 'href')).offset().top
                }, 500);
                e.preventDefault();
            }
        });

        /* ---------------------------------------------- /*
         * Last updated date
         /* ---------------------------------------------- */
         $(".lastUpdated").text("Last updated: "+moment(lastUpdated).format('MMMM Do, YYYY'));


        /* ---------------------------------------------- /*
         * Background image
         /* ---------------------------------------------- */

        $('#intro').backstretch(['images/_1992.png']);

        /* ---------------------------------------------- /*
         * Navbar
         /* ---------------------------------------------- */

        var navbar = $('.navbar');
        var navHeight = navbar.height();

        $(window).scroll(function () {
            if ($(this).scrollTop() >= navHeight) {
                navbar.addClass('navbar-color');
            }
            else {
                navbar.removeClass('navbar-color');
            }
        });

        if ($(window).width() <= 767) {
            navbar.addClass('custom-collapse');
        }

        $(window).resize(function () {
            if ($(this).width() <= 767) {
                navbar.addClass('custom-collapse');
            }
            else {
                navbar.removeClass('custom-collapse');
            }
        });


        /* ---------------------------------------------- /*
         * Rotate
         /* ---------------------------------------------- */

        $(".rotate").textrotator({
            animation: "dissolve",
            separator: "|",
            speed: 3000
        });

        /* ---------------------------------------------- /*
         * E-mail validation
         /* ---------------------------------------------- */

        function isValidEmailAddress(emailAddress) {
            var pattern = new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);
            return pattern.test(emailAddress);
        }
        
        
        /* ---------------------------------------------- /*
         * Contact form ajax
         /* ---------------------------------------------- */

        $("#contact-form").submit(function (e) {

            e.preventDefault();

            var c_name = $("#c_name").val();
            var c_email = $("#c_email").val();
            var c_message = $("#c_message ").val();
            var responseMessage = $('.ajax-response');

            if ((c_name === "" || c_email === "" || c_message === "") || (c_email === "")) {
                responseMessage.fadeIn(500);
                responseMessage.html('<i class="fa fa-warning"></i> You must fill all fields.');
            } else if (!isValidEmailAddress(c_email)) {
                responseMessage.fadeIn(500);
                responseMessage.html('<i class="fa fa-warning"></i> Invalid email address.');
            } else {
                $.ajax({
                    type: "POST",
                    url: "inc/sendEmail.php",
                    dataType: 'json',
                    data: {
                        c_email: c_email,
                        c_name: c_name,
                        c_message: c_message
                    },
                    beforeSend: function (result) {
                        $('#contact-form button').empty();
                        $('#contact-form button').append('<i class="fa fa-cog fa-spin"></i> Wait...');
                    },
                    success: function (result) {
                        if (result.sendstatus === 1) {
                            responseMessage.html(result.message);
                            responseMessage.fadeIn(500);
                            $('#contact-form').fadeOut(500);
                        } else {
                            console.log('Error message from PHPMailer:');
                            console.log(result.error);
                            $('#contact-form button').empty();
                            $('#contact-form button').append('<i class="fa fa-retweet"></i> Try again');
                            responseMessage.html(result.message);
                            responseMessage.fadeIn(1000);
                        }
                    },
                    error: function(result){
                        console.log('Error message from PHPMailer:');
                        console.log(result.error);
                        $('#contact-form button').empty();
                        responseMessage.html('<i class="fa fa-warning"></i> Something went wrong.');
                        $('#contact-form button').empty();
                        $('#contact-form button').append('<i class="fa fa-retweet"></i> Try again');
                        responseMessage.html(result.message);
                        responseMessage.fadeIn(1000);
                    }
                });
            }

            return false;

        });

    });

})(jQuery);
