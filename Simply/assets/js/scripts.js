/* ----------------------------------------------------------------------------------------
* Author        : Nababur
* Template Name : Simply - Personal Portfolio Template
* Author Url    : https://nababur.com/
* File          : Simply custom Js file
* Version       : 1.0.0
* ---------------------------------------------------------------------------------------- */
(function ($) {
    "use strict";

    // Active Preloader Js
    var preLoader = $(window);
    preLoader.on("load", function () {
        var preloader = jQuery('.preloader');
        var spinnerTime = jQuery('.spinner');
        preloader.fadeOut();
        spinnerTime.delay(400).fadeOut('slow');
    });


    /* scrollspy and top scroll script */
    $(document).ready(function(){
      // Add scrollspy to <body>
      $('body').scrollspy({target: ".top-nav-menu", offset: 75});   
        $('.top-nav-menu ul li a, .cv-download-btn a.btn-slide-right').on('click', function(){
            var id = $(this).attr('href');
            var h = parseFloat($(id).offset().top);
            $('body,html').stop().animate({
                scrollTop: h - 70
            }, 900);

            return false;
        });
    });

    // Load Hamburger
    jQuery(document).ready(function(){
        //Hamburger menu toggle
        $('.top-nav-menu ul li a.nav-link').on('click', function(){
            // check if window is small enough so dropdown is created
            var toggle = $(".navbar-toggler-icon").is(":visible");
            if (toggle) {
              $(".navbar-collapse").collapse('hide');
            }

        });
    });

    // Load More Portfolio
    jQuery(document).ready(function(){
        $("#loard-itmes button").on('click',function(){
            $(".more-load").show('slow')
        });

    });

    // Skills Progress Active js
    $(window).on("scroll", function() {
        var bar = $("#skills .progress-bar"),
                barPos, 
                windowBtm = $(window).scrollTop() + $(window).height();
        bar.each(function () {
            barPos = $(this).offset().top;
            if(barPos <= windowBtm - 50) {
                $(this).css("width", function() {
                    return $(this).attr("data-width");
                });
                $(this).children(".percent").css({
                    '-webkit-transform': 'scale(1)',
                    '-moz-transform': 'scale(1)',
                    '-ms-transform': 'scale(1)',
                    '-o-transform': 'scale(1)',
                    'transform': 'scale(1)'
                });
            }
        });
    });

    // Skill Bar
      $('.chart').easyPieChart({
        scaleColor: "#eee",
        lineWidth: 8,
        
        barColor: '#3b3b3b',
        trackColor: "#fff",
        size: 160,
        animate: 500
      });


    //  scroll Top Active js
    $(window).on('scroll',function() {  
        if($(this).scrollTop() > 300){
            $("#to-top").fadeIn();
        }else{
            $("#to-top").fadeOut();
        }
    });

    // scrollTop Active js
    $('#to-top').on('click', function(){
        $("html, body").animate({scrollTop:0}, 500);
        return false;
    });




})(jQuery);



