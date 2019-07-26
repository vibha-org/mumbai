jQuery(document).ready(function( $ ){

    $(".main-menu ul li").hover(function(){
      $(".inside-menu").css("z-index", "0");
      },function(){
      $(".inside-menu").css("z-index", "1");
    });


    var div = $(".vibha-social .large-4");
    
        $.each(div, function(i,v){
            var bottom_of_object = $(this).position().top + $(this).innerHeight();           
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            if( bottom_of_window > bottom_of_object ){
                $(this).animate({"margin" : "0","left" : "0", "right" : "0", "top" : "0", "opacity" : "1"},1500);
            }
        });
    
    

    var video_width = $(".inside-header .custom").width();
    var video_height = ($(".inside-header .custom").height())+100;
    $("iframe").css({"width": video_width +"px", "height": video_height +"px"});

    $(window).resize(function(){
        var video_width = $(".inside-header .custom").width();
        var video_height = ($(".inside-header .custom").height())+100;
        $("iframe").css({"width": video_width +"px", "height": "100%"});
    });
});

function popup_iframe(){
    var video_box = $('.video_box');
    $.each(video_box, function(i,v){
        var image = $(this).find("img");
        var custom = $(this).find(".custom");
        var popup_box = "<div class='popup_box'><div class='iframe_image'></div><div class='iframe_button'><img class='video_button' src='/images/video-button.png'></div></div>";
        if (image.hasClass('video_image')){
            $(image).wrap(popup_box);
            var popup_width = $(".popup_box").width();
            if( popup_width <= 150 ){
                $(".video_button").css("width", "100px");
            }
        }
        else if( custom.length ){
            var custom_iframe = $(custom).find("iframe");
            if( custom_iframe.length ){
                $(custom).wrap(popup_box);
            }
        }

        //$("iframe").css({})
    });

    var video_button = $(".video_button");
    $(video_button).click(function(){
        var html = $(this).closest(video_box);
        var iframe = $(html).find("iframe");
        $(".video_overlay").fadeIn();
        $("h1.heading").fadeOut();
        $(".video_button").fadeOut();
        iframe.fadeIn();
        var custom = $(html).find(".custom");
        if( custom.length ){
            //$(".inside-header #header").css("z-index","200");
        }else{
            //$(".inside-header #header").css("z-index","0");
        }
    });

    $(document).keyup(function(event) {
        if (event.which == 27) { // 27 is 'Ecs' in the keyboard
            $("iframe").fadeOut();
            $("h1.heading").fadeIn();
            $(".video_button").fadeIn();
            //$(".inside-header #header").css("z-index","200");
            $(".video_overlay").fadeOut();
        }
    });

    $(document).mousedown(function(e) {
        if(e.which === 1){
            var target = e.target;
            if (!$(target).is('iframe') && !$(target).parents().is('.video_box')) {
                $("iframe").fadeOut();
                $("h1.heading").fadeIn();
                $(".video_button").fadeIn();
                //$(".inside-header #header").css("z-index","200");
                $(".video_overlay").fadeOut();
            }
        }
    });
}

jQuery(window).load(function($){
    popup_iframe();
});


(function($){
    $.fn.viewportChecker = function(useroptions){
        // Define options and extend with user
        var options = {
            classToAdd: 'visible',
            offset: 100,
            callbackFunction: function(elem){}
        };
        $.extend(options, useroptions);

        // Cache the given element and height of the browser
        var $elem = this,
            windowHeight = $(window).height();

        this.checkElements = function(){
            // Set some vars to check with
            var scrollElem = ((navigator.userAgent.toLowerCase().indexOf('webkit') != -1) ? 'body' : 'html'),
                viewportTop = $(scrollElem).scrollTop(),
                viewportBottom = (viewportTop + windowHeight);

            $elem.each(function(){
                var $obj = $(this);
                // If class already exists; quit
                if ($obj.hasClass(options.classToAdd)){
                    return;
                }

                // define the top position of the element and include the offset which makes is appear earlier or later
                var elemTop = Math.round( $obj.offset().top ) + options.offset,
                    elemBottom = elemTop + ($obj.height());

                // Add class if in viewport
                if ((elemTop < viewportBottom) && (elemBottom > viewportTop)){
                    $obj.addClass(options.classToAdd);

                    // Do the callback function. Callback wil send the jQuery object as parameter
                    options.callbackFunction($obj);
                }
            });
        };

        // Run checkelements on load and scroll
        $(window).scroll(this.checkElements);
        this.checkElements();

        // On resize change the height var
        $(window).resize(function(e){
            windowHeight = e.currentTarget.innerHeight;
        });
    };
})(jQuery);

jQuery(document).ready(function( $ ){
    
$('.tooltip-vibha').hover(function(){
        var title = $(this).attr('title');
        $(this).attr('title', '');
        $(this).append('<div class="tooltip" style="display:block">'+ title +'</div>');
    }, function() {
        var title = $( '.tooltip' ).html();
        $( '.tooltip' ).remove();
        $(this).attr('title', title);
    });
});