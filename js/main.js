    // nav toggle
    $(".nav-toggle").click(function()
    {
      $(".header .nav").slideToggle();
    });

    $(".header .nav a").click(function(){
      if($(window).width() < 768){
         $(".header .nav").slideToggle();
      }
    });
    
    
