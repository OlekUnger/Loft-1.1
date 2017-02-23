(function(){
  $(window).scroll(function(){
    var scroll =$(this).scrollTop();

    $(".user").css({
      "transform": "translate(0%, " + scroll/9+"%"
    });
    $(".wrapper_img").css({
      "transform": "translate(0%, " + scroll/85+"%"
    });
  });

})();