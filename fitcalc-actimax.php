<?php
/**
 * Plugin Name: Fitcalc Actimax
 * Plugin URI: actimax.com.co
 * Description: React app Calc Fit Actimax
 * Version: 0.1
 * Text Domain: fitcalc-actimax
 * Author: Robert Castro
 * Author URI: https://robertcastro.co
 */

// First register resources with init 
function fitcalc_actimax_init() {
    $path = "/frontend/build/static";
    if(getenv('WP_ENV')=="development") {
        $path = "/frontend/build/static";
    }
    wp_register_script("fitcalc_actimax_js", plugins_url($path."/js/main.js", __FILE__), array(), "1.0", true);
    wp_register_style("fitcalc_actimax_css", plugins_url($path."/css/main.css", __FILE__), array(), "1.0", "all");
}

add_action( 'init', 'fitcalc_actimax_init' );

// Function for the short code that call React app
function fitcalc_actimax() {
    wp_enqueue_script("fitcalc_actimax_js", '1.0', true);
    wp_enqueue_style("fitcalc_actimax_css");
    return "<div id=\"fitcalc_actimax\"></div>";
}

add_shortcode('fitcalc_actimax', 'fitcalc_actimax');