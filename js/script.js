// hamburger menu
$(".hamburger").click(function() {
    $(".navigation").toggleClass("active");
    $(".icons").toggleClass("active");
    $(".line-1").toggleClass("rotate-line-1");
    $(".line-3").toggleClass("rotate-line-2");
    $(".line-2").toggleClass("remove-line-3");
});

// slider-carousal
$('.slider-carousal').owlCarousel({
    loop:true,
    nav:false,
    autoplay: true,
    autoplayTimeout: 4000,
    dots:false,
    responsive:{
        0:{
            items:1
        },
        700:{
            items:1
        },
        900:{
            items:1
        },
        1200:{
            items:1
        }
    }
})

// team-slider
$('.team-slider').owlCarousel({ 
    loop:true,
    nav:true, 
    autoplay: true,
    margin: 20,
    autoplayTimeout: 4000,
    autoplaySpeed: 1500,
    dots:false,  
    responsive:{
        0:{
            items:1
        },
        550:{ 
            items:1
        },
        600:{ 
            items:2 
        },
        850:{ 
            items:3
        }
    }
})
















