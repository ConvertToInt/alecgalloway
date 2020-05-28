$(window).scroll(function(){
    $("#maintitle, #navs").css("opacity", 1 - $(window).scrollTop() / 250);
  });