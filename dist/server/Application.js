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
            global.$log.warn('Stopping Express Server . . .');
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkFwcGxpY2F0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztHQUVHOztBQUVILDREQUE0RDtBQUM1RCx5REFBeUQ7QUFFekQsTUFBTyxPQUFPLFdBQVcsU0FBUyxDQUFDLENBQUM7QUFFcEMseUJBQXNFLFVBQ3RFLENBQUMsQ0FEK0U7QUFDaEYsOEJBQXVCLHNCQUd2QixDQUFDLENBSDRDO0FBRTdDLHlDQUF5QztBQUN6QyxtQ0FBeUQsa0JBQ3pELENBQUMsQ0FEMEU7QUFDM0UsTUFBTSxJQUFJLEdBQTJCO0lBQ3BDLE9BQU8sRUFBRSxHQUFHLFNBQVMsTUFBTTtJQUMzQixXQUFXLEVBQUUsb0JBQVc7Q0FDeEIsQ0FBQztBQUVGOzs7R0FHRztBQUNIO0lBTUM7UUFKTyxlQUFVLEdBQXVCLE9BQU8sRUFBRSxDQUFDO1FBRTNDLFdBQU0sR0FBTyxvQkFBTSxDQUFDO0lBRWIsQ0FBQztJQUVmOzs7T0FHRztJQUNJLE1BQU07UUFFWiw4QkFBOEI7UUFDOUIsSUFBSSxrQ0FBZSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFFM0MscUJBQVksRUFBRSxDQUFDO1FBQ2Ysc0JBQWEsRUFBRSxDQUFDO1FBQ2hCLG9CQUFXLEVBQUUsQ0FBQztJQUNmLENBQUM7SUFFRDs7Ozs7O09BTUc7SUFDSSxHQUFHLENBQUMsS0FBWTtRQUV0QixNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUVEOzs7Ozs7O09BT0c7SUFDSSxHQUFHLENBQUMsT0FBYyxFQUFFLEtBQVM7UUFFbkMsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBRUQ7OztPQUdHO0lBQ0ksS0FBSztRQUVYLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsb0JBQU0sQ0FBQyxJQUFJLEVBQUU7WUFFakQsSUFBSSxJQUFJLEdBQVUsVUFBVSxvQkFBTSxDQUFDLElBQUksSUFBSSxvQkFBTSxDQUFDLElBQUksRUFBRSxDQUFDO1lBRXpELE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGdDQUFnQyxJQUFJLE9BQU8sb0JBQU0sQ0FBQyxHQUFHLFFBQVEsQ0FBQyxDQUFDO1lBQ2hGLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsb0JBQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO1lBQzNDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsb0JBQU0sQ0FBQyxPQUFPLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztZQUNuRCxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxrQkFBa0Isb0JBQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztRQUMzRCxDQUFDLENBQUMsQ0FBQztJQUNKLENBQUM7SUFFRDs7O09BR0c7SUFDSSxJQUFJO1FBRVYsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7WUFFakIsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsK0JBQStCLENBQUMsQ0FBQztZQUVsRCwyREFBMkQ7WUFDM0QsdUVBQXVFO1lBQ3ZFLG9EQUFvRDtZQUNwRCxVQUFVLENBQUM7Z0JBRVYsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztnQkFDbkMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNqQixDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDVixDQUFDLENBQUMsQ0FBQztJQUNKLENBQUM7QUFDRixDQUFDO0FBcEZZLG1CQUFXLGNBb0Z2QixDQUFBIiwiZmlsZSI6IkFwcGxpY2F0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDcmVhdGVkIGJ5IEp1c3RpbiBvbiA5LzIvMTYuXG4gKi9cblxuLy8vPHJlZmVyZW5jZSBwYXRoPVwiLi9pbnRlcmZhY2VzL2V4dGVuc2lvbnMvRXhwcmVzcy5kLnRzXCIgLz5cbi8vLzxyZWZlcmVuY2UgcGF0aD1cIi4vaW50ZXJmYWNlcy9leHRlbnNpb25zL05vZGUuZC50c1wiIC8+XG5cbmltcG9ydCBleHByZXNzID0gcmVxdWlyZSgnZXhwcmVzcycpO1xuaW1wb3J0IGh0dHAgPSByZXF1aXJlKCdodHRwJyk7XG5pbXBvcnQgeyBHbG9iYWxDb25maWcsIFJvdXRlQ29uZmlnLCBFeHByZXNzQ29uZmlnLCBNb25nb0NvbmZpZyB9IGZyb20gJy4vY29uZmlnJ1xuaW1wb3J0IHsgQ09ORklHIH0gZnJvbSAnLi9jb25maWcvZW52aXJvbm1lbnQnXG5cbi8vIEV4cHJlc3Mgcm91dGUgZGVjb3JhdG9ycyBtb2R1bGUgY29uZmlnXG5pbXBvcnQgeyBFeHByZXNzRGVjb3JhdGUsIElFeHByZXNzRGVjb3JhdGVPcHRpb25zIH0gZnJvbSAnZXhwcmVzcy1kZWNvcmF0ZSdcbmNvbnN0IE9QVFM6SUV4cHJlc3NEZWNvcmF0ZU9wdGlvbnMgPSB7XG5cdGN0cmxEaXI6IGAke19fZGlybmFtZX0vYXBpYCxcblx0cm91dGVDb25maWc6IFJvdXRlQ29uZmlnXG59O1xuXG4vKipcbiAqIEBkZXNjcmlwdGlvblxuICogTWFpbiBFeHByZXNzIGFwcGxpY2F0aW9uIGNsYXNzIC0gaW4gY2hhcmdlIG9mIHN0YXJ0aW5nL3N0b3BwaW5nIHNlcnZlciBhbmQgYWxsIGFwcCBjb25maWd1cmF0aW9uc1xuICovXG5leHBvcnQgY2xhc3MgQXBwbGljYXRpb25cbntcblx0cHVibGljIGV4cHJlc3NBcHA6ZXhwcmVzcy5BcHBsaWNhdGlvbiA9IGV4cHJlc3MoKTtcblx0cHVibGljIHNlcnZlcjpodHRwLlNlcnZlcjtcblx0cHVibGljIGNvbmZpZzphbnkgPSBDT05GSUc7XG5cblx0Y29uc3RydWN0b3IoKXt9XG5cblx0LyoqXG5cdCAqIENvbmZpZyBmdW5jdGlvbnMgZm9yIE1pZGRsZXdhcmUvR2xvYmFscy9EYiwgZXRjXG5cdCAqIEBjb25zdHJ1Y3RvclxuXHQgKi9cblx0cHVibGljIENvbmZpZygpXG5cdHtcblx0XHQvLyBJbnN0YW50aWF0ZSBFeHByZXNzRGVjb3JhdGVcblx0XHRuZXcgRXhwcmVzc0RlY29yYXRlKHRoaXMuZXhwcmVzc0FwcCwgT1BUUyk7XG5cblx0XHRHbG9iYWxDb25maWcoKTtcblx0XHRFeHByZXNzQ29uZmlnKCk7XG5cdFx0TW9uZ29Db25maWcoKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBXcmFwcGVyIGFyb3VuZCBFeHByZXNzJ3MgZ2V0KCkgbWV0aG9kXG5cdCAqIEF2b2lkIGhhdmluZyB0byB1c2UgdGhhdCBtZXRob2QgYXMgQXBwbGljYXRpb24uZXhwcmVzc0FwcC5nZXQoKSBhbmQgaW5zdGVhZCBzaW1wbHkgdXNlIEFwcGxpY2F0aW9uLkdldCgpXG5cdCAqIEBwYXJhbSB2YWx1ZVxuXHQgKiBAcmV0dXJucyB7YW55fVxuXHQgKiBAY29uc3RydWN0b3Jcblx0ICovXG5cdHB1YmxpYyBHZXQodmFsdWU6c3RyaW5nKVxuXHR7XG5cdFx0cmV0dXJuIHRoaXMuZXhwcmVzc0FwcC5nZXQodmFsdWUpO1xuXHR9XG5cblx0LyoqXG5cdCAqIFdyYXBwZXIgYXJvdW5kIEV4cHJlc3MncyBzZXQoKSBtZXRob2Rcblx0ICogQXZvaWQgaGF2aW5nIHRvIHVzZSB0aGF0IG1ldGhvZCBhcyBBcHBsaWNhdGlvbi5leHByZXNzQXBwLnNldCgpIGFuZCBpbnN0ZWFkIHNpbXBseSB1c2UgQXBwbGljYXRpb24uU2V0KClcblx0ICogQHBhcmFtIHNldHRpbmdcblx0ICogQHBhcmFtIHZhbHVlXG5cdCAqIEByZXR1cm5zIHthbnl9XG5cdCAqIEBjb25zdHJ1Y3RvclxuXHQgKi9cblx0cHVibGljIFNldChzZXR0aW5nOnN0cmluZywgdmFsdWU6YW55KVxuXHR7XG5cdFx0cmV0dXJuIHRoaXMuZXhwcmVzc0FwcC5zZXQoc2V0dGluZywgdmFsdWUpO1xuXHR9XG5cblx0LyoqXG5cdCAqIFN0YXJ0IGh0dHAgc2VydmVyXG5cdCAqIEBjb25zdHJ1Y3RvclxuXHQgKi9cblx0cHVibGljIFN0YXJ0KClcblx0e1xuXHRcdHRoaXMuc2VydmVyID0gdGhpcy5leHByZXNzQXBwLmxpc3RlbihDT05GSUcucG9ydCwgKCkgPT5cblx0XHR7XG5cdFx0XHRsZXQgc2l0ZTpzdHJpbmcgPSBgaHR0cDovLyR7Q09ORklHLmhvc3R9OiR7Q09ORklHLnBvcnR9YDtcblxuXHRcdFx0Z2xvYmFsLiRsb2cuaW5mbyhgUmV2ZWxyeSBhbmQgYXdlIGFyZSBhZm9vdCBhdCAke3NpdGV9IGluICR7Q09ORklHLmVudn0gbW9kZS5gKTtcblx0XHRcdGdsb2JhbC4kbG9nLmluZm8oYENvbmZpZzogJHtDT05GSUcubmFtZX1gKTtcblx0XHRcdGdsb2JhbC4kbG9nLmluZm8oYERhdGFiYXNlOiAke0NPTkZJRy5tb25nb0RiLmRifWApO1xuXHRcdFx0Z2xvYmFsLiRsb2cuaW5mbyhgRGF0YWJhc2UgSG9zdDogJHtDT05GSUcubW9uZ29EYi5ob3N0fWApO1xuXHRcdH0pO1xuXHR9XG5cblx0LyoqXG5cdCAqIEtpbGwgaHR0cCBzZXJ2ZXJcblx0ICogQGNvbnN0cnVjdG9yXG5cdCAqL1xuXHRwdWJsaWMgU3RvcCgpXG5cdHtcblx0XHR0aGlzLnNlcnZlci5jbG9zZSgoKSA9PlxuXHRcdHtcblx0XHRcdGdsb2JhbC4kbG9nLndhcm4oJ1N0b3BwaW5nIEV4cHJlc3MgU2VydmVyIC4gLiAuJyk7XG5cblx0XHRcdC8vIFJpZ2h0IG5vdyB0aGUgb25seSB0aGluZyBjYWxsaW5nIGFwcC5TdG9wKCkgaXMgb3VyIHNwZWNzXG5cdFx0XHQvLyBHaXZlIHRoZSBzcGVjcyBwbGVudHkgb2YgdGltZSB0byBjb21wbGV0ZSBiZWZvcmUga2lsbGluZyB0aGUgcHJvY2Vzc1xuXHRcdFx0Ly8gVE9ETzogZGV0ZXJtaW5lIGlmIHRoaXMgaXMgYW4gYWNjZXB0YWJsZSBzb2x1dGlvblxuXHRcdFx0c2V0VGltZW91dCgoKSA9PlxuXHRcdFx0e1xuXHRcdFx0XHRnbG9iYWwuJGxvZy5pbmZvKCdTZXJ2ZXIgU3RvcHBlZCcpO1xuXHRcdFx0XHRwcm9jZXNzLmV4aXQoMCk7XG5cdFx0XHR9LCAxNTAwKTtcblx0XHR9KTtcblx0fVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
