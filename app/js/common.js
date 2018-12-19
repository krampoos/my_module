$(document).ready(function() {
	$('.slider').owlCarousel({
		dots: false,
		items: 1,
		loop: true,
		nav: true,
		navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
})

	$('.offers__list').owlCarousel({
		items: 6,
		margin: 20
	})


	$('.commit__list').owlCarousel({
		items: 4,
		autoplay: true
	})

});