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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVycm9yLWhhbmRsaW5nL0J1Z0xvZ2dlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7R0FFRzs7Ozs7Ozs7OztBQUtILCtCQUE2QixnQkFDN0IsQ0FBQyxDQUQ0QztBQUM3Qyx5QkFBb0IsV0FNcEIsQ0FBQyxDQU44QjtBQUUvQjs7O0dBR0c7QUFDSDtJQUVDLE9BQW9CLEdBQUcsQ0FBQyxDQUFLLEVBQUUsVUFBaUIsRUFBRSxNQUFhLEVBQUUsVUFBa0I7O1lBRWxGLElBQUksR0FBRyxHQUFnQiwyQkFBWSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN0RCxJQUFJLEdBQUcsR0FBTztnQkFDYixVQUFVLEVBQUUsVUFBVSxJQUFJLFNBQVM7Z0JBQ25DLE1BQU0sRUFBRSxNQUFNLElBQUksU0FBUztnQkFDM0IsSUFBSSxFQUFFLElBQUksSUFBSSxFQUFFO2dCQUNoQixLQUFLLEVBQUUsR0FBRyxDQUFDLEtBQUssSUFBSSxTQUFTO2FBQzdCLENBQUM7WUFFRixJQUFJLElBQVEsQ0FBQztZQUViLElBQ0EsQ0FBQztnQkFDQSxJQUFJLEdBQUcsTUFBTSxZQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQzlCLENBQ0E7WUFBQSxLQUFLLENBQUEsQ0FBQyxDQUFDLENBQUMsQ0FDUixDQUFDO2dCQUNBLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUN0QixNQUFNLENBQWUsRUFBRSxDQUFDO1lBQ3pCLENBQUM7WUFFRCxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLElBQUksR0FBRyxDQUFDLENBQUMsT0FBTyxHQUFHLElBQUksSUFBSSxFQUFFLElBQUksVUFBVSwrQkFBK0IsQ0FBQyxDQUFDO1lBQ3hHLE1BQU0sQ0FBQyxFQUFFLEtBQUEsR0FBRyxFQUFFLE1BQUEsSUFBSSxFQUFFLENBQUM7UUFDdEIsQ0FBQztLQUFBO0FBQ0YsQ0FBQztBQTNCWSxpQkFBUyxZQTJCckIsQ0FBQSIsImZpbGUiOiJlcnJvci1oYW5kbGluZy9CdWdMb2dnZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENyZWF0ZWQgYnkgSnVzdGluIG9uIDkvMi8xNi5cbiAqL1xuXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vaW50ZXJmYWNlcy9leHRlbnNpb25zL05vZGUuZC50c1wiIC8+XG5cbmltcG9ydCB7IElCdWcsIElFcnJvck9iamVjdCB9IGZyb20gJy4uL2ludGVyZmFjZXMnXG5pbXBvcnQgeyBFcnJvckhhbmRsZXIgfSBmcm9tICcuL0Vycm9ySGFuZGxlcidcbmltcG9ydCB7IEJ1ZyB9IGZyb20gJy4uL21vZGVscydcblxuLyoqXG4gKiBAY2xhc3NcbiAqIEBkZXNjcmlwdGlvbiBMb2dzIGNhdWdodCBlcnJvcnMgdG8gZGF0YWJhc2VcbiAqL1xuZXhwb3J0IGNsYXNzIEJ1Z0xvZ2dlclxue1xuXHRwdWJsaWMgc3RhdGljIGFzeW5jIExvZyhlOmFueSwgY29udHJvbGxlcjpzdHJpbmcsIG1ldGhvZDpzdHJpbmcsIGxvZ01lc3NhZ2U/OnN0cmluZyk6UHJvbWlzZTxhbnk+XG5cdHtcblx0XHRsZXQgZXJyOklFcnJvck9iamVjdCA9IEVycm9ySGFuZGxlci5Db25zdHJ1Y3RFcnJvcihlKTtcblx0XHRsZXQgYnVnOmFueSA9IHtcblx0XHRcdGNvbnRyb2xsZXI6IGNvbnRyb2xsZXIgfHwgJ1Vua25vd24nLFxuXHRcdFx0bWV0aG9kOiBtZXRob2QgfHwgJ1Vua25vd24nLFxuXHRcdFx0ZGF0ZTogbmV3IERhdGUoKSxcblx0XHRcdHN0YWNrOiBlcnIuc3RhY2sgfHwgJ1Vua25vd24nXG5cdFx0fTtcblxuXHRcdGxldCBkYXRhOmFueTtcblxuXHRcdHRyeVxuXHRcdHtcblx0XHRcdGRhdGEgPSBhd2FpdCBCdWcuY3JlYXRlKGJ1Zyk7XG5cdFx0fVxuXHRcdGNhdGNoKGUpXG5cdFx0e1xuXHRcdFx0Y29uc29sZS5sb2coJ0U6ICcsIGUpO1xuXHRcdFx0cmV0dXJuIDxJRXJyb3JPYmplY3Q+e307XG5cdFx0fVxuXG5cdFx0Z2xvYmFsLiRsb2cuZXJyb3IobG9nTWVzc2FnZSB8fCBgJHtlLm1lc3NhZ2UgKyAnIC0nIHx8ICcnfSAke2NvbnRyb2xsZXJ9IEVycm9yIExvZ2dlZCB0byB0aGUgRGF0YWJhc2VgKTtcblx0XHRyZXR1cm4geyBlcnIsIGRhdGEgfTtcblx0fVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
