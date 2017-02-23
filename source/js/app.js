flipModule.init();
fullScreenMenuModule.init();
slider.init();


var blur = function(){
  var wrapper = document.querySelector(".feedbackForm"),
      form = document.querySelector(".blur");


  return{
    set: function(){
      var imgWidth = document.querySelector(".blur_bg").offsetWidth,
          posLeft = -wrapper.offsetLeft,
          posTop = -wrapper.offsetTop,
          blurCss = form.style;

      blurCss.backgroundSize = imgWidth+'px'+' '+ 'auto';
      blurCss.backgroundPosition = posLeft+'px'+' ' +posTop+ 'px';
    }
  }

blur.set();

}();

window.onresize = function(){
  blur.set();
};

var blogModule =(function(){


    var     blog_nav = $('.blog_menu .blog-nav'),
            blog_navTop = blog_nav.offset().top,
            blog_link = $('.blog_menu').find('.blog-nav_link'),
            button = $('.before');

    var init = function(){
        _setUpListners();
       
    };

    var _setUpListners = function(){
        $(window).on('scroll', _fixed);
        $(window).on('scroll', _checkArticle);
        blog_link.on('click', _scrollToArticle);
        blog_link.on('click',  _activeXOut);
        button.on('click', _activeX);    
    };


    var _scrollToArticle = function(e){
        e.preventDefault();
        var article = $(this).attr('href');

        _showArticle($(this).attr('href'), true);
    };

    var _fixed = function(){

        var 
            wScroll = $(window).scrollTop();
        
        if(blog_navTop < wScroll){
            blog_nav.addClass('fixed');
        } else {
            blog_nav.removeClass('fixed');
        }
    };

    var _activeX = function(){

        $('.blog_menu').toggleClass('activeX');
        
    };

    var _activeXOut = function(){
        $('.blog_menu').removeClass('activeX');
    };

    var _showArticle = function(article, isAnimate){
       var direction = article.replace(/#/, ''),
           reqArticle = $('.blog_article').filter('[data-article="'+ direction +'"]'),
           reqArticlePos = reqArticle.offset().top;
       if(isAnimate){
           $('body, html').animate({scrollTop: reqArticlePos}, 500);
       } else {
           $('body, html').scrollTop(reqArticlePos);
       }
   };

    var _checkArticle = function(){

        $('.blog_article').each(function(){
            var $this= $(this),
                topEdge = $this.offset().top-300,
                bottomEdge = topEdge + $this.height(),
                wScroll = $(window).scrollTop();

            if(topEdge < wScroll && bottomEdge > wScroll){
                var currentId = $this.data('article');
                console.log(currentId);
                var   reqLink = $('.blog-nav_link').filter('[href="#' + currentId +'"]');

                reqLink.closest('.blog-nav_item').addClass('active').siblings().removeClass('active');
                window.location.hash = currentId;
            }

        });

    };

    return {
        init: init
    };
     
})();

blogModule.init();


  

