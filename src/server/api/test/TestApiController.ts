/**
 * Created by Justin on 9/2/16.
 */

///<reference path="../../../../typings/index.d.ts" />

import { Controller, GET } from 'express-decorate'
import { Request, Response } from 'express'

@Controller('/api/test')
export class DevicesController
{
	@GET('/:testParam')
	public async All(req:Request, res:Response):Promise<Response>
	{
		return res.json({ success: true, param: req.params.testParam });

	}
}
