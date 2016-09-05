/**
 * Created by Justin on 9/2/16.
 */
"use strict";
const _1 = require('../');
const serveStatic = require('serve-static');
let bodyParser = require('body-parser'), morgan = require('morgan');
/**
 * Configures Express middleware
 * @constructor
 */
function ExpressConfig() {
    _1.app.expressApp.use(bodyParser.json());
    _1.app.expressApp.use(bodyParser.urlencoded({ extended: true }));
    // Serve static files both from /src/client and /dist/client
    _1.app.expressApp.use(serveStatic(`${_1.app.expressApp.get('appPath')}/client`));
    _1.app.expressApp.use(serveStatic(`${_1.app.config.root}/src/client`));
    _1.app.expressApp.use('/node_modules', serveStatic(`${_1.app.config.root}/node_modules`));
    if (_1.app.config.env === 'development' || _1.app.config.env === 'test') {
        _1.app.expressApp.use(morgan('dev'));
        // Static assets for client-side unit tests
        _1.app.expressApp.use(serveStatic(`${_1.app.config.root}/node_modules/jasmine-core/lib/jasmine-core`));
    }
}
exports.ExpressConfig = ExpressConfig;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbmZpZy9leHByZXNzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztHQUVHOztBQUVILG1CQUFvQixLQUNwQixDQUFDLENBRHdCO0FBQ3pCLE1BQU8sV0FBVyxXQUFXLGNBQWMsQ0FBQyxDQUFDO0FBRTdDLElBQUksVUFBVSxHQUFHLE9BQU8sQ0FBQyxhQUFhLENBQUMsRUFDdEMsTUFBTSxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUU1Qjs7O0dBR0c7QUFDSDtJQUVDLE1BQUcsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO0lBQ3RDLE1BQUcsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBRTlELDREQUE0RDtJQUM1RCxNQUFHLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsR0FBRyxNQUFHLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztJQUMzRSxNQUFHLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsR0FBRyxNQUFHLENBQUMsTUFBTSxDQUFDLElBQUksYUFBYSxDQUFDLENBQUMsQ0FBQztJQUNqRSxNQUFHLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxlQUFlLEVBQUUsV0FBVyxDQUFDLEdBQUcsTUFBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLGVBQWUsQ0FBQyxDQUFDLENBQUM7SUFFcEYsRUFBRSxDQUFDLENBQUMsTUFBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLEtBQUssYUFBYSxJQUFJLE1BQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxLQUFLLE1BQU0sQ0FBQyxDQUNsRSxDQUFDO1FBQ0EsTUFBRyxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFFbEMsMkNBQTJDO1FBQzNDLE1BQUcsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxHQUFHLE1BQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSw2Q0FBNkMsQ0FBQyxDQUFDLENBQUM7SUFDbEcsQ0FBQztBQUVGLENBQUM7QUFsQmUscUJBQWEsZ0JBa0I1QixDQUFBIiwiZmlsZSI6ImNvbmZpZy9leHByZXNzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDcmVhdGVkIGJ5IEp1c3RpbiBvbiA5LzIvMTYuXG4gKi9cblxuaW1wb3J0IHsgYXBwIH0gZnJvbSAnLi4vJ1xuaW1wb3J0IHNlcnZlU3RhdGljID0gcmVxdWlyZSgnc2VydmUtc3RhdGljJyk7XG5cbmxldCBib2R5UGFyc2VyID0gcmVxdWlyZSgnYm9keS1wYXJzZXInKSxcblx0bW9yZ2FuID0gcmVxdWlyZSgnbW9yZ2FuJyk7XG5cbi8qKlxuICogQ29uZmlndXJlcyBFeHByZXNzIG1pZGRsZXdhcmVcbiAqIEBjb25zdHJ1Y3RvclxuICovXG5leHBvcnQgZnVuY3Rpb24gRXhwcmVzc0NvbmZpZygpOnZvaWRcbntcblx0YXBwLmV4cHJlc3NBcHAudXNlKGJvZHlQYXJzZXIuanNvbigpKTtcblx0YXBwLmV4cHJlc3NBcHAudXNlKGJvZHlQYXJzZXIudXJsZW5jb2RlZCh7IGV4dGVuZGVkOiB0cnVlIH0pKTtcblxuXHQvLyBTZXJ2ZSBzdGF0aWMgZmlsZXMgYm90aCBmcm9tIC9zcmMvY2xpZW50IGFuZCAvZGlzdC9jbGllbnRcblx0YXBwLmV4cHJlc3NBcHAudXNlKHNlcnZlU3RhdGljKGAke2FwcC5leHByZXNzQXBwLmdldCgnYXBwUGF0aCcpfS9jbGllbnRgKSk7XG5cdGFwcC5leHByZXNzQXBwLnVzZShzZXJ2ZVN0YXRpYyhgJHthcHAuY29uZmlnLnJvb3R9L3NyYy9jbGllbnRgKSk7XG5cdGFwcC5leHByZXNzQXBwLnVzZSgnL25vZGVfbW9kdWxlcycsIHNlcnZlU3RhdGljKGAke2FwcC5jb25maWcucm9vdH0vbm9kZV9tb2R1bGVzYCkpO1xuXG5cdGlmIChhcHAuY29uZmlnLmVudiA9PT0gJ2RldmVsb3BtZW50JyB8fCBhcHAuY29uZmlnLmVudiA9PT0gJ3Rlc3QnKVxuXHR7XG5cdFx0YXBwLmV4cHJlc3NBcHAudXNlKG1vcmdhbignZGV2JykpO1xuXG5cdFx0Ly8gU3RhdGljIGFzc2V0cyBmb3IgY2xpZW50LXNpZGUgdW5pdCB0ZXN0c1xuXHRcdGFwcC5leHByZXNzQXBwLnVzZShzZXJ2ZVN0YXRpYyhgJHthcHAuY29uZmlnLnJvb3R9L25vZGVfbW9kdWxlcy9qYXNtaW5lLWNvcmUvbGliL2phc21pbmUtY29yZWApKTtcblx0fVxuXG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
