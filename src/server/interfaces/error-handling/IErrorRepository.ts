/**
 * Created by Justin on 9/2/16.
 */

import { Document } from 'mongoose'

/**
 * Data model for bugs collection
 * @type {{ Bug }}
 */
export interface IBug extends Document
{
	controller?:string;
	method?:string;
	date:Date;
	stack?:string | Object;
	increment:() => this;
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
