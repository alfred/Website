$(function() {
	$('.nav-button').click(function() {
		$(this).siblings().removeClass('active');
		$(this).addClass('active');
	});
});