$(document).ready(function() {	
	change_background();
	change_quote_position();	
})


// ON HOVER RIGHT BOTTOM CORNER, CHANGE BACKGROUND
function change_background() {
	$(".navbar-col-class").hover(function() {
		$(".container").fadeTo('fast', 1, function() {
			$(this).css("background", "url(img/bench-yellow.jpg)").css("background-size", "cover");
		}).fadeTo('fast', 1);
	});
}


// ON HOVER RIGHT BOTTOM CORNER, CHANGE QUOTE POSSITION
function change_quote_position() {
	$(".navbar-col-class").hover(function() {
		setTimeout(function() {
			$('#toggler-1').addClass("make-room-2");
			$('#toggler-1').removeClass("make-room-1");
			$('#toggler-2').addClass("col-sm-offset-7");
			$('#toggler-2').removeClass("col-sm-offset-4");
		}, 800);				
	});
}

