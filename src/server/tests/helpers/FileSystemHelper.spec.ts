/**
 * Created by Justin on 9/2/16.
 */

process.env.NODE_ENV = 'test';
import { CONFIG } from '../../config/environment'
import { FileSystemHelper as fsHelper } from '../../helpers/FileSystemHelper'

describe('FileSystemHelper', () =>
{
	let srcDir = `${CONFIG.root}/src/server`,
		isDir = fsHelper.IsDirectory(srcDir);

	it('should show that /src is a directory and not a file', (done:Function) =>
	{
		expect(isDir).toBe(true);
		done();
	});

	it('should traverse /src/server/config/environment directory and return all files ', (done:Function) =>
	{
		let contents:string[] = fsHelper.GetDirectoryContents(`${srcDir}/config/environment`, false);
		expect(contents.length).toBeGreaterThan(4);
		done();
	});
});

