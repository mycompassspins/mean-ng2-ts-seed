/**
 * Created by Justin on 9/2/16.
 */

process.env.NODE_ENV = 'test';
import { ErrorHandler } from '../../error-handling'
import { IErrorObject } from '../../interfaces'
import { readdirSync } from 'fs'

describe('ErrorHandler', () =>
{
	it('should properly construct an error object', (done:Function) =>
	{
		let err:IErrorObject;

		// Read nonexistent directory and catch error
		try
		{
			readdirSync('nonexistent');
		}
		catch(e)
		{
			err = ErrorHandler.ConstructError(e);
		}

		expect(err).toBeDefined();
		expect(err.success).toBe(false);
		expect(err.message).toEqual("ENOENT: no such file or directory, scandir 'nonexistent'");
		expect(err.stack).toBeDefined();
		done();
	});
});
