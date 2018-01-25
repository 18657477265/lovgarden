$(function(){
   //判断是否是移动端还是PC端 test
   function equipmentCheck() { 
	   	var width = window.innerWidth;
	   	if(width < 768) {
	   		return "mobile";
	   	}
	   	else if(width >= 768 && width <1199 ) {
	   		return "tablet";
	   	}
	   	else {
	   		return "pc";
	   	}
   }

   var device = equipmentCheck();
   if(device == 'pc') {
	   $("#shop-market").hover(function(){
	      $("#shop-menu-dropdown").css("display","block");
	   });
	   $("#shop-menu-dropdown").hover(function(){ },function() {
	   	  $("#shop-menu-dropdown").css("display","none");
	   });
   }
   else if(device == 'tablet') {
	   $('#shop-market').on('click',function(e) { 
	      $("#shop-menu-dropdown").slideToggle(500);
	   });
   }
   else if (device == 'mobile') {
	   $('.mobile-menu-show').on('click',function(e) {
	   	  $('#mobile-menu-section').show();
	   });

	   $('.mobile-menu-close').on('click',function(e) {
	   	  $('#mobile-menu-section').hide();
	   });

	   $('.account.top').on('click',function() {
	   	  if($('.account span').hasClass("glyphicon-plus")) {
	   	  	$('.account span').removeClass("glyphicon-plus");
	   	  	$('.account span').addClass("glyphicon-minus");
	   	  }
	   	  else {
	   	  	$('.account span').removeClass("glyphicon-minus");
	   	  	$('.account span').addClass("glyphicon-plus");
	   	  }
	   	  $(".account.foder").slideToggle(300);
	   });

	   $('.mobile-shop.top').on('click',function() {
	   	  if($('.mobile-shop span').hasClass("glyphicon-plus")) {
	   	  	$('.mobile-shop span').removeClass("glyphicon-plus");
	   	  	$('.mobile-shop span').addClass("glyphicon-minus");
	   	  }
	   	  else {
	   	  	$('.mobile-shop span').removeClass("glyphicon-minus");
	   	  	$('.mobile-shop span').addClass("glyphicon-plus");
	   	  }
	   	  $(".mobile-shop.foder").slideToggle(300);
	   });

	   $('.deliver-time.top').on('click',function() {
	   	  if($('.deliver-time span').hasClass("glyphicon-plus")) {
	   	  	$('.deliver-time span').removeClass("glyphicon-plus");
	   	  	$('.deliver-time span').addClass("glyphicon-minus");
	   	  }
	   	  else {
	   	  	$('.deliver-time span').removeClass("glyphicon-minus");
	   	  	$('.deliver-time span').addClass("glyphicon-plus");
	   	  }
	   	  $(".deliver-time.foder").slideToggle(300);
	   });

	   $('.other-service.top').on('click',function() {
	   	  if($('.other-service span').hasClass("glyphicon-plus")) {
	   	  	$('.other-service span').removeClass("glyphicon-plus");
	   	  	$('.other-service span').addClass("glyphicon-minus");
	   	  }
	   	  else {
	   	  	$('.other-service span').removeClass("glyphicon-minus");
	   	  	$('.other-service span').addClass("glyphicon-plus");
	   	  }
	   	  $(".other-service.foder").slideToggle(300);
	   });

	   $('.about-us.top').on('click',function() {
	   	  if($('.about-us span').hasClass("glyphicon-plus")) {
	   	  	$('.about-us span').removeClass("glyphicon-plus");
	   	  	$('.about-us span').addClass("glyphicon-minus");
	   	  }
	   	  else {
	   	  	$('.about-us span').removeClass("glyphicon-minus");
	   	  	$('.about-us span').addClass("glyphicon-plus");
	   	  }
	   	  $(".about-us.foder").slideToggle(300);
	   });

	   $('.about-help.top').on('click',function() {
	   	  if($('.about-help span').hasClass("glyphicon-plus")) {
	   	  	$('.about-help span').removeClass("glyphicon-plus");
	   	  	$('.about-help span').addClass("glyphicon-minus");
	   	  }
	   	  else {
	   	  	$('.about-help span').removeClass("glyphicon-minus");
	   	  	$('.about-help span').addClass("glyphicon-plus");
	   	  }
	   	  $(".about-help.foder").slideToggle(300);
	   });
   }

   /*product list 页面 filter 展开*/
   $(".filter-deliver-time").mouseover(function(){
      $(".filter-deliver-time .input-choice").css("display","block");
      $(".filter-deliver-time .filter-input-icon").removeClass("glyphicon-menu-down");
      $(".filter-deliver-time .filter-input-icon").addClass("glyphicon-menu-up");
   });
   $(".filter-deliver-time").mouseout(function(){
      $(".filter-deliver-time .input-choice").css("display","none");
      $(".filter-deliver-time .filter-input-icon").removeClass("glyphicon-menu-up");
      $(".filter-deliver-time .filter-input-icon").addClass("glyphicon-menu-down");
   });

   $(".filter-flower-type").mouseover(function() {
   	  $(".filter-flower-type .dynamic-span").css("height","150%");
   	  $(".input-choice-two").css("display","block");
   });
   $(".filter-flower-type").mouseout(function() {
   	  $(".filter-flower-type .dynamic-span").css("height","100%");
   	  $(".input-choice-two").css("display","none");
   });
})