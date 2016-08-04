$(document).ready(function () {
	$(".logo-big").click(function(){
		$(".logo-big").fadeOut(1000, function () {
			$(".hideNav").slideDown(800);
		 	$(".mainSite").fadeIn(1000);

			});

	});

});