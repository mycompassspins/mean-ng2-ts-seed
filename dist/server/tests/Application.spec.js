/**
 * Created by Justin on 9/2/16.
 */
"use strict";
process.env.NODE_ENV = 'test';
const _1 = require('../');
describe('Application', () => {
    it('should have an appPath property', (done) => {
        const appPath = _1.app.Get('appPath');
        expect(appPath).toBeDefined();
        expect(`${appPath}/server/tests`).toEqual(__dirname);
        done();
    });
    it('should have a valid config file', (done) => {
        let config = _1.app.config;
        expect(config).toBeDefined();
        expect(config.env === 'test' && config.name === 'test').toBe(true);
        done();
    });
    it('should have wrappers for Express get() and set()', (done) => {
        expect(typeof _1.app.Get && typeof _1.app.Set).toEqual('function');
        done();
    });
    it('should have set global Console and LogBug properties', (done) => {
        let gConsole = global.$log, logBug = global.LogBug, hasMethods = typeof (gConsole.info) &&
            typeof (gConsole.warn) &&
            typeof (gConsole.debug) &&
            typeof (gConsole.trace) === 'function';
        expect(gConsole).toBeDefined();
        expect(hasMethods).toBe(true);
        expect(logBug).toBeDefined();
        expect(typeof logBug).toEqual('function');
        // Kill Express server and exit test
        _1.app.Stop();
        done();
    });
});
