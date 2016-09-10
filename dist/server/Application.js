/**
 * Created by Justin on 9/2/16.
 */
"use strict";
///<reference path="./interfaces/extensions/Express.d.ts" />
///<reference path="./interfaces/extensions/Node.d.ts" />
const express = require('express');
const config_1 = require('./config');
const environment_1 = require('./config/environment');
// Express route decorators module config
const express_decorate_1 = require('express-decorate');
const OPTS = {
    ctrlDir: `${__dirname}/api`,
    routeConfig: config_1.RouteConfig
};
/**
 * @description
 * Main Express application class - in charge of starting/stopping server and all app configurations
 */
class Application {
    constructor() {
        this.expressApp = express();
        this.config = environment_1.CONFIG;
    }
    /**
     * Config functions for Middleware/Globals/Db, etc
     * @constructor
     */
    Config() {
        // Instantiate ExpressDecorate
        new express_decorate_1.ExpressDecorate(this.expressApp, OPTS);
        config_1.GlobalConfig();
        config_1.ExpressConfig();
        config_1.MongoConfig();
    }
    /**
     * Wrapper around Express's get() method
     * Avoid having to use that method as Application.expressApp.get() and instead simply use Application.Get()
     * @param value
     * @returns {any}
     * @constructor
     */
    Get(value) {
        return this.expressApp.get(value);
    }
    /**
     * Wrapper around Express's set() method
     * Avoid having to use that method as Application.expressApp.set() and instead simply use Application.Set()
     * @param setting
     * @param value
     * @returns {any}
     * @constructor
     */
    Set(setting, value) {
        return this.expressApp.set(setting, value);
    }
    /**
     * Start http server
     * @constructor
     */
    Start() {
        this.server = this.expressApp.listen(environment_1.CONFIG.port, () => {
            let site = `http://${environment_1.CONFIG.host}:${environment_1.CONFIG.port}`;
            global.$log.info(`Revelry and awe are afoot at ${site} in ${environment_1.CONFIG.env} mode.`);
            global.$log.info(`Config: ${environment_1.CONFIG.name}`);
            global.$log.info(`Database: ${environment_1.CONFIG.mongoDb.db}`);
            global.$log.info(`Database Host: ${environment_1.CONFIG.mongoDb.host}`);
        });
    }
    /**
     * Kill http server
     * @constructor
     */
    Stop() {
        this.server.close(() => {
            console.warn('Stopping Express Server . . .');
            // Right now the only thing calling app.Stop() is our specs
            // Give the specs plenty of time to complete before killing the process
            // TODO: determine if this is an acceptable solution
            setTimeout(() => {
                global.$log.info('Server Stopped');
                process.exit(0);
            }, 1500);
        });
    }
}
exports.Application = Application;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkFwcGxpY2F0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztHQUVHOztBQUVILDREQUE0RDtBQUM1RCx5REFBeUQ7QUFFekQsTUFBTyxPQUFPLFdBQVcsU0FBUyxDQUFDLENBQUM7QUFFcEMseUJBQXNFLFVBQ3RFLENBQUMsQ0FEK0U7QUFDaEYsOEJBQXVCLHNCQUd2QixDQUFDLENBSDRDO0FBRTdDLHlDQUF5QztBQUN6QyxtQ0FBeUQsa0JBQ3pELENBQUMsQ0FEMEU7QUFDM0UsTUFBTSxJQUFJLEdBQTJCO0lBQ3BDLE9BQU8sRUFBRSxHQUFHLFNBQVMsTUFBTTtJQUMzQixXQUFXLEVBQUUsb0JBQVc7Q0FDeEIsQ0FBQztBQUVGOzs7R0FHRztBQUNIO0lBTUM7UUFKTyxlQUFVLEdBQXVCLE9BQU8sRUFBRSxDQUFDO1FBRTNDLFdBQU0sR0FBTyxvQkFBTSxDQUFDO0lBRWIsQ0FBQztJQUVmOzs7T0FHRztJQUNJLE1BQU07UUFFWiw4QkFBOEI7UUFDOUIsSUFBSSxrQ0FBZSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFFM0MscUJBQVksRUFBRSxDQUFDO1FBQ2Ysc0JBQWEsRUFBRSxDQUFDO1FBQ2hCLG9CQUFXLEVBQUUsQ0FBQztJQUNmLENBQUM7SUFFRDs7Ozs7O09BTUc7SUFDSSxHQUFHLENBQUMsS0FBWTtRQUV0QixNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUVEOzs7Ozs7O09BT0c7SUFDSSxHQUFHLENBQUMsT0FBYyxFQUFFLEtBQVM7UUFFbkMsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBRUQ7OztPQUdHO0lBQ0ksS0FBSztRQUVYLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsb0JBQU0sQ0FBQyxJQUFJLEVBQUU7WUFFakQsSUFBSSxJQUFJLEdBQVUsVUFBVSxvQkFBTSxDQUFDLElBQUksSUFBSSxvQkFBTSxDQUFDLElBQUksRUFBRSxDQUFDO1lBRXpELE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGdDQUFnQyxJQUFJLE9BQU8sb0JBQU0sQ0FBQyxHQUFHLFFBQVEsQ0FBQyxDQUFDO1lBQ2hGLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsb0JBQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO1lBQzNDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsb0JBQU0sQ0FBQyxPQUFPLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztZQUNuRCxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxrQkFBa0Isb0JBQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztRQUMzRCxDQUFDLENBQUMsQ0FBQztJQUNKLENBQUM7SUFFRDs7O09BR0c7SUFDSSxJQUFJO1FBRVYsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7WUFFakIsT0FBTyxDQUFDLElBQUksQ0FBQywrQkFBK0IsQ0FBQyxDQUFDO1lBRTlDLDJEQUEyRDtZQUMzRCx1RUFBdUU7WUFDdkUsb0RBQW9EO1lBQ3BELFVBQVUsQ0FBQztnQkFFVixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO2dCQUNuQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2pCLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNWLENBQUMsQ0FBQyxDQUFDO0lBQ0osQ0FBQztBQUNGLENBQUM7QUFwRlksbUJBQVcsY0FvRnZCLENBQUEiLCJmaWxlIjoiQXBwbGljYXRpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENyZWF0ZWQgYnkgSnVzdGluIG9uIDkvMi8xNi5cbiAqL1xuXG4vLy88cmVmZXJlbmNlIHBhdGg9XCIuL2ludGVyZmFjZXMvZXh0ZW5zaW9ucy9FeHByZXNzLmQudHNcIiAvPlxuLy8vPHJlZmVyZW5jZSBwYXRoPVwiLi9pbnRlcmZhY2VzL2V4dGVuc2lvbnMvTm9kZS5kLnRzXCIgLz5cblxuaW1wb3J0IGV4cHJlc3MgPSByZXF1aXJlKCdleHByZXNzJyk7XG5pbXBvcnQgaHR0cCA9IHJlcXVpcmUoJ2h0dHAnKTtcbmltcG9ydCB7IEdsb2JhbENvbmZpZywgUm91dGVDb25maWcsIEV4cHJlc3NDb25maWcsIE1vbmdvQ29uZmlnIH0gZnJvbSAnLi9jb25maWcnXG5pbXBvcnQgeyBDT05GSUcgfSBmcm9tICcuL2NvbmZpZy9lbnZpcm9ubWVudCdcblxuLy8gRXhwcmVzcyByb3V0ZSBkZWNvcmF0b3JzIG1vZHVsZSBjb25maWdcbmltcG9ydCB7IEV4cHJlc3NEZWNvcmF0ZSwgSUV4cHJlc3NEZWNvcmF0ZU9wdGlvbnMgfSBmcm9tICdleHByZXNzLWRlY29yYXRlJ1xuY29uc3QgT1BUUzpJRXhwcmVzc0RlY29yYXRlT3B0aW9ucyA9IHtcblx0Y3RybERpcjogYCR7X19kaXJuYW1lfS9hcGlgLFxuXHRyb3V0ZUNvbmZpZzogUm91dGVDb25maWdcbn07XG5cbi8qKlxuICogQGRlc2NyaXB0aW9uXG4gKiBNYWluIEV4cHJlc3MgYXBwbGljYXRpb24gY2xhc3MgLSBpbiBjaGFyZ2Ugb2Ygc3RhcnRpbmcvc3RvcHBpbmcgc2VydmVyIGFuZCBhbGwgYXBwIGNvbmZpZ3VyYXRpb25zXG4gKi9cbmV4cG9ydCBjbGFzcyBBcHBsaWNhdGlvblxue1xuXHRwdWJsaWMgZXhwcmVzc0FwcDpleHByZXNzLkFwcGxpY2F0aW9uID0gZXhwcmVzcygpO1xuXHRwdWJsaWMgc2VydmVyOmh0dHAuU2VydmVyO1xuXHRwdWJsaWMgY29uZmlnOmFueSA9IENPTkZJRztcblxuXHRjb25zdHJ1Y3Rvcigpe31cblxuXHQvKipcblx0ICogQ29uZmlnIGZ1bmN0aW9ucyBmb3IgTWlkZGxld2FyZS9HbG9iYWxzL0RiLCBldGNcblx0ICogQGNvbnN0cnVjdG9yXG5cdCAqL1xuXHRwdWJsaWMgQ29uZmlnKClcblx0e1xuXHRcdC8vIEluc3RhbnRpYXRlIEV4cHJlc3NEZWNvcmF0ZVxuXHRcdG5ldyBFeHByZXNzRGVjb3JhdGUodGhpcy5leHByZXNzQXBwLCBPUFRTKTtcblxuXHRcdEdsb2JhbENvbmZpZygpO1xuXHRcdEV4cHJlc3NDb25maWcoKTtcblx0XHRNb25nb0NvbmZpZygpO1xuXHR9XG5cblx0LyoqXG5cdCAqIFdyYXBwZXIgYXJvdW5kIEV4cHJlc3MncyBnZXQoKSBtZXRob2Rcblx0ICogQXZvaWQgaGF2aW5nIHRvIHVzZSB0aGF0IG1ldGhvZCBhcyBBcHBsaWNhdGlvbi5leHByZXNzQXBwLmdldCgpIGFuZCBpbnN0ZWFkIHNpbXBseSB1c2UgQXBwbGljYXRpb24uR2V0KClcblx0ICogQHBhcmFtIHZhbHVlXG5cdCAqIEByZXR1cm5zIHthbnl9XG5cdCAqIEBjb25zdHJ1Y3RvclxuXHQgKi9cblx0cHVibGljIEdldCh2YWx1ZTpzdHJpbmcpXG5cdHtcblx0XHRyZXR1cm4gdGhpcy5leHByZXNzQXBwLmdldCh2YWx1ZSk7XG5cdH1cblxuXHQvKipcblx0ICogV3JhcHBlciBhcm91bmQgRXhwcmVzcydzIHNldCgpIG1ldGhvZFxuXHQgKiBBdm9pZCBoYXZpbmcgdG8gdXNlIHRoYXQgbWV0aG9kIGFzIEFwcGxpY2F0aW9uLmV4cHJlc3NBcHAuc2V0KCkgYW5kIGluc3RlYWQgc2ltcGx5IHVzZSBBcHBsaWNhdGlvbi5TZXQoKVxuXHQgKiBAcGFyYW0gc2V0dGluZ1xuXHQgKiBAcGFyYW0gdmFsdWVcblx0ICogQHJldHVybnMge2FueX1cblx0ICogQGNvbnN0cnVjdG9yXG5cdCAqL1xuXHRwdWJsaWMgU2V0KHNldHRpbmc6c3RyaW5nLCB2YWx1ZTphbnkpXG5cdHtcblx0XHRyZXR1cm4gdGhpcy5leHByZXNzQXBwLnNldChzZXR0aW5nLCB2YWx1ZSk7XG5cdH1cblxuXHQvKipcblx0ICogU3RhcnQgaHR0cCBzZXJ2ZXJcblx0ICogQGNvbnN0cnVjdG9yXG5cdCAqL1xuXHRwdWJsaWMgU3RhcnQoKVxuXHR7XG5cdFx0dGhpcy5zZXJ2ZXIgPSB0aGlzLmV4cHJlc3NBcHAubGlzdGVuKENPTkZJRy5wb3J0LCAoKSA9PlxuXHRcdHtcblx0XHRcdGxldCBzaXRlOnN0cmluZyA9IGBodHRwOi8vJHtDT05GSUcuaG9zdH06JHtDT05GSUcucG9ydH1gO1xuXG5cdFx0XHRnbG9iYWwuJGxvZy5pbmZvKGBSZXZlbHJ5IGFuZCBhd2UgYXJlIGFmb290IGF0ICR7c2l0ZX0gaW4gJHtDT05GSUcuZW52fSBtb2RlLmApO1xuXHRcdFx0Z2xvYmFsLiRsb2cuaW5mbyhgQ29uZmlnOiAke0NPTkZJRy5uYW1lfWApO1xuXHRcdFx0Z2xvYmFsLiRsb2cuaW5mbyhgRGF0YWJhc2U6ICR7Q09ORklHLm1vbmdvRGIuZGJ9YCk7XG5cdFx0XHRnbG9iYWwuJGxvZy5pbmZvKGBEYXRhYmFzZSBIb3N0OiAke0NPTkZJRy5tb25nb0RiLmhvc3R9YCk7XG5cdFx0fSk7XG5cdH1cblxuXHQvKipcblx0ICogS2lsbCBodHRwIHNlcnZlclxuXHQgKiBAY29uc3RydWN0b3Jcblx0ICovXG5cdHB1YmxpYyBTdG9wKClcblx0e1xuXHRcdHRoaXMuc2VydmVyLmNsb3NlKCgpID0+XG5cdFx0e1xuXHRcdFx0Y29uc29sZS53YXJuKCdTdG9wcGluZyBFeHByZXNzIFNlcnZlciAuIC4gLicpO1xuXG5cdFx0XHQvLyBSaWdodCBub3cgdGhlIG9ubHkgdGhpbmcgY2FsbGluZyBhcHAuU3RvcCgpIGlzIG91ciBzcGVjc1xuXHRcdFx0Ly8gR2l2ZSB0aGUgc3BlY3MgcGxlbnR5IG9mIHRpbWUgdG8gY29tcGxldGUgYmVmb3JlIGtpbGxpbmcgdGhlIHByb2Nlc3Ncblx0XHRcdC8vIFRPRE86IGRldGVybWluZSBpZiB0aGlzIGlzIGFuIGFjY2VwdGFibGUgc29sdXRpb25cblx0XHRcdHNldFRpbWVvdXQoKCkgPT5cblx0XHRcdHtcblx0XHRcdFx0Z2xvYmFsLiRsb2cuaW5mbygnU2VydmVyIFN0b3BwZWQnKTtcblx0XHRcdFx0cHJvY2Vzcy5leGl0KDApO1xuXHRcdFx0fSwgMTUwMCk7XG5cdFx0fSk7XG5cdH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
