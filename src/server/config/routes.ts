/**
 * Created by Justin on 9/2/16.
 */

///<reference path="../interfaces/extensions/Express.d.ts" />

import express = require('express');
import { Request, Response, NextFunction } from 'express'
import { CONFIG } from '../config/environment'

export function RouteConfig(app:express.Application):void
{
	// Angular routes should return index.html
	app.route(CONFIG.angularRoutes)
		.get((req:Request, res:Response, next:NextFunction) =>
		{
			return res.sendFile(`${app.get('appPath')}/client/index.html`);
		});
}
