/**
 * Created by Justin on 9/2/16.
 */
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator.throw(value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments)).next());
    });
};
const ErrorHandler_1 = require('./ErrorHandler');
const models_1 = require('../models');
/**
 * @class
 * @description Logs caught errors to database
 */
class BugLogger {
    static Log(e, controller, method, logMessage) {
        return __awaiter(this, void 0, Promise, function* () {
            let err = ErrorHandler_1.ErrorHandler.ConstructError(e);
            let bug = {
                controller: controller || 'Unknown',
                method: method || 'Unknown',
                date: new Date(),
                stack: err.stack || 'Unknown'
            };
            let data;
            try {
                data = yield models_1.Bug.create(bug);
            }
            catch (e) {
                console.log('E: ', e);
                return {};
            }
            global.$log.error(logMessage || `${e.message + ' -' || ''} ${controller} Error Logged to the Database`);
            return { err: err, data: data };
        });
    }
}
exports.BugLogger = BugLogger;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVycm9yLWhhbmRsaW5nL0J1Z0xvZ2dlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7R0FFRzs7Ozs7Ozs7OztBQUtILCtCQUE2QixnQkFDN0IsQ0FBQyxDQUQ0QztBQUM3Qyx5QkFBb0IsV0FNcEIsQ0FBQyxDQU44QjtBQUUvQjs7O0dBR0c7QUFDSDtJQUVDLE9BQW9CLEdBQUcsQ0FBQyxDQUFLLEVBQUUsVUFBaUIsRUFBRSxNQUFhLEVBQUUsVUFBa0I7O1lBRWxGLElBQUksR0FBRyxHQUFnQiwyQkFBWSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN0RCxJQUFJLEdBQUcsR0FBUTtnQkFDZCxVQUFVLEVBQUUsVUFBVSxJQUFJLFNBQVM7Z0JBQ25DLE1BQU0sRUFBRSxNQUFNLElBQUksU0FBUztnQkFDM0IsSUFBSSxFQUFFLElBQUksSUFBSSxFQUFFO2dCQUNoQixLQUFLLEVBQUUsR0FBRyxDQUFDLEtBQUssSUFBSSxTQUFTO2FBQzdCLENBQUM7WUFFRixJQUFJLElBQVEsQ0FBQztZQUViLElBQ0EsQ0FBQztnQkFDQSxJQUFJLEdBQUcsTUFBTSxZQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQzlCLENBQ0E7WUFBQSxLQUFLLENBQUEsQ0FBQyxDQUFDLENBQUMsQ0FDUixDQUFDO2dCQUNBLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUN0QixNQUFNLENBQWUsRUFBRSxDQUFDO1lBQ3pCLENBQUM7WUFFRCxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLElBQUksR0FBRyxDQUFDLENBQUMsT0FBTyxHQUFHLElBQUksSUFBSSxFQUFFLElBQUksVUFBVSwrQkFBK0IsQ0FBQyxDQUFDO1lBQ3hHLE1BQU0sQ0FBQyxFQUFFLEtBQUEsR0FBRyxFQUFFLE1BQUEsSUFBSSxFQUFFLENBQUM7UUFDdEIsQ0FBQztLQUFBO0FBQ0YsQ0FBQztBQTNCWSxpQkFBUyxZQTJCckIsQ0FBQSIsImZpbGUiOiJlcnJvci1oYW5kbGluZy9CdWdMb2dnZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENyZWF0ZWQgYnkgSnVzdGluIG9uIDkvMi8xNi5cbiAqL1xuXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vaW50ZXJmYWNlcy9leHRlbnNpb25zL05vZGUuZC50c1wiIC8+XG5cbmltcG9ydCB7IElCdWcsIElFcnJvck9iamVjdCB9IGZyb20gJy4uL2ludGVyZmFjZXMnXG5pbXBvcnQgeyBFcnJvckhhbmRsZXIgfSBmcm9tICcuL0Vycm9ySGFuZGxlcidcbmltcG9ydCB7IEJ1ZyB9IGZyb20gJy4uL21vZGVscydcblxuLyoqXG4gKiBAY2xhc3NcbiAqIEBkZXNjcmlwdGlvbiBMb2dzIGNhdWdodCBlcnJvcnMgdG8gZGF0YWJhc2VcbiAqL1xuZXhwb3J0IGNsYXNzIEJ1Z0xvZ2dlclxue1xuXHRwdWJsaWMgc3RhdGljIGFzeW5jIExvZyhlOmFueSwgY29udHJvbGxlcjpzdHJpbmcsIG1ldGhvZDpzdHJpbmcsIGxvZ01lc3NhZ2U/OnN0cmluZyk6UHJvbWlzZTxhbnk+XG5cdHtcblx0XHRsZXQgZXJyOklFcnJvck9iamVjdCA9IEVycm9ySGFuZGxlci5Db25zdHJ1Y3RFcnJvcihlKTtcblx0XHRsZXQgYnVnOklCdWcgPSB7XG5cdFx0XHRjb250cm9sbGVyOiBjb250cm9sbGVyIHx8ICdVbmtub3duJyxcblx0XHRcdG1ldGhvZDogbWV0aG9kIHx8ICdVbmtub3duJyxcblx0XHRcdGRhdGU6IG5ldyBEYXRlKCksXG5cdFx0XHRzdGFjazogZXJyLnN0YWNrIHx8ICdVbmtub3duJ1xuXHRcdH07XG5cblx0XHRsZXQgZGF0YTphbnk7XG5cblx0XHR0cnlcblx0XHR7XG5cdFx0XHRkYXRhID0gYXdhaXQgQnVnLmNyZWF0ZShidWcpO1xuXHRcdH1cblx0XHRjYXRjaChlKVxuXHRcdHtcblx0XHRcdGNvbnNvbGUubG9nKCdFOiAnLCBlKTtcblx0XHRcdHJldHVybiA8SUVycm9yT2JqZWN0Pnt9O1xuXHRcdH1cblxuXHRcdGdsb2JhbC4kbG9nLmVycm9yKGxvZ01lc3NhZ2UgfHwgYCR7ZS5tZXNzYWdlICsgJyAtJyB8fCAnJ30gJHtjb250cm9sbGVyfSBFcnJvciBMb2dnZWQgdG8gdGhlIERhdGFiYXNlYCk7XG5cdFx0cmV0dXJuIHsgZXJyLCBkYXRhIH07XG5cdH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
