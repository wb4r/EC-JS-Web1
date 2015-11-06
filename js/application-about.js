$(document).ready(function() {
	fade_in_text();
	toggle_email_form();	
});


// FADE IN TEXTS
function fade_in_text() {
	$(".one").fadeIn(8000);
	$('.two').fadeIn(8000);
	$(".three").fadeIn(8000);
	$('.four').fadeIn(8000);
	$(".five").delay(1000).fadeIn(10000);
	$('.six').fadeIn(8000);
	$(".seven").fadeIn(8000);
	$('.eight').delay(1000).fadeIn(10000);
}


// SHOW AND HIDE EMAIL FORM
function toggle_email_form() {
	$( "#contact" ).click(function() {
	  	$(".email").fadeToggle( "slow");
	});
}