$(document).ready(function() {
	$('.card').on('click', function() {
		$(this).toggleClass('black-bg');
		console.log($(this))
	});
});
