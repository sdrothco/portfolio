$(document).ready(function() {

	$('#fullpage').fullpage({
		resize: false,
		autoScrolling: false,
		keyboardScrolling: false,
		//scrollOverflow: true,
		menu: '#menu',
		anchors: ['aboutPage', 'portfolioPage', 'skillsPage', 'contactPage']
		//navigation: true,
		//navigationPosition: 'right',
		//navigationTooltips: ['About', 'Portfolio', 'Skills', 'Contact']
	});

	$('#mobile-menu-link').on( 'click', function (e) {
		e.preventDefault();
		$('#menu').slideToggle();

	});
	$('#menu a').on('click', function() {
		if ( $('#mobile-menu-link').is(':visible') ) {
			$('#menu').slideToggle();
		}

	});

});