/**
 * Created by Justin on 9/9/16.
 */

interface Window
{
	$:Function;
	jQuery:Function;
}

declare var require:any;
window.$ = window.jQuery = require('jquery');
