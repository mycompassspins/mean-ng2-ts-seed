/**
 * Created by Justin on 9/2/16.
 */
"use strict";
process.env.NODE_ENV = 'test';
const HttpHelper_1 = require('../../helpers/HttpHelper');
describe('HttpHelper', () => {
    it('should get a 200 response when requesting http://www.google.com', (done) => {
        HttpHelper_1.Request.Get('http://www.google.com', 'status')
            .then((res) => {
            expect(res).toBe(200);
            done();
        });
    });
    it('should get a 404 response when requesting http://www.google.com/nothing', (done) => {
        HttpHelper_1.Request.Get('http://www.google.com/nothing', 'status')
            .then((res) => {
            expect(res).toBe(404);
            done();
        });
    });
});
