$(function() {
	/* version xml */
	$('#zz').load('xml/photo.xml .img');
	$('h2').css('color','#ffb2b2'); /* Petite bricole : ne pas voir les h2 */
	
	$('#btn-s, #btn-p').click(function() {/* Clic vers la droite ou la gauche */
		$('#zz > .img:nth-child(1)').removeClass( "img" );
	});

	$('#btn-s').click(function() {/* clic vers la droite : belle */
		
		setTimeout(function() { $('h2:first').css('color','#fff').fadeIn(1000)}, 1500); // Afficher h2 les belles à tant et tant de seconde 
		
		$('#zz > .img:last').animate({'left':'+=550px'}, 1000).fadeOut(1000); // Déplace vers la droite et fait disparaître l'image
		setTimeout(function() { $('#zz > .img:last').appendTo('#stock-belle').css({'position':'static','margin-left':'5px','margin-right':'5px'}).fadeIn(1000)}, 1500); // Fait apparaître doucement l'image dans h2 belles 
	});

	$('#btn-p').click(function() {/* clic vers la gauche : moche */

		setTimeout(function() { $('h2:last').css('color','#fff').fadeIn(1000)}, 1500); // Afficher h2 les moches à tant et tant de seconde
		
		$('#zz > .img:last').animate({'left':'-=550px'}, 1000).fadeOut(1000); // Déplace vers la gauche et fait disparaître l'image
		setTimeout(function() { $('#zz > .img:last').prependTo('#stock-moche').css({'position':'static','margin-left':'5px','margin-right':'5px'}).fadeIn(1000)}, 1500); // Fait apparaître doucement l'image dans h2 moches
	});
});