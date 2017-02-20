$( document ).ready(function() {


	// make menu fixed when user scrolls

	var targetOffset = $(".menu").offset().top;

	var $w = $(window).scroll(function(){
		if ( $w.scrollTop() > targetOffset ) {   
			$(".menu").addClass('fixed')
		} else {
			$(".menu").removeClass('fixed')
		}
	});

	// toggle mobile menu

	$('.mobile-menu').click(function(){
		$(this).toggleClass('close');
		$('.primary-menu').slideToggle(); 
	})


});