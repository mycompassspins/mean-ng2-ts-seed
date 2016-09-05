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
const request = require('request');
/**
 * @class
 * @description async wrapper around request module
 */
class Request {
    static Get(url, returnType) {
        return __awaiter(this, void 0, Promise, function* () {
            return new Promise((resolve, reject) => {
                request.get(url, (err, res, body) => {
                    if (err)
                        return reject(err);
                    return resolve(returnType === 'json' ? JSON.parse(body) : res.statusCode);
                });
            });
        });
    }
    static Post(options) {
        return __awaiter(this, void 0, Promise, function* () {
            return new Promise((resolve, reject) => {
                request.post(options, (err, res, body) => {
                    if (err)
                        return reject(err);
                    return resolve(JSON.parse(body));
                });
            });
        });
    }
}
exports.Request = Request;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlbHBlcnMvSHR0cEhlbHBlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7R0FFRzs7Ozs7Ozs7OztBQUVILE1BQU8sT0FBTyxXQUFXLFNBQVMsQ0FBQyxDQUFDO0FBR3BDOzs7R0FHRztBQUNIO0lBRUMsT0FBb0IsR0FBRyxDQUFDLEdBQVUsRUFBRSxVQUFpQjs7WUFFcEQsTUFBTSxDQUFDLElBQUksT0FBTyxDQUFDLENBQUMsT0FBTyxFQUFFLE1BQU07Z0JBRWxDLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBTyxFQUFFLEdBQU8sRUFBRSxJQUFRO29CQUUzQyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUM7d0JBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFDNUIsTUFBTSxDQUFDLE9BQU8sQ0FBQyxVQUFVLEtBQUssTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDO2dCQUMzRSxDQUFDLENBQUMsQ0FBQTtZQUNILENBQUMsQ0FBQyxDQUFBO1FBQ0gsQ0FBQztLQUFBO0lBRUQsT0FBb0IsSUFBSSxDQUFDLE9BQXVCOztZQUUvQyxNQUFNLENBQUMsSUFBSSxPQUFPLENBQUMsQ0FBQyxPQUFPLEVBQUUsTUFBTTtnQkFFbEMsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxHQUFPLEVBQUUsR0FBTyxFQUFFLElBQVE7b0JBRWhELEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQzt3QkFBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUM1QixNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztnQkFDbEMsQ0FBQyxDQUFDLENBQUM7WUFDSixDQUFDLENBQUMsQ0FBQTtRQUNILENBQUM7S0FBQTtBQUNGLENBQUM7QUF6QlksZUFBTyxVQXlCbkIsQ0FBQSIsImZpbGUiOiJoZWxwZXJzL0h0dHBIZWxwZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENyZWF0ZWQgYnkgSnVzdGluIG9uIDkvMi8xNi5cbiAqL1xuXG5pbXBvcnQgcmVxdWVzdCA9IHJlcXVpcmUoJ3JlcXVlc3QnKTtcbmltcG9ydCB7IElSZXF1ZXN0T3B0aW9ucyB9IGZyb20gJy4uL2ludGVyZmFjZXMnXG5cbi8qKlxuICogQGNsYXNzXG4gKiBAZGVzY3JpcHRpb24gYXN5bmMgd3JhcHBlciBhcm91bmQgcmVxdWVzdCBtb2R1bGVcbiAqL1xuZXhwb3J0IGNsYXNzIFJlcXVlc3Rcbntcblx0cHVibGljIHN0YXRpYyBhc3luYyBHZXQodXJsOnN0cmluZywgcmV0dXJuVHlwZTpzdHJpbmcpOlByb21pc2U8YW55PlxuXHR7XG5cdFx0cmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+XG5cdFx0e1xuXHRcdFx0cmVxdWVzdC5nZXQodXJsLCAoZXJyOmFueSwgcmVzOmFueSwgYm9keTphbnkpID0+XG5cdFx0XHR7XG5cdFx0XHRcdGlmIChlcnIpIHJldHVybiByZWplY3QoZXJyKTtcblx0XHRcdFx0cmV0dXJuIHJlc29sdmUocmV0dXJuVHlwZSA9PT0gJ2pzb24nID8gSlNPTi5wYXJzZShib2R5KSA6IHJlcy5zdGF0dXNDb2RlKTtcblx0XHRcdH0pXG5cdFx0fSlcblx0fVxuXG5cdHB1YmxpYyBzdGF0aWMgYXN5bmMgUG9zdChvcHRpb25zOklSZXF1ZXN0T3B0aW9ucyk6UHJvbWlzZTxhbnk+XG5cdHtcblx0XHRyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT5cblx0XHR7XG5cdFx0XHRyZXF1ZXN0LnBvc3Qob3B0aW9ucywgKGVycjphbnksIHJlczphbnksIGJvZHk6YW55KSA9PlxuXHRcdFx0e1xuXHRcdFx0XHRpZiAoZXJyKSByZXR1cm4gcmVqZWN0KGVycik7XG5cdFx0XHRcdHJldHVybiByZXNvbHZlKEpTT04ucGFyc2UoYm9keSkpO1xuXHRcdFx0fSk7XG5cdFx0fSlcblx0fVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
