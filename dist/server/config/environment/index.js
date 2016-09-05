/**
 * Created by Justin on 9/2/16.
 */
"use strict";
/// <reference path="../../interfaces/extensions/Node.d.ts" />
/**
 * This file exports environment configurations based on process.env.NODE_ENV
 * TODO: should we have an interface for this type?
 */
// Require local config file if it exists, or create a replacement with `use` set to false
let localConfig = { use: false }, devConfig = require('./development'), testConfig = require('./test'), prodConfig = require('./production'), sharedConfig = require('./all'), _ = require('lodash');
const env = process.env.NODE_ENV || 'development';
if (env === 'development') {
    try {
        localConfig = require('./local');
    }
    catch (e) {
        global.$log.warn('No local config file found - using development config');
    }
}
// Export either local or development config if NODE_ENV === 'development', test config if NODE_ENV === 'test'
// or production config otherwise
let dynamic = {};
// There are way less verbose ways of writing this logic, but Webstorm can't handle dynamic paths
// in `require()` statements. This ensures that the IDE recognizes all the properties in our config object
if (env === 'development') {
    dynamic = localConfig.use ? localConfig : devConfig;
}
else if (env === 'test') {
    dynamic = testConfig;
}
else {
    dynamic = prodConfig;
}
exports.CONFIG = _.merge(dynamic, sharedConfig);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbmZpZy9lbnZpcm9ubWVudC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7R0FFRzs7QUFFSCw4REFBOEQ7QUFFOUQ7OztHQUdHO0FBRUgsMEZBQTBGO0FBQzFGLElBQUksV0FBVyxHQUFPLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxFQUNuQyxTQUFTLEdBQU8sT0FBTyxDQUFDLGVBQWUsQ0FBQyxFQUN4QyxVQUFVLEdBQU8sT0FBTyxDQUFDLFFBQVEsQ0FBQyxFQUNsQyxVQUFVLEdBQU8sT0FBTyxDQUFDLGNBQWMsQ0FBQyxFQUN4QyxZQUFZLEdBQU8sT0FBTyxDQUFDLE9BQU8sQ0FBQyxFQUNuQyxDQUFDLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBRXZCLE1BQU0sR0FBRyxHQUFVLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxJQUFJLGFBQWEsQ0FBQztBQUV6RCxFQUFFLENBQUMsQ0FBQyxHQUFHLEtBQUssYUFBYSxDQUFDLENBQzFCLENBQUM7SUFDQSxJQUNBLENBQUM7UUFDQSxXQUFXLEdBQUcsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ2xDLENBQ0E7SUFBQSxLQUFLLENBQUEsQ0FBQyxDQUFDLENBQUMsQ0FDUixDQUFDO1FBQ0EsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsdURBQXVELENBQUMsQ0FBQztJQUMzRSxDQUFDO0FBQ0YsQ0FBQztBQUVELDhHQUE4RztBQUM5RyxpQ0FBaUM7QUFDakMsSUFBSSxPQUFPLEdBQVEsRUFBRSxDQUFDO0FBRXRCLGlHQUFpRztBQUNqRywwR0FBMEc7QUFDMUcsRUFBRSxDQUFDLENBQUMsR0FBRyxLQUFLLGFBQWEsQ0FBQyxDQUMxQixDQUFDO0lBQ0EsT0FBTyxHQUFHLFdBQVcsQ0FBQyxHQUFHLEdBQUcsV0FBVyxHQUFHLFNBQVMsQ0FBQztBQUNyRCxDQUFDO0FBQ0QsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsS0FBSyxNQUFNLENBQUMsQ0FDeEIsQ0FBQztJQUNBLE9BQU8sR0FBRyxVQUFVLENBQUM7QUFDdEIsQ0FBQztBQUNELElBQUksQ0FDSixDQUFDO0lBQ0EsT0FBTyxHQUFHLFVBQVUsQ0FBQztBQUN0QixDQUFDO0FBRVksY0FBTSxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLFlBQVksQ0FBQyxDQUFDIiwiZmlsZSI6ImNvbmZpZy9lbnZpcm9ubWVudC9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ3JlYXRlZCBieSBKdXN0aW4gb24gOS8yLzE2LlxuICovXG5cbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi9pbnRlcmZhY2VzL2V4dGVuc2lvbnMvTm9kZS5kLnRzXCIgLz5cblxuLyoqXG4gKiBUaGlzIGZpbGUgZXhwb3J0cyBlbnZpcm9ubWVudCBjb25maWd1cmF0aW9ucyBiYXNlZCBvbiBwcm9jZXNzLmVudi5OT0RFX0VOVlxuICogVE9ETzogc2hvdWxkIHdlIGhhdmUgYW4gaW50ZXJmYWNlIGZvciB0aGlzIHR5cGU/XG4gKi9cblxuLy8gUmVxdWlyZSBsb2NhbCBjb25maWcgZmlsZSBpZiBpdCBleGlzdHMsIG9yIGNyZWF0ZSBhIHJlcGxhY2VtZW50IHdpdGggYHVzZWAgc2V0IHRvIGZhbHNlXG5sZXQgbG9jYWxDb25maWc6YW55ID0geyB1c2U6IGZhbHNlIH0sXG5cdGRldkNvbmZpZzphbnkgPSByZXF1aXJlKCcuL2RldmVsb3BtZW50JyksXG5cdHRlc3RDb25maWc6YW55ID0gcmVxdWlyZSgnLi90ZXN0JyksXG5cdHByb2RDb25maWc6YW55ID0gcmVxdWlyZSgnLi9wcm9kdWN0aW9uJyksXG5cdHNoYXJlZENvbmZpZzphbnkgPSByZXF1aXJlKCcuL2FsbCcpLFxuXHRfID0gcmVxdWlyZSgnbG9kYXNoJyk7XG5cbmNvbnN0IGVudjpzdHJpbmcgPSBwcm9jZXNzLmVudi5OT0RFX0VOViB8fCAnZGV2ZWxvcG1lbnQnO1xuXG5pZiAoZW52ID09PSAnZGV2ZWxvcG1lbnQnKVxue1xuXHR0cnlcblx0e1xuXHRcdGxvY2FsQ29uZmlnID0gcmVxdWlyZSgnLi9sb2NhbCcpO1xuXHR9XG5cdGNhdGNoKGUpXG5cdHtcblx0XHRnbG9iYWwuJGxvZy53YXJuKCdObyBsb2NhbCBjb25maWcgZmlsZSBmb3VuZCAtIHVzaW5nIGRldmVsb3BtZW50IGNvbmZpZycpO1xuXHR9XG59XG5cbi8vIEV4cG9ydCBlaXRoZXIgbG9jYWwgb3IgZGV2ZWxvcG1lbnQgY29uZmlnIGlmIE5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnLCB0ZXN0IGNvbmZpZyBpZiBOT0RFX0VOViA9PT0gJ3Rlc3QnXG4vLyBvciBwcm9kdWN0aW9uIGNvbmZpZyBvdGhlcndpc2VcbmxldCBkeW5hbWljID0gPGFueT57fTtcblxuLy8gVGhlcmUgYXJlIHdheSBsZXNzIHZlcmJvc2Ugd2F5cyBvZiB3cml0aW5nIHRoaXMgbG9naWMsIGJ1dCBXZWJzdG9ybSBjYW4ndCBoYW5kbGUgZHluYW1pYyBwYXRoc1xuLy8gaW4gYHJlcXVpcmUoKWAgc3RhdGVtZW50cy4gVGhpcyBlbnN1cmVzIHRoYXQgdGhlIElERSByZWNvZ25pemVzIGFsbCB0aGUgcHJvcGVydGllcyBpbiBvdXIgY29uZmlnIG9iamVjdFxuaWYgKGVudiA9PT0gJ2RldmVsb3BtZW50Jylcbntcblx0ZHluYW1pYyA9IGxvY2FsQ29uZmlnLnVzZSA/IGxvY2FsQ29uZmlnIDogZGV2Q29uZmlnO1xufVxuZWxzZSBpZiAoZW52ID09PSAndGVzdCcpXG57XG5cdGR5bmFtaWMgPSB0ZXN0Q29uZmlnO1xufVxuZWxzZVxue1xuXHRkeW5hbWljID0gcHJvZENvbmZpZztcbn1cblxuZXhwb3J0IGNvbnN0IENPTkZJRyA9IF8ubWVyZ2UoZHluYW1pYywgc2hhcmVkQ29uZmlnKTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
