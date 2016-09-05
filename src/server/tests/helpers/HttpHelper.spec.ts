/**
 * Created by Justin on 9/2/16.
 */

process.env.NODE_ENV = 'test';
import { Request } from '../../helpers/HttpHelper'

describe('HttpHelper', () =>
{
	it('should get a 200 response when requesting http://www.google.com', (done:Function) =>
	{
		Request.Get('http://www.google.com', 'status')
			.then((res) =>
			{
				expect(res).toBe(200);
				done();
			});
	});

	it('should get a 404 response when requesting http://www.google.com/nothing', (done:Function) =>
	{
		Request.Get('http://www.google.com/nothing', 'status')
			.then((res) =>
			{
				expect(res).toBe(404);
				done();
			});
	});
});
