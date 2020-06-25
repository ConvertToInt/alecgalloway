$(document).ready(function(){
    var mq = window.matchMedia( "(max-width: 1024px)" );
    if (mq.matches) {
        $(".fade").hide(0).delay(75).fadeIn(2500);
    }
    else {
        $(".fade").hide(0).delay(75).fadeIn(2500);
        $(".fadeslower").hide(0).delay(300).fadeIn(2500);
    }

    $(window).scroll(function(){
        $(".fade").css("opacity", 1 - $(window).scrollTop() / 200);
      });
});