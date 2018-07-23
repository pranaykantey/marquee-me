(function($){
	$.fn.marqueMe = function( options ){
		let marquee,marqueeWidth,container,item,itemWidth,items,itemBg,speedAttr,marqueeInterval,distanceLeft,transformVal;
		speedAttr = $(this).attr('data-speed');
		// default settings
        var opts = $.extend({
            // These are the defaults.
            itemOnScreen 	: 3,
            speed			: 'slow'
        }, options );
        itemBg = [
        	'#283143','#43617D','#5A8DAB','#B5D3DB','#DAD2C7','#00ACC1','#4DD0E1','#E0F7F4','#FAFAFA','#2A2B2C','#3B9994','#8BCCC9','#C8FFDD','#FF88AE','#CC6CBB','#3B0030','#F53A33','#FF9130','#FEDD55','#128C87'
        ];
		// do this effect for each elament
	    return this.each(function() {
	    	// setting up variable values
			marquee 		= $(this);
			marqueeWidth 	= marquee.parent('.main-container').outerWidth();
			container 		= marquee.children('.marquee-container');
			item 			= container.children('.item');
			itemWidth		= marqueeWidth/opts.itemOnScreen;
			items			= container.children('.item').length;

			// setting width for container and items
	        marquee.width( marqueeWidth );
	        container.width( itemWidth*items+100 );
	        item.width( itemWidth );
	        // adding color to items
	        var i = 0;
	        while( i <= items ){
	        	colorNumber 		= Math.floor( Math.random()*Number( itemBg.length ) );
	        	colorChildNumber 	= Math.floor( Math.random()*Number( itemBg.length ) );
	        	container.children('.item:nth-child('+i+')').children('.border').css({
	        		'box-shadow':'0 0 1.5px 0 '+itemBg[colorNumber],
	        		'background-color':itemBg[colorChildNumber]+'07'
	        	});
	        	container.children('.item:nth-child('+i+')').find('h3').css('color',itemBg[colorChildNumber]);
	        	i++;
	        }
	        // marquee stop on hover functionality
	        item.on('mouseover',function(){
	        	clearInterval(marqueeInterval);
	        	distanceLeft = $(this).offset().left;

	        	if( distanceLeft < 0 ){
	        		$(this).parent('.marquee-container').css('padding-left',distanceLeft+'px');
	        	}
	        });
	        item.on('mouseleave',function(){
	        	marqueeInterval = setInterval(runMqrqueeWheel,10);
	        });

	        // runing marquee function ( Interval )
	        var count = 0;
	        marqueeInterval = setInterval(runMqrqueeWheel,10);
	        function runMqrqueeWheel(){

		        if( opts.speed == 'slow' ){
					runSpeed = 1;
		        }
		        if(  opts.speed == 'medium' ){
					runSpeed = 2;
		        }
		        if(  opts.speed == 'fast' ){
					runSpeed = 4;
		        }

	        	if( itemWidth*items+marqueeWidth > count ) {
	        		container.css('visibility','visible');
	        		container.css('margin-left',marqueeWidth+'px');
	        		container.css('transform','translateX(-'+count+'px)');
	        		transformVal = container.attr('data-transformval',count);
	        		count = count+Number(runSpeed);
	        	}else{
	        		count=0;

	        		container.css('transform','translateX('+count+'px)');
	        		container.css('visibility','hidden');
	        		transformVal = container.attr('data-transformval',count);
	        		count = count+Number(runSpeed);
	        	}
	        }
	        // katsat
			console.log( itemBg.length );
			// katsat end
	    });
	}

	// $(document).ready(function(){
	// 	$('.marquee').each(function(){
	// 		speedIt = $(this).attr('data-speed');
	// 		$(this).marqueMe({
	// 			speed: speedIt
	// 		});
	// 		console.log(speedIt);
	// 	});
	// });

}(jQuery));