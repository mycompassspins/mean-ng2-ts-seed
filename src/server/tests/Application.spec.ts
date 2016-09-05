/**
 * Created by Justin on 9/2/16.
 */

process.env.NODE_ENV = 'test';
import { app } from '../'

describe('Application', () =>
{
	it('should have an appPath property', (done:Function) =>
	{
		const appPath = app.Get('appPath');

		expect(appPath).toBeDefined();
		expect(`${appPath}/server/tests`).toEqual(__dirname);
		done();
	});

	it('should have a valid config file', (done:Function) =>
	{
		let config:any = app.config;

		expect(config).toBeDefined();
		expect(config.env === 'test' && config.name === 'test').toBe(true);
		done();
	});

	it('should have wrappers for Express get() and set()', (done:Function) =>
	{
		expect(typeof app.Get && typeof app.Set).toEqual('function');
		done();
	});

	it('should have set global Console and LogBug properties', (done:Function) =>
	{
		let gConsole = global.$log,
			logBug = global.LogBug,
			hasMethods:boolean = typeof(gConsole.info) &&
				typeof(gConsole.warn) &&
				typeof(gConsole.debug) &&
				typeof(gConsole.trace) === 'function';

		expect(gConsole).toBeDefined();
		expect(hasMethods).toBe(true);
		expect(logBug).toBeDefined();
		expect(typeof logBug).toEqual('function');

		// Kill Express server and exit test
		app.Stop();
		done();
	});
});

