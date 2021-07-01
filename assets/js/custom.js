/*--------------------------------------------------------
Font load
---------------------------------------------------------*/
// WebFont.load({
//     // google: {
//     //     families: ['Libre+Baskerville:wght@400;700']
//     // },
//     custom: {
//         families: ['Butler', 'Butler-Bold'],
//         urls: [templatePath + '/css/fonts.min.css']
//     },
//     timeout: 2000
// });







jQuery(document).ready(function ($) {
    
    $('a[target!="_blank"]:not(".not-redirect"):not([href*="#"]):not([href*="javascript:void(0)"])').click(function (t) {
            $("body").addClass("page-have-loader");
        }),
        // setTimeout(function () {
        //     $("body").addClass("page-loading");
        // }, 200), 
        setTimeout(function () {
            runAfterLoader();
            $("body").addClass("page-loaded");
        // runAfterLoad();
    }, 200);

    /*--------------------------------------------------------
    Run after load
    ---------------------------------------------------------*/
    var scrollMagicController = new ScrollMagic.Controller();

    function runAfterLoader() {
        $('.will-animate').each(function () {
            var $sections = $(this);
            var scene01 = new ScrollMagic.Scene({
                    triggerElement: this,
                    duration: 500
                })
                .triggerHook(0.75)
                // .addIndicators()
                .addTo(scrollMagicController);

            scene01.on('enter', function (e) {
                $sections.addClass('animated');
            });
        });

    }

    /*--------------------------------------------------------
	Header stick
    ---------------------------------------------------------*/
    var scroll = $(window).scrollTop();
    if (scroll > 80) {
        $('header').addClass('sticky');
    } else {
        $('header').removeClass('sticky');
    }
    $(window).scroll(function (event) {
        var scroll = $(window).scrollTop();
        if (scroll > 80) {
            $('header').addClass('sticky');
        } else {
            $('header').removeClass('sticky');
        }
    });
    
    /*--------------------------------------------------------
	Menu trigger
    ---------------------------------------------------------*/
    $('.menu-triger').click(function () {
        $('html, body').toggleClass('open');
        $('.menu-triger').toggleClass('open');
        $('.header-menus').slideToggle(400);
        $('.main-header-right').toggleClass('open');
    });
    if ($(window).width() < 1100) {
        $('li.menu-item-has-children >a').click(function (e) {
            $(this).closest('li').toggleClass('opened');
            $('li.menu-item-has-children').find('a').not(this).closest('li').find('.sub-menu').slideUp();
            $(this).closest('li').find('.sub-menu').slideToggle();
            e.stopPropagation();
            e.preventDefault();
        });
    } else {
        $('li.menu-item-has-children').removeClass('opened');
        $('li.menu-item-has-children').find('.sub-menu').show();
    }

    /*--------------------------------------------------------
	Banner slider
    ---------------------------------------------------------*/
    $('.banner-slider').slick({
        infinite: true,
        dots: true,
        arrows: false
    });
    $('.gallery-slider').slick({
        infinite: true,
        dots: false,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 4000,
        slidesToShow: 2,
        rows: 0,
    });
    $('.gallery-slider a').magnificPopup({
        type:'image',
        gallery: {
            enabled: true
        },
    });
    // $('.zoom-map').magnificPopup({
    //     type:'image',
    // });
    
    /*--------------------------------------------------------
	Banner slider
    ---------------------------------------------------------*/
    $('.diagram-item-wrap').matchHeight({
        byRow: false,
        property: 'min-height',
        target: null,
        remove: false
    });

    $('.download-link > a').matchHeight({
        byRow: false,
        property: 'min-height',
        target: null,
        remove: false
    });

    // $('.benefit-item').matchHeight({
    //     byRow: false,
    //     property: 'min-height',
    //     target: null,
    //     remove: false
    // });
    
    // $('.proeprty-gallery-item a').magnificPopup({
    //     type:'image',
    //     gallery: {
    //         enabled: true
    //     },
    // });
    /*--------------------------------------------------------
	Featured properties
    ---------------------------------------------------------*/
    // $('.js-featured-porperties-slider').slick({
    //     infinite: true,
    //     dots: false,
    //     arrows: true
    // });
    /*--------------------------------------------------------
	Tabs
	---------------------------------------------------------*/
    $('.tab-panels').each(function () {
        var firstActive = $(this).find('.tab-panel').first().data('target');
        $(this).find('.tab-panel').first().addClass('active');
        $("." + firstActive).addClass('active');
    });

    $('.tab-panels .tab-panel').each(function () {

        $(this).click(function () {
            // $('.tab-panels .tab-panel').removeClass('active');
            $(this).parent().children('.tab-panel').removeClass('active');
            $(this).addClass('active');
            var clickedTarget = $(this).data('target');
            $(this).parent().next().children(".tab-content").not("." + clickedTarget).fadeOut();
            $(this).parent().next().children(".tab-content").removeClass('active')
            setTimeout(function () {
                $("." + clickedTarget).fadeIn();
                $("." + clickedTarget).addClass('active');
            }, 400);
        });
    });


    /*-----------------------------------------------
    For menu
    -----------------------------------------------*/ 
    $(".menu-trigger").click(function(){
        $(".main-menu").addClass('show-menu');
    });
    $(".menu-trigger-close").click(function(){
        $(".main-menu").removeClass('show-menu');
    });

    /*-------------------------------------------------
    For Tab 
    -------------------------------------------------*/ 
    $(function() {
        $('.tab-listing li a').click(function() {
      
          // Check for active
          $('.tab-listing li').removeClass('active');
          $(this).parent().addClass('active');
      
          // Display active tab
          let currentTab = $(this).attr('href');
          $('.tabs-content .gallery-wrap').hide();
          $(currentTab).show();
      
          return false;
        });
    });
    /*--------------------------------------------------
    For Slider
    --------------------------------------------------*/ 
    var swiper = new Swiper('.client-slider-container', {
        slidesPerView: 'auto',
        loop: true,
        autoHeight: true,
        autoplay: true,
        breakpoints: {
            320: {
              slidesPerView: 2
            },
            600: {
                slidesPerView: 3
            },
            768: {
              slidesPerView: 5
            },
            1000: {
              slidesPerView: 6
            },
            1366: {
              slidesPerView: 6
            },
          }
    });

    // for news slider
    var swiper = new Swiper('.news-blogs-slider', {
        spaceBetween: 30,
        loop: true,
        centeredSlides: true,
        // autoplay: {
        //   delay: 2500,
        //   disableOnInteraction: false,
        // },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      });
});