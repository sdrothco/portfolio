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

	$('.project').hover( function() {
		$(this).find('.project-img-overlay').show();
		$(this).find('.project-img-text').show();

	}).mouseleave( function() {
		$(this).find('.project-img-overlay').hide();
		$(this).find('.project-img-text').hide();

	});

});