
$(document).ready(function(){
    $('#socials img.transparent').mouseover(function(){
        $(this).css({opacity: 0});
        $(this).next().css({opacity: 1});
                
    }).mouseout(function() {
        $(this).css({opacity: 1});
        $(this).next().css({opacity: 0});
    });
    
    /*$('#socials img').mouseover(function(){
        var src = $(this).attr("src").match(/[^\.]+/) + "-h.png";
        $(this).attr("src", src);
                
    }).mouseout(function() {
        var src = $(this).attr("src").replace("-h.png", ".png");
        $(this).attr("src", src);
    });*/
});
