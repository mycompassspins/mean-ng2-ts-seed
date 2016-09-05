/**
 * Created by Justin on 9/2/16.
 */
"use strict";
///<reference path="../../../../typings/index.d.ts" />
process.env.NODE_ENV = 'test';
const environment_1 = require('../../config/environment');
const FileSystemHelper_1 = require('../../helpers/FileSystemHelper');
describe('FileSystemHelper', () => {
    let srcDir = `${environment_1.CONFIG.root}/src/server`, isDir = FileSystemHelper_1.FileSystemHelper.IsDirectory(srcDir);
    it('should show that /src is a directory and not a file', (done) => {
        expect(isDir).toBe(true);
        done();
    });
    it('should traverse /src/server/config/environment directory and return all files ', (done) => {
        let contents = FileSystemHelper_1.FileSystemHelper.GetDirectoryContents(`${srcDir}/config/environment`, false);
        expect(contents.length).toBeGreaterThan(4);
        done();
    });
});
