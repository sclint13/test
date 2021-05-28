$(function(){
	const navbar = $('.navbar');
	let width = $(window).width();

	console.log(width);

	if ((width >= 640) {
		$(window).scroll(function(){
			if($(window).scrollTop() <= 40){
				navbar.removeClass('sticky');
			} else {
				navbar.addClass('sticky');
			}
		});
	})
});
