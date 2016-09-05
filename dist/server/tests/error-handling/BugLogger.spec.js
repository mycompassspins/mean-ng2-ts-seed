/**
 * Created by Justin on 9/2/16.
 */
"use strict";
///<reference path="../../../../typings/index.d.ts" />
process.env.NODE_ENV = 'test';
const models_1 = require('../../models');
const _1 = require('../../');
// TODO: Figure out how to check mongoose.connection.readyState === 1 before running any specs
// TODO: Separate specs into 2 categories (integration - requires app to run and unit - does not require app
describe('BugLogger', () => {
    let insertedId;
    it('should log caught exception to db', (done) => {
        let fakeErr = {
            success: false,
            message: 'This is a fake error',
            status: 500,
            body: {},
            stack: 'FakeError'
        };
        global.LogBug(fakeErr, 'BugLogger.spec', 'should log exception')
            .then((res) => {
            insertedId = res.data._id || null;
            expect(insertedId).toBeDefined();
            done();
        });
    });
    it('should retrieve the logged error from the db', (done) => {
        models_1.Bug.find(insertedId)
            .then(res => {
            let data = res[0];
            expect(data).toBeDefined();
            expect(data._id).toEqual(insertedId);
            done();
        });
    });
    it('should remove the added bug from the db', (done) => {
        models_1.Bug.findOneAndRemove({ _id: insertedId })
            .then((res) => {
            expect(res._id).toEqual(insertedId);
            _1.app.Stop();
            done();
        });
    });
});
