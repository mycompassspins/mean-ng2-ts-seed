/**
 * Created by Justin on 9/2/16.
 */

// Require jQuery and bootstrap
// TODO: I consider this a hack until Angular Material has a stable release for Angular 2 - JM - 9/4/16
interface Window
{
	$:Function;
	jQuery:Function;
}

// Avoid compile time errors on name `require`
declare var require:any;

window.$ = window.jQuery = require('jquery');
require('bootstrap');
