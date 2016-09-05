/**
 * Created by Justin on 9/2/16.
 */
"use strict";
class ErrorHandler {
    static ConstructError(e) {
        let ret;
        ret = {
            success: false,
            message: e.message || 'An unknown error occurred',
            status: e.status || e.statusCode || 500,
            body: e.body || {},
            stack: e.stack || {}
        };
        return ret;
    }
}
exports.ErrorHandler = ErrorHandler;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVycm9yLWhhbmRsaW5nL0Vycm9ySGFuZGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7R0FFRzs7QUFJSDtJQUVDLE9BQWMsY0FBYyxDQUFDLENBQUs7UUFFakMsSUFBSSxHQUFnQixDQUFDO1FBQ3JCLEdBQUcsR0FBRztZQUNMLE9BQU8sRUFBRSxLQUFLO1lBQ2QsT0FBTyxFQUFFLENBQUMsQ0FBQyxPQUFPLElBQUksMkJBQTJCO1lBQ2pELE1BQU0sRUFBRSxDQUFDLENBQUMsTUFBTSxJQUFJLENBQUMsQ0FBQyxVQUFVLElBQUksR0FBRztZQUN2QyxJQUFJLEVBQUUsQ0FBQyxDQUFDLElBQUksSUFBSSxFQUFFO1lBQ2xCLEtBQUssRUFBRSxDQUFDLENBQUMsS0FBSyxJQUFJLEVBQUU7U0FDcEIsQ0FBQztRQUVGLE1BQU0sQ0FBQyxHQUFHLENBQUM7SUFDWixDQUFDO0FBQ0YsQ0FBQztBQWZZLG9CQUFZLGVBZXhCLENBQUEiLCJmaWxlIjoiZXJyb3ItaGFuZGxpbmcvRXJyb3JIYW5kbGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDcmVhdGVkIGJ5IEp1c3RpbiBvbiA5LzIvMTYuXG4gKi9cblxuaW1wb3J0IHsgSUVycm9yT2JqZWN0IH0gZnJvbSAnLi4vaW50ZXJmYWNlcydcblxuZXhwb3J0IGNsYXNzIEVycm9ySGFuZGxlclxue1xuXHRwdWJsaWMgc3RhdGljIENvbnN0cnVjdEVycm9yKGU6YW55KTpJRXJyb3JPYmplY3Rcblx0e1xuXHRcdGxldCByZXQ6SUVycm9yT2JqZWN0O1xuXHRcdHJldCA9IHtcblx0XHRcdHN1Y2Nlc3M6IGZhbHNlLFxuXHRcdFx0bWVzc2FnZTogZS5tZXNzYWdlIHx8ICdBbiB1bmtub3duIGVycm9yIG9jY3VycmVkJyxcblx0XHRcdHN0YXR1czogZS5zdGF0dXMgfHwgZS5zdGF0dXNDb2RlIHx8IDUwMCxcblx0XHRcdGJvZHk6IGUuYm9keSB8fCB7fSxcblx0XHRcdHN0YWNrOiBlLnN0YWNrIHx8IHt9XG5cdFx0fTtcblxuXHRcdHJldHVybiByZXQ7XG5cdH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
