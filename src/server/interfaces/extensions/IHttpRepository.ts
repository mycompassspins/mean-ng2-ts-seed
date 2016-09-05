/**
 * Created by Justin on 9/2/16.
 */

/**
 * @description data model for options object required by HttpHelper.Request.Post
 */
export interface IRequestOptions
{
	url:string;
	method:string;
	headers?:any;
	body?:string;
}
