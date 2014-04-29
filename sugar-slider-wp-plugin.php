<?php

	/**
	* Plugin Name: Sugar Slider
	* Plugin URI: http://thrivehive.com/
	* Description: A plugin to include an image slider with the slick carousel
	* Version: .1
	* Author: ThriveHive
	* Author URI: http://thrivehive.com/
	*/

	function register_scripts () {
		wp_register_script('jquery-1.11.0', plugins_url('/js/jquery-1.11.0.min.js', __FILE__));
		wp_register_script('jquery-migrate-1.2.1', plugins_url('/js/jquery-migrate-1.2.1.min.js', __FILE__));
		wp_register_script('slick', plugins_url('/slick/slick.min.js', __FILE__));
		wp_register_script('sugar-slider', plugins_url('/js/sugar-slider.js', __FILE__));
	}

	function enqueue_scripts () {
		wp_enqueue_style( 'slick', plugins_url('/slick/slick.css', __FILE__) );
		wp_enqueue_style( 'custom-slick-styles', plugins_url('/css/custom-slick-styles.css', __FILE__) );
		wp_enqueue_script('jquery-1.11.0');
		wp_enqueue_script('jquery-migrate-1.2.1');
		wp_enqueue_script('slick');
		wp_enqueue_script('sugar-slider');
	}

	register_scripts();
	enqueue_scripts();


	function render_sugar_slider($atts){
		if (!isset($atts['ids'])) {
			return '<div style="color: red;">Please provide a list of image ids to the "sugar_slider" shortcode.</div>';
		}

		$image_ids = explode(',', $atts['ids']);
		$images_html = '';

		foreach ($image_ids as $image_id) {
			$images_html = $images_html . '<div class="attachmentId-' . $image_id . '">' . wp_get_attachment_image( $image_id, 'full' ) . '</div>';
		}

		return '<div class="sugar-slider">' . $images_html . '</div>';
	}

	add_shortcode( 'sugar_slider', 'render_sugar_slider' );

?>