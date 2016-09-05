/**
 * Created by Justin on 9/2/16.
 */
"use strict";
process.env.NODE_ENV = 'test';
const error_handling_1 = require('../../error-handling');
const fs_1 = require('fs');
describe('ErrorHandler', () => {
    it('should properly construct an error object', (done) => {
        let err;
        // Read nonexistent directory and catch error
        try {
            fs_1.readdirSync('nonexistent');
        }
        catch (e) {
            err = error_handling_1.ErrorHandler.ConstructError(e);
        }
        expect(err).toBeDefined();
        expect(err.success).toBe(false);
        expect(err.message).toEqual("ENOENT: no such file or directory, scandir 'nonexistent'");
        expect(err.stack).toBeDefined();
        done();
    });
});
