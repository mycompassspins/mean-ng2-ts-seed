/**
 * Created by Justin on 9/2/16.
 */

/// <reference path="../../../../typings/index.d.ts" />

/**
 * @module
 * @description extension of NodeJs.Global
 */
declare module NodeJS
{
	interface Global
	{
		LogBug:Function;
		$log:any;
	}
}

declare module "http"
{
	interface Server
	{
		wsServer:any;
	}
}
