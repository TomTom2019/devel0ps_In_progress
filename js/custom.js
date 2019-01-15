//Add counter
$(document).ready(function(){
    
    $('.counter').counterUp({
    delay: 10,
    time: 2000
   
    
});
    
});

//Wow
$(document).ready(function(){
    //Animation on scroll
    new WOW().init();
    
});

//Magnific-Popup
$(function(){
    $("#portfolio").magnificPopup({
       delegate: 'a',
        type: 'image',
        gallery:{
            enabled: true
        }
    });
    
});

//carousel
$(document).ready(function(){
    
    $(".team-carousel").owlCarousel({
        item: 3,
        autoplay:true,
        loop:true,
        smartSpeed: 700,
        autoplayHoverPause:Boolean
       
      
    });
    
});

// ScroolSpy
$('body').scrollspy({ target: '#navbarNav' })

//hidden bar
$(document).ready(function(){
    
    $(window).scroll(function(){
        
        if($(this).scrollTop() < 50 ){
            $('nav').removeClass('nav-custom')
           
           }else{
             $('nav').addClass('nav-custom')  
           }
        
    });
    
});
//easing-anim
$(function(){
    $("a.easing-anim").click(function(event){
        event.preventDefault();
        
        var section = $(this).attr("href");
        
        $('html, body').animate({
            scrollTop: $(section).offset().top -60
        }, 1250, "easeInOutExpo");
    })
    
});





















