/**
 * Created by Justin on 9/2/16.
 */

/**
 * Data model for bugs collection
 * @type {{ Bug }}
 */
export interface IBug
{
	controller?:string;
	method?:string;
	date:Date;
	stack?:string | Object;
}

/**
 * All errors returned to any client should use this type
 * @type {{ Error }}
 */
export interface IErrorObject
{
	success:boolean;
	message:string;
	status:number;
	body?:Object;
	stack?:Object;
}
