/**
 * Created by Justin on 9/2/16.
 */
"use strict";
/// <reference path="../../../../typings/index.d.ts" />
let path = require('path');
module.exports = {
    name: 'local',
    use: false,
    env: process.env.NODE_ENV || 'development',
    // Host
    host: process.env.HOST || 'localhost',
    // Server port
    port: process.env.PORT || 3000,
    // Server IP
    ip: process.env.IP || '127.0.0.1',
    mongoDb: {
        user: '',
        pass: '',
        host: 'localhost',
        port: 27017,
        db: 'mlab-dev',
        auth: {},
        uri: 'mongodb://localhost/mlab-dev'
    }
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbmZpZy9lbnZpcm9ubWVudC9sb2NhbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7R0FFRzs7QUFFSCx1REFBdUQ7QUFFdkQsSUFBSSxJQUFJLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBRTNCLGlCQUFTO0lBQ1IsSUFBSSxFQUFFLE9BQU87SUFDYixHQUFHLEVBQUUsS0FBSztJQUNWLEdBQUcsRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsSUFBSSxhQUFhO0lBRTFDLE9BQU87SUFDUCxJQUFJLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLElBQUksV0FBVztJQUVyQyxjQUFjO0lBQ2QsSUFBSSxFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxJQUFJLElBQUk7SUFFOUIsWUFBWTtJQUNaLEVBQUUsRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUUsSUFBSSxXQUFXO0lBRWpDLE9BQU8sRUFBRTtRQUNSLElBQUksRUFBRSxFQUFFO1FBQ1IsSUFBSSxFQUFFLEVBQUU7UUFDUixJQUFJLEVBQUUsV0FBVztRQUNqQixJQUFJLEVBQUUsS0FBSztRQUNYLEVBQUUsRUFBRSxVQUFVO1FBQ2QsSUFBSSxFQUFFLEVBQUU7UUFDUixHQUFHLEVBQUUsOEJBQThCO0tBQ25DO0NBQ0QsQ0FBQSIsImZpbGUiOiJjb25maWcvZW52aXJvbm1lbnQvbG9jYWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENyZWF0ZWQgYnkgSnVzdGluIG9uIDkvMi8xNi5cbiAqL1xuXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vLi4vLi4vdHlwaW5ncy9pbmRleC5kLnRzXCIgLz5cblxubGV0IHBhdGggPSByZXF1aXJlKCdwYXRoJyk7XG5cbmV4cG9ydCA9IHtcblx0bmFtZTogJ2xvY2FsJyxcblx0dXNlOiBmYWxzZSxcblx0ZW52OiBwcm9jZXNzLmVudi5OT0RFX0VOViB8fCAnZGV2ZWxvcG1lbnQnLFxuXG5cdC8vIEhvc3Rcblx0aG9zdDogcHJvY2Vzcy5lbnYuSE9TVCB8fCAnbG9jYWxob3N0JyxcblxuXHQvLyBTZXJ2ZXIgcG9ydFxuXHRwb3J0OiBwcm9jZXNzLmVudi5QT1JUIHx8IDMwMDAsXG5cblx0Ly8gU2VydmVyIElQXG5cdGlwOiBwcm9jZXNzLmVudi5JUCB8fCAnMTI3LjAuMC4xJyxcblxuXHRtb25nb0RiOiB7XG5cdFx0dXNlcjogJycsXG5cdFx0cGFzczogJycsXG5cdFx0aG9zdDogJ2xvY2FsaG9zdCcsXG5cdFx0cG9ydDogMjcwMTcsXG5cdFx0ZGI6ICdtbGFiLWRldicsXG5cdFx0YXV0aDoge30sXG5cdFx0dXJpOiAnbW9uZ29kYjovL2xvY2FsaG9zdC9tbGFiLWRldidcblx0fVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
