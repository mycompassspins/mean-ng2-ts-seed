/**
 * Created by Justin on 9/10/16.
 */

/// <reference path="../../../typings/index.d.ts" />

let chalk = require('chalk');

class Logger
{
	public warn(msg:string)
	{
		return console.log(`${chalk.yellow('[WARN]')} ${msg}`);
	}

	public info(msg:string)
	{
		return console.log(`${chalk.blue('[INFO]')} ${msg}`);
	}

	public debug(msg:string)
	{
		return console.log(`${chalk.cyan('[DEBUG]')} ${msg}`);
	}

	public error(msg:string)
	{
		return console.log(`${chalk.red('[ERROR]')} ${msg}`);
	}

	public trace(msg:string)
	{
		return console.trace(`${chalk.cyan('[TRACE]')} ${msg}`);
	}
}

const $log = new Logger();
export { $log };
