(function($){
	
	$(document).ready(function(){
		var speedIt;
		$('.marquee').each(function(){
			speedIt = $(this).attr('data-speed');
			$(this).marqueMe({
				speed 	: speedIt
			});
			console.log(speedIt);
		});
	});

	
}(jQuery));