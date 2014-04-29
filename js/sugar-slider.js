var jq = jQuery.noConflict();

(function( $ ) {
	$(function() {
		$('.sugar-slider').slick({
			dots: true,
			infinite: true,
			speed: 500
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