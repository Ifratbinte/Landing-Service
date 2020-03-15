(function ($) {
	"use strict";

    jQuery(document).ready(function($){
        
        /*--WOW.js--*/
        new WOW().init();
		
		//Menumaker js
		$("#cssmenu").menumaker({
			title: "Menu",
			format: "multitoggle"
		});
        
		//Slider Carousal
		$(".slider-item-list").owlCarousel({
			items: 1,
			autoplay: true,
			margin: 30,
			dots: true,
			loop: true,
		});
		
        //Scroll Down Button
        $('.scroll-down').click (function() {
            $('html, body').animate({scrollTop: $('.about-area').offset().top }, 'slow');
            return false;
        });
        
        //magnific popup
        $('.video-play-btn').magnificPopup({
            type: 'video'
            // other options
        });
        
        //Course Carousal
        $(".course-list").owlCarousel({
            items: 3,
            autoplay: true,
            margin: 30,
            dots: true,
            loop: true,
			
			responsiveClass: true,
            responsive:{
                0:{
                    items:1,
                    nav:false
                },
                640:{
                    items:2,
                    nav:false
                },
                768:{
                    items:3,
                    nav:false
                }
            }
        });
		
        //Team Member Carousal
        $(".team-member-list").owlCarousel({
			items: 3,
			autoplay: true,
            margin: 30,
            loop: true,
            nav: true,
            navText: ["<i class='fa fa-long-arrow-left'></i>","<i class='fa fa-long-arrow-right'></i>"],
			
			responsiveClass: true,
            responsive:{
                0:{
                    items:2,
                    nav:true
                },
                640:{
                    items:2,
                    nav:true
                },
                768:{
                    items:3,
                    nav:true
                }
            }
        });
        //Testimonial Carousal
        $(".testimonial-list").owlCarousel({
			items: 2,
			autoplay: true,
            margin: 30,
            loop: true,
            nav: true,
            navText: ["<i class='fa fa-long-arrow-left'></i>","<i class='fa fa-long-arrow-right'></i>"],
			
			responsiveClass: true,
            responsive:{
                0:{
                    items:1,
                    nav:true
                },
                640:{
                    items:2,
                    nav:true
                },
                768:{
                    items:2,
                    nav:true
                }
            }
        });
        
        
    });


    jQuery(window).load(function(){

        
    });


}(jQuery));	