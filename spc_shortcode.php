<?php
/**
 Plugin Name: SPC shortcode
 Plugin URI: http://intranetas
 Description: PAL skaičiuoklė.
 Version: 1.0
 Author: Vincas Batulevičius
 Author URI: http://intranetas
 License: GPLv2 or later
 Text Domain: contraction
 
*/


/* SPC shortcode
 * PAL skaičiuoklė
 *
 * EXAMPLE SHORTOCDE:
 * [pal][/pal]
 */
 






$imgurl= plugins_url( "/assets/img/vincasoft5.png", __FILE__ );

$img = '<img src='. '"'."$imgurl".  '"'.' />'; 


function pal_shortcode( $atts, $content = null ) {
   global $img;

$vs_form_pal = '

<table  >
<tr><td><h5>PAL skaičiuoklė</h5></td><td></td></tr>
<tr><td>Patento Nr.</td><td> <input onchange="valyti()" type="text" id="patnr" size="30" value=""   ></td></tr>

<tr><td>Patento paraiškos padavimo data (A)</td><td> <input onchange="valyti();pat_gal_pabaiga()" type="text" id="a" size="30" value="1993-06-25"  required ></td></tr>

<tr><td>Leidimo pateikti produktą į rinką data (B) </td><td><input onchange="valyti()" type="text" id="b" size="30" value="2008-07-13"  required></td></tr>


<tr><td>Patento galiojimo pabaigos data (C)</td><td> <input onchange="valyti()" type="text" id="c" size="30" value="2013-06-25"  required></td></tr>



<tr><td>PAL galiojimo terminas (D) </td><td><input type="text" id="d" size="30" style="font-weight: bold;"></td></tr>
<tr><td>PAL galiojimo pabaigos data (L) </td><td><input type="text" id="l" size="30" style="font-weight: bold;"> </td></tr>
<tr><td colspan="2">D = B - A - 5 (metai), kai (B - A - 5 metai) > 0,  L = C + D, kai L &lt;= 15 (metų)</td></tr>

<tr><td>

'. "$img". '

</td><td><button  onclick="skaiciuoti()" onchange="valyti()" type="button"  class="button">Skaičiuoti</button> &nbsp; <button  onclick="valyti2()"  type="button"  class="button">Trinti</button> </td> </tr>


</table>';

return $vs_form_pal;
     
 
}




add_shortcode( 'pal', 'pal_shortcode' );



// Register style sheet.
add_action( 'wp_enqueue_scripts', 'spc_shortcode_plugin_styles', 100 );
/**
 * Register style sheet.
 */

function spc_shortcode_plugin_styles() {
  wp_register_style( 'spc-shortcode-style', plugins_url( 'spc_shortcode/assets/css/plugin.css' ) );
  wp_enqueue_style( 'spc-shortcode-style' );
}



add_action('wp_enqueue_scripts','vb_pal_js');

function vb_pal_js() {
    wp_enqueue_script( 'pal_js', plugins_url( 'assets/js/pal.js', __FILE__ ));
}







?>
