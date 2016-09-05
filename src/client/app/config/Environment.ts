/**
 * Created by Justin on 9/2/16.
 */

export const ENV = window.location.hostname.indexOf('local') === -1 ?
	'production' :
	'development';
