$(function() {

	$('#btn-s').click(function() {
		var li = $('#zz > .img:last').animate({'left':'+=550px'}, 1000).fadeOut(1000);
		setTimeout(function() { $('#zz > .img:last').appendTo('#stock-belle').css({'position':'static','margin-left':'5px','margin-right':'5px'}).fadeIn(1000)}, 1500);
	});

	$('#btn-p').click(function() {
		var li = $('#zz > .img:last').animate({'left':'-=550px'}, 1000).fadeOut(1000);
		setTimeout(function() { $('#zz > .img:last').prependTo('#stock-moche').css({'position':'static','margin-left':'5px','margin-right':'5px'}).fadeIn(1000)}, 1500);
	});
});