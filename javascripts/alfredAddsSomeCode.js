$(function() {
	$('.nav-button').click(function() {
		$(this).siblings().removeClass('active');
		$(this).addClass('active');

	});

	$('a[href*=#]:not([href=#])').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			console.log("Location.pathname: " + location.pathname);
			var target = $(this.hash);
			console.log("target: " + target.length);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			console.log("target after ternary: " + target.offset().top);
			if (target.length) {
				$('html,body').animate({
					scrollTop: (target.offset().top - 70) // 70 is how big the navbar is
				}, 200);
				return false;
			}
		}
	});
});