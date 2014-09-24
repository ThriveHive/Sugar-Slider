var jq = jQuery.noConflict();

(function( $ ) {
	$(function() {
		var parseBool = function(arg){
	        if(typeof arg === 'boolean'){
	            return arg
	        } else if(typeof arg === 'string'){
	            var str = arg.toLowerCase();
	            if(str === 'false'){
	                return false
	            } else if(str === 'true'){
	                return true
	            } else {
	                return undefined;
	            }
	        } else {
	            return undefined;
	            //throw('argument is not a boolean or a string');
	        }
	    };

		$('.sugar-slider').each(function(){
			var defaults = {
					infinite: true,
					speed: 500,
				},
				dataSliderOptions = JSON.parse(this.attributes['data-slider'].value);

			for(var x in dataSliderOptions){
				var parsedBool = parseBool(dataSliderOptions[x]);
				
				if(parsedBool !== undefined){
					dataSliderOptions[x] = parsedBool;
				}  
			}

			var slickOptions = $.extend({}, defaults, dataSliderOptions);

			$(this).slick(slickOptions);
		});
	});

	$(window).load(function () {
		function setEachSliderToMinImageHeight () {
			$('.sugar-slider').each(function (sliderIndex, sliderElement) {
				var lowestImageSize = 1024; // max image size is 1024px height
				var $sliderImages = $(sliderElement).find('img');

				$sliderImages.each(function (sliderImageIndex, sliderImageElement) {
					var $sliderImageElement = $(sliderImageElement);
					lowestImageSize = $sliderImageElement.height() < lowestImageSize ? $sliderImageElement.height() : lowestImageSize;
				});

				$sliderImages.css('max-height', lowestImageSize + 'px');
			});
		}
		setEachSliderToMinImageHeight();
	});
})(jq);