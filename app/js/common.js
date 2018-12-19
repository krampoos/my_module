$(document).ready(function() {
	$('.slider').owlCarousel({
		dots: false,
		items: 1,
		loop: true,
		nav: true,
		navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
})

	$('.offers__list').owlCarousel({
		// dots: false,
		items: 6,
		margin: 20
		// loop: true,
		// nav: false,
		// navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
	})


	$('.commit__list').owlCarousel({
		// dots: false,
		items: 4,
		autoplay: true
		// loop: true,
		// nav: false,
		// navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
	})

});