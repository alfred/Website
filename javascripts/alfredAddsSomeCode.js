$(function() {
	$('.nav-button').click(function() {
		$(this).siblings().removeClass('active');
		$(this).addClass('active');

	});

	$('a[href*=#]:not([href=#])').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			if (target.length) {
				$('html,body').animate({
					scrollTop: (target.offset().top - 60) // 60? I do not know where this comes from?
				}, 200);
				return false;
			}
		}
	});
});