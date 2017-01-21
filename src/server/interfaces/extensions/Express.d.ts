/**
 * Created by Justin on 9/2/16.
 */

declare module Express
{
	export interface Application
	{
		// express-ws - websocket routing
		websocket:Function;
		extendExpress:Function;
		createWebSocketServer:Function;
	}
}
