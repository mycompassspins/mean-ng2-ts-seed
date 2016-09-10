/**
 * Created by Justin on 9/2/16.
 */
"use strict";
const _1 = require('../');
const error_handling_1 = require('../error-handling');
const Logger_1 = require('../helpers/Logger');
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
    global.$log = Logger_1.$log;
    /**
     * Log caught exceptions to database
     * @type {(e:any, controller:string, method:string, logMessage?:string)=>IErrorObject}
     */
    global.LogBug = error_handling_1.BugLogger.Log;
    // Global app variables
    _1.app.expressApp.set('appPath', path.resolve(path.join(__dirname, '/../..')));
}
exports.GlobalConfig = GlobalConfig;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbmZpZy9nbG9iYWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0dBRUc7O0FBRUgsbUJBQW9CLEtBQ3BCLENBQUMsQ0FEd0I7QUFDekIsaUNBQTBCLG1CQUMxQixDQUFDLENBRDRDO0FBQzdDLHlCQUFxQixtQkFDckIsQ0FBQyxDQUR1QztBQUN4QyxJQUFJLElBQUksR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7QUFFM0I7Ozs7R0FJRztBQUNIO0lBRUM7Ozs7Ozs7O09BUU07SUFFTiwyQkFBMkI7SUFDM0IsTUFBTSxDQUFDLElBQUksR0FBRyxhQUFJLENBQUM7SUFFbkI7OztPQUdHO0lBQ0gsTUFBTSxDQUFDLE1BQU0sR0FBRywwQkFBUyxDQUFDLEdBQUcsQ0FBQztJQUU5Qix1QkFBdUI7SUFDdkIsTUFBRyxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQzdFLENBQUM7QUF2QmUsb0JBQVksZUF1QjNCLENBQUEiLCJmaWxlIjoiY29uZmlnL2dsb2JhbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ3JlYXRlZCBieSBKdXN0aW4gb24gOS8yLzE2LlxuICovXG5cbmltcG9ydCB7IGFwcCB9IGZyb20gJy4uLydcbmltcG9ydCB7IEJ1Z0xvZ2dlciB9IGZyb20gJy4uL2Vycm9yLWhhbmRsaW5nJ1xuaW1wb3J0IHsgJGxvZyB9IGZyb20gJy4uL2hlbHBlcnMvTG9nZ2VyJ1xubGV0IHBhdGggPSByZXF1aXJlKCdwYXRoJyk7XG5cbi8qKlxuICogQ29uZmlndXJlIGFkZGl0aW9ucyB0byBOb2RlSnMuR2xvYmFsIChzZWUgLi4vaW50ZXJmYWNlcy9leHRlbnNpb25zL05vZGUuZC50cylcbiAqIFNldCBhbnkgZ2xvYmFsIEV4cHJlc3Mgc2V0dGluZ3NcbiAqIEBjb25zdHJ1Y3RvclxuICovXG5leHBvcnQgZnVuY3Rpb24gR2xvYmFsQ29uZmlnKCk6dm9pZFxue1xuXHQvKipcblx0ICogQGRlc2NyaXB0aW9uXG5cdCAqIFVzZSB0aGlzIGZpbGUgZm9yIGFueSBhcHAgc2V0dGluZ3MgdGhhdCBtYXkgZmFsbCBvdXRzaWRlIG9mIHRob3NlIHNwZWNpZmljIHRvIHRoZSBFeHByZXNzIGNvbmZpZ3VyYXRpb25cblx0ICogb3IgdGhlIGVudmlyb25tZW50IGNvbmZpZ3VyYXRpb24sIG9yIGZvciBhZGRpdGlvbnMgdG8gdGhlIE5vZGVKUy5HbG9iYWwgb2JqZWN0LlxuXHQgKlxuXHQgKiBAZXhhbXBsZVxuXHQgKiBTRVQ6IGFwcC5zZXQoJ2tleScsICd2YWx1ZScpXG5cdCAqIEdFVDogYXBwLmdldCgna2V5JylcbiAgICAgKi9cblxuXHQvLyBOb2RlSlMuR2xvYmFsIGV4dGVuc2lvbnNcblx0Z2xvYmFsLiRsb2cgPSAkbG9nO1xuXG5cdC8qKlxuXHQgKiBMb2cgY2F1Z2h0IGV4Y2VwdGlvbnMgdG8gZGF0YWJhc2Vcblx0ICogQHR5cGUgeyhlOmFueSwgY29udHJvbGxlcjpzdHJpbmcsIG1ldGhvZDpzdHJpbmcsIGxvZ01lc3NhZ2U/OnN0cmluZyk9PklFcnJvck9iamVjdH1cblx0ICovXG5cdGdsb2JhbC5Mb2dCdWcgPSBCdWdMb2dnZXIuTG9nO1xuXG5cdC8vIEdsb2JhbCBhcHAgdmFyaWFibGVzXG5cdGFwcC5leHByZXNzQXBwLnNldCgnYXBwUGF0aCcsIHBhdGgucmVzb2x2ZShwYXRoLmpvaW4oX19kaXJuYW1lLCAnLy4uLy4uJykpKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
