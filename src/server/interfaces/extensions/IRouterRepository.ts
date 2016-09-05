/**
 * Created by Justin on 9/2/16.
 */

// Route object that is attached for each route on each controller
export interface IControllerRoute
{
	method:string|string[];
	mountpath:string|string[];
	path:string|string[];
	middleware:string|string[];
	fnName:string;
}
