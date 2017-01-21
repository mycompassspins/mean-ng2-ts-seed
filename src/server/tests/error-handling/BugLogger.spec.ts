/**
 * Created by Justin on 9/2/16.
 */

process.env.NODE_ENV = 'test';
import { IErrorObject } from '../../interfaces'
import { Bug } from '../../models'
import { app } from '../../'
import mongoose = require('mongoose');

// TODO: Figure out how to check mongoose.connection.readyState === 1 before running any specs
// TODO: Separate specs into 2 categories (integration - requires app to run and unit - does not require app
describe('BugLogger', () =>
{
	let insertedId:mongoose.Types.ObjectId;

	it('should log caught exception to db', (done:Function) =>
	{
		let fakeErr:IErrorObject = {
			success: false,
			message: 'This is a fake error',
			status: 500,
			body: {},
			stack: 'FakeError'
		};

		global.LogBug(fakeErr, 'BugLogger.spec', 'should log exception')
			.then((res) =>
			{
				insertedId = res.data._id || null;
				expect(insertedId).toBeDefined();
				done();
			});
	});

	it('should retrieve the logged error from the db', (done:Function) =>
	{
		Bug.find(insertedId)
			.then(res =>
			{
				let data:any = res[0];
				expect(data).toBeDefined();
				expect(data._id).toEqual(insertedId);
				done();
			});
	});

	it('should remove the added bug from the db', (done:Function) =>
	{
		Bug.findOneAndRemove({ _id: insertedId })
			.then((res:any) =>
			{
				expect(res._id).toEqual(insertedId);
				app.Stop();
				done();
			});
	});
});
