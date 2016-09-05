/**
 * Created by Justin on 9/2/16.
 */
"use strict";
const environment_1 = require('../config/environment');
function RouteConfig(app) {
    // Angular routes should return index.html
    app.route(environment_1.CONFIG.angularRoutes)
        .get((req, res, next) => {
        return res.sendFile(`${environment_1.CONFIG.root}/src/client/index.html`);
    });
    // Configure route for client-side unit tests if we're not in production
    if (environment_1.CONFIG.env === 'development' || environment_1.CONFIG.env === 'test') {
        app.get('/client-tests', (req, res, next) => {
            return res.sendFile(`${environment_1.CONFIG.root}/src/client/tests/unit-tests.html`);
        });
    }
}
exports.RouteConfig = RouteConfig;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbmZpZy9yb3V0ZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0dBRUc7O0FBTUgsOEJBQXVCLHVCQUV2QixDQUFDLENBRjZDO0FBRTlDLHFCQUE0QixHQUF1QjtJQUVsRCwwQ0FBMEM7SUFDMUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxvQkFBTSxDQUFDLGFBQWEsQ0FBQztTQUM3QixHQUFHLENBQUMsQ0FBQyxHQUFXLEVBQUUsR0FBWSxFQUFFLElBQWlCO1FBRWpELE1BQU0sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLEdBQUcsb0JBQU0sQ0FBQyxJQUFJLHdCQUF3QixDQUFDLENBQUM7SUFDN0QsQ0FBQyxDQUFDLENBQUM7SUFFSix3RUFBd0U7SUFDeEUsRUFBRSxDQUFDLENBQUMsb0JBQU0sQ0FBQyxHQUFHLEtBQUssYUFBYSxJQUFJLG9CQUFNLENBQUMsR0FBRyxLQUFLLE1BQU0sQ0FBQyxDQUMxRCxDQUFDO1FBQ0EsR0FBRyxDQUFDLEdBQUcsQ0FBQyxlQUFlLEVBQUUsQ0FBQyxHQUFXLEVBQUUsR0FBWSxFQUFFLElBQWlCO1lBRXJFLE1BQU0sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLEdBQUcsb0JBQU0sQ0FBQyxJQUFJLG1DQUFtQyxDQUFDLENBQUM7UUFDeEUsQ0FBQyxDQUFDLENBQUE7SUFDSCxDQUFDO0FBQ0YsQ0FBQztBQWpCZSxtQkFBVyxjQWlCMUIsQ0FBQSIsImZpbGUiOiJjb25maWcvcm91dGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDcmVhdGVkIGJ5IEp1c3RpbiBvbiA5LzIvMTYuXG4gKi9cblxuLy8vPHJlZmVyZW5jZSBwYXRoPVwiLi4vaW50ZXJmYWNlcy9leHRlbnNpb25zL0V4cHJlc3MuZC50c1wiIC8+XG5cbmltcG9ydCBleHByZXNzID0gcmVxdWlyZSgnZXhwcmVzcycpO1xuaW1wb3J0IHsgUmVxdWVzdCwgUmVzcG9uc2UsIE5leHRGdW5jdGlvbiB9IGZyb20gJ2V4cHJlc3MnXG5pbXBvcnQgeyBDT05GSUcgfSBmcm9tICcuLi9jb25maWcvZW52aXJvbm1lbnQnXG5cbmV4cG9ydCBmdW5jdGlvbiBSb3V0ZUNvbmZpZyhhcHA6ZXhwcmVzcy5BcHBsaWNhdGlvbik6dm9pZFxue1xuXHQvLyBBbmd1bGFyIHJvdXRlcyBzaG91bGQgcmV0dXJuIGluZGV4Lmh0bWxcblx0YXBwLnJvdXRlKENPTkZJRy5hbmd1bGFyUm91dGVzKVxuXHRcdC5nZXQoKHJlcTpSZXF1ZXN0LCByZXM6UmVzcG9uc2UsIG5leHQ6TmV4dEZ1bmN0aW9uKSA9PlxuXHRcdHtcblx0XHRcdHJldHVybiByZXMuc2VuZEZpbGUoYCR7Q09ORklHLnJvb3R9L3NyYy9jbGllbnQvaW5kZXguaHRtbGApO1xuXHRcdH0pO1xuXG5cdC8vIENvbmZpZ3VyZSByb3V0ZSBmb3IgY2xpZW50LXNpZGUgdW5pdCB0ZXN0cyBpZiB3ZSdyZSBub3QgaW4gcHJvZHVjdGlvblxuXHRpZiAoQ09ORklHLmVudiA9PT0gJ2RldmVsb3BtZW50JyB8fCBDT05GSUcuZW52ID09PSAndGVzdCcpXG5cdHtcblx0XHRhcHAuZ2V0KCcvY2xpZW50LXRlc3RzJywgKHJlcTpSZXF1ZXN0LCByZXM6UmVzcG9uc2UsIG5leHQ6TmV4dEZ1bmN0aW9uKSA9PlxuXHRcdHtcblx0XHRcdHJldHVybiByZXMuc2VuZEZpbGUoYCR7Q09ORklHLnJvb3R9L3NyYy9jbGllbnQvdGVzdHMvdW5pdC10ZXN0cy5odG1sYCk7XG5cdFx0fSlcblx0fVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9