// var DWidth = (window.innerWidth > 0) ? window.innerWidth : screen.width;

$(document).ready(function(){
	
	setTimeout(function(){
			$('.spinner').hide();
			$('.page.home-page').show();
		}, 2000);
	

	window.scrollTo(0, 1);
	var triggerEvent= "click"; // touchend for mobile device, click for normal web browser
	
	var snapper = new Snap({
	  element: document.getElementById('content')
	});

	// var mySwiper = new Swiper('.swiper-container',{
 //    slidesPerView: 2,
 //    freeMode: true,
 //    freeModeFluid: true
 //  })
 var mySwiper = new Swiper('.swiper-container', {
    slidesPerView: 'auto',
    watchActiveIndex: true
  });
 



	// Side Menu

	$('.deploy-sidebar, .close-icon').on(triggerEvent,function(e){
		if( snapper.state().state=="left" ){
			snapper.close();	
			$('.profile-toggle').parent().removeClass('open');
			$('.arrow-down').removeClass('open');	
		} else {
			snapper.open('left');

		}
		return false;
	});

	// Profile Open
	$('.profile-toggle').on(triggerEvent,function(e) {
		if( $(this).parent().hasClass('open') ){
			$(this).parent().removeClass('open');
			$('.arrow-down').removeClass('open');		
		} else {
			$(this).parent().addClass('open');
			$('.arrow-down').addClass('open');
		}
		return false;
	});
	
	// Change Page

	var newSec;
	var newTitle;

	$('.nav-item, .welcome').on(triggerEvent,function(e){
		
		newSec = '#' + $(this).attr('rel');
		newTitle = $(this).attr('title');

		$('.page').hide();

		window.scrollTo(0, 1);
		$('.spinner').show();
		
		setTimeout(function(){
			$('.spinner').hide();
			$(newSec).show();
		}, 1000);
		
		//$(newSec).show();

		$('h1.name').text(newTitle);

		$('.nav-item').removeClass('selected');
		$(this).addClass('selected');

		snapper.close();


	});
	


	
	
});




