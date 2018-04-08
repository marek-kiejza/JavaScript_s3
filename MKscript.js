/*
Template Name: AquaBusiness
Author: <a href="http://www.os-templates.com/">OS Templates</a>
Licence: Free to use under our free template licence terms
*/


// JavaScript Document
$(document).ready(function() {
   
    
    /*href to github -change image to git hub img ,after 3 are click transferred to www.github.com */
    var git1=false;
    var git2=false;
    var git3=false;
    
    $(".imgholder:eq(4)" ).click(function(a){
    $('.imgholder:eq(4) img').attr('src', 'images/demo/octocat.jpg');
        git1=true;
      if(git1==true && git2==true && git3==true)
     $('.imgholder:eq(4) a').attr("href", "https://github.com/");
        });
    $(".imgholder:eq(5)" ).click(function(a){
    $('.imgholder:eq(5) img').attr('src', 'images/demo/octocat.jpg');
        git2=true;
      if(git1==true && git2==true && git3==true)
     $('.imgholder:eq(5) a').attr("href", "https://github.com/");
            });
    $(".imgholder:eq(6)" ).click(function(a){
    $('.imgholder:eq(6) img').attr('src', 'images/demo/octocat.jpg');
        git3=true;
      if(git1==true && git2==true && git3==true)
     $('.imgholder:eq(6) a').attr("href", "https://github.com/");
    
});
//animation on open the page
    function start(){
		
      $('#bigWrap').animate({opacity:"1"},3000);
      $('#devstyle').animate({opacity:"0"},3000);
    }
   start();
    
/*facebook game -START
be click on the first,third and seven social media icon text change
from "You like facebook?" to "You can go to facebook =>" now be presing Go move to facebook web page
*/
        var enter1=false;
        var enter2=false;
        var enter3=false;
        var enter4=false;
        var enter5=false;
        var enter6=false;
        var enter7=false;
        var enter8=false;


    
    $('#social img:eq(0)').click(function(){
        enter1=true;
       $(this).css({opacity:"0.5"});
            if(enter1==true && enter3==true && enter7==true)
        $('#facebook').val("You can go to facebook =>");
          
	});
       $('#social img:eq(1)').click(function(){
        enter1=false;
       $(this).css({opacity:"0.5"});
         
	});
       $('#social img:eq(2)').click(function(){
        enter3=true;
       $(this).css({opacity:"0.5"});
            if(enter1==true && enter3==true && enter7==true)
        $('#facebook').val("You can go to facebook =>");
         
	});
       $('#social img:eq(3)').click(function(){
        enter3=false;
       $(this).css({opacity:"0.5"});
         
	});
       $('#social img:eq(4)').click(function(){
        enter1=false;
       $(this).css({opacity:"0.5"});
         
	});
       $('#social img:eq(5)').click(function(){
        enter3=false;
       $(this).css({opacity:"0.5"});
         
	});
       $('#social img:eq(6)').click(function(){
        enter7=true;
       $(this).css({opacity:"0.5"});
            if(enter1==true && enter3==true && enter7==true)
        $('#facebook').val("You can go to facebook =>");
         
	});
       $('#social img:eq(7)').click(function(){
        enter7=false;
       $(this).css({opacity:"0.5"});
         
	});
  
    
       $('#social img:eq(0)').dblclick(function(){
        enter1=false;
       $(this).css({opacity:"1"});
         
	});
        $('#social img:eq(1)').dblclick(function(){
        enter2=false;
       $(this).css({opacity:"1"});
         
	});
       $('#social img:eq(2)').dblclick(function(){
        enter3=false;
       $(this).css({opacity:"1"});
         
	});
        $('#social img:eq(3)').dblclick(function(){
        enter4=false;
       $(this).css({opacity:"1"});
         
	});
       $('#social img:eq(4)').dblclick(function(){
        enter5=false;
       $(this).css({opacity:"1"});
         
	});
        $('#social img:eq(5)').dblclick(function(){
        enter6=false;
       $(this).css({opacity:"1"});
         
	});
       $('#social img:eq(6)').dblclick(function(){
        enter7=false;
       $(this).css({opacity:"1"});
         
	});
        $('#social img:eq(7)').dblclick(function(){
        enter8=false;
       $(this).css({opacity:"1"});
         
	});
        
         $('#gobtn').click(function(){
             if(enter1==true && enter3==true && enter7==true)
    {
         $(this).attr("href", "https://www.facebook.com/");
    }
	});
    
//facebook game -END
    
    
/*change between page look/style (text font:size,family,background-color) be adding and remove class -START*/
    
    
        $("#styleChanger1").click(function(){
        $('body').addClass("style1");
        $('#intro').addClass("style3");
        $('div:eq(0)').removeClass("wrapper col1");
        $('div:eq(0)').addClass("style2");
        $('#styleChang1').removeClass("wrapper col2");
        $('#styleChang1').addClass("style2");
        $('#styleChang2').removeClass("wrapper col3");
        $('#styleChang2').addClass("style3");
                });
            
        $("#styleChanger2").click(function(){
        $('body').removeClass("style1");
        $('#intro').removeClass("style3");
        $('div:eq(0)').addClass("wrapper col1");
        $('div:eq(0)').removeClass("style2");
        
        $('#styleChang1').removeClass("style2");
        $('#styleChang1').addClass("wrapper col2");
        $('#styleChang2').removeClass("style3");
        $('#styleChang2').addClass("wrapper col3");
            
    });
    
//change between page -END
    
/* 
Receive weather -START
Be registered to www.openweathermap.org and receive API Key I can get ajax for Sligo weather.
*/
    
     function getWeather(){
      $.ajax('http://api.openweathermap.org/data/2.5/weather?q=sligo&appid=49afd2758cf9e7566e0cf2536a9d69ac&units=metric', {
          
       dataType: 'jsonp',
       success: function(json) {
            
        var temp = Number(json.main.temp.toFixed(0));
          $('div#city strong').text('Temp: '+temp +' C')
          $('div#icon').html("<img src='http://openweathermap.org/img/w/" + json.weather[0].icon + ".png'>");
          $('div#weather').text('Location: '+json.name + " , " + json.sys.country);
        
        }
      });
    }

    $('#weatherBtn').click(function(e) {
      e.preventDefault();
      getWeather();
      $('#result').fadeIn(1000);
    });
    
//Receive weather -END
    
  
    
    
//Animation of Logos - START
   
	$('.imgholder:eq(0)').mouseover(function(){
		//$(this).transform: rotate(360deg);
        $(this).css({transform: "rotate(180deg)"});
       
	});
    $('.imgholder:eq(0)').mouseout(function(){
		//$(this).transform: rotate(360deg);
        $(this).css({transform: "rotate(360deg)"});
       
	});
    
    $('.imgholder:eq(1)').mouseover(function(){
		//$(this).transform: rotate(360deg);
    $(this).animate({opacity:"0.5"},650);
       
	});
    $('.imgholder:eq(1)').mouseout(function(){
		//$(this).transform: rotate(360deg);
       $(this).animate({opacity:"1"},650);
       
	});
    	$('.imgholder:eq(2)').mouseover(function(){
		//$(this).transform: rotate(360deg);
        $(this).css({transform: "rotate(180deg)"});
       
	});
    $('.imgholder:eq(2)').mouseout(function(){
		//$(this).transform: rotate(360deg);
        $(this).css({transform: "rotate(360deg)"});
       
	});
    	$('.imgholder:eq(3)').mouseover(function(){
		//$(this).transform: rotate(360deg);
       $(this).animate({opacity:"0.5"},650);
       $(this).animate({opacity:"1"},650);
	});
//Animation of Logos - END
 
/*
SlideShow - START 
after click on the slideshow button
download from - http://www.slidesjs.com/
*/  var change;
      $("#manu").click(function(){
      $("#slides").toggle();
      $("#intro").toggle();
          
    });
    
      $('#slides').slidesjs({
        width: 940,
        height: 528,
        play: {
          active: true,
          auto: true,
          interval: 4000,
          swap: true
        }
      });


//text sliders
    $('#p1').mouseover(function(){
        $('.imgholder:eq(4)').slideUp(500);
        $(this).css("font-size", "20px");
    });
     $('#p2').mouseover(function(){
        $('.imgholder:eq(5)').slideUp(500);
        $(this).css("font-size", "20px");
    });
     $('#p3').mouseover(function(){
        $('.imgholder:eq(6)').slideUp(500);
        $(this).css("font-size", "20px");
    });
       $("#p1").mouseout(function(){
        $('.imgholder:eq(4)').slideDown(500);
        $(this).css("font-size", "15px");
    });
     $("#p2").mouseout(function(){
        $('.imgholder:eq(5)').slideDown(500);
        $(this).css("font-size", "15px");
    });
     $("#p3").mouseout(function(){
        $('.imgholder:eq(6)').slideDown(500);
        $(this).css("font-size", "15px");
    });
 $("#slides").hide();
// SlideShow - END
    
    //Copyright flote left
    
     $("#footer").mouseover(function(){
       $('.fl_left:last').animate({left: '600px'});
    });
});

 