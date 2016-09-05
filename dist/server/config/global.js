/**
 * Created by Justin on 9/2/16.
 */
"use strict";
const _1 = require('../');
const ts_log_debug_1 = require('ts-log-debug');
const error_handling_1 = require('../error-handling');
let path = require('path');
/**
 * Configure additions to NodeJs.Global (see ../interfaces/extensions/Node.d.ts)
 * Set any global Express settings
 * @constructor
 */
function GlobalConfig() {
    /**
     * @description
     * Use this file for any app settings that may fall outside of those specific to the Express configuration
     * or the environment configuration, or for additions to the NodeJS.Global object.
     *
     * @example
     * SET: app.set('key', 'value')
     * GET: app.get('key')
     */
    // NodeJS.Global extensions
    global.$log = ts_log_debug_1.$log;
    /**
     * Log caught exceptions to database
     * @type {(e:any, controller:string, method:string, logMessage?:string)=>IErrorObject}
     */
    global.LogBug = error_handling_1.BugLogger.Log;
    // Global app variables
    _1.app.expressApp.set('appPath', path.resolve(path.join(__dirname, '/../..')));
}
exports.GlobalConfig = GlobalConfig;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbmZpZy9nbG9iYWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0dBRUc7O0FBRUgsbUJBQW9CLEtBQ3BCLENBQUMsQ0FEd0I7QUFDekIsK0JBQXFCLGNBQ3JCLENBQUMsQ0FEa0M7QUFDbkMsaUNBQTBCLG1CQUMxQixDQUFDLENBRDRDO0FBQzdDLElBQUksSUFBSSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUUzQjs7OztHQUlHO0FBQ0g7SUFFQzs7Ozs7Ozs7T0FRTTtJQUVOLDJCQUEyQjtJQUMzQixNQUFNLENBQUMsSUFBSSxHQUFHLG1CQUFJLENBQUM7SUFFbkI7OztPQUdHO0lBQ0gsTUFBTSxDQUFDLE1BQU0sR0FBRywwQkFBUyxDQUFDLEdBQUcsQ0FBQztJQUU5Qix1QkFBdUI7SUFDdkIsTUFBRyxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQzdFLENBQUM7QUF2QmUsb0JBQVksZUF1QjNCLENBQUEiLCJmaWxlIjoiY29uZmlnL2dsb2JhbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ3JlYXRlZCBieSBKdXN0aW4gb24gOS8yLzE2LlxuICovXG5cbmltcG9ydCB7IGFwcCB9IGZyb20gJy4uLydcbmltcG9ydCB7ICRsb2cgfSBmcm9tICd0cy1sb2ctZGVidWcnXG5pbXBvcnQgeyBCdWdMb2dnZXIgfSBmcm9tICcuLi9lcnJvci1oYW5kbGluZydcbmxldCBwYXRoID0gcmVxdWlyZSgncGF0aCcpO1xuXG4vKipcbiAqIENvbmZpZ3VyZSBhZGRpdGlvbnMgdG8gTm9kZUpzLkdsb2JhbCAoc2VlIC4uL2ludGVyZmFjZXMvZXh0ZW5zaW9ucy9Ob2RlLmQudHMpXG4gKiBTZXQgYW55IGdsb2JhbCBFeHByZXNzIHNldHRpbmdzXG4gKiBAY29uc3RydWN0b3JcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIEdsb2JhbENvbmZpZygpOnZvaWRcbntcblx0LyoqXG5cdCAqIEBkZXNjcmlwdGlvblxuXHQgKiBVc2UgdGhpcyBmaWxlIGZvciBhbnkgYXBwIHNldHRpbmdzIHRoYXQgbWF5IGZhbGwgb3V0c2lkZSBvZiB0aG9zZSBzcGVjaWZpYyB0byB0aGUgRXhwcmVzcyBjb25maWd1cmF0aW9uXG5cdCAqIG9yIHRoZSBlbnZpcm9ubWVudCBjb25maWd1cmF0aW9uLCBvciBmb3IgYWRkaXRpb25zIHRvIHRoZSBOb2RlSlMuR2xvYmFsIG9iamVjdC5cblx0ICpcblx0ICogQGV4YW1wbGVcblx0ICogU0VUOiBhcHAuc2V0KCdrZXknLCAndmFsdWUnKVxuXHQgKiBHRVQ6IGFwcC5nZXQoJ2tleScpXG4gICAgICovXG5cblx0Ly8gTm9kZUpTLkdsb2JhbCBleHRlbnNpb25zXG5cdGdsb2JhbC4kbG9nID0gJGxvZztcblxuXHQvKipcblx0ICogTG9nIGNhdWdodCBleGNlcHRpb25zIHRvIGRhdGFiYXNlXG5cdCAqIEB0eXBlIHsoZTphbnksIGNvbnRyb2xsZXI6c3RyaW5nLCBtZXRob2Q6c3RyaW5nLCBsb2dNZXNzYWdlPzpzdHJpbmcpPT5JRXJyb3JPYmplY3R9XG5cdCAqL1xuXHRnbG9iYWwuTG9nQnVnID0gQnVnTG9nZ2VyLkxvZztcblxuXHQvLyBHbG9iYWwgYXBwIHZhcmlhYmxlc1xuXHRhcHAuZXhwcmVzc0FwcC5zZXQoJ2FwcFBhdGgnLCBwYXRoLnJlc29sdmUocGF0aC5qb2luKF9fZGlybmFtZSwgJy8uLi8uLicpKSk7XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
