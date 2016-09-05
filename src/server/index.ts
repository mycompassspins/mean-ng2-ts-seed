/**
 * Created by Justin on 9/2/16.
 */

/**
 * @entrypoint
 * Configure Express and start http server
 */
import { Application } from './Application'

let app:Application = new Application();

app.Config();
app.Start();

// Expose Application
export { app }
