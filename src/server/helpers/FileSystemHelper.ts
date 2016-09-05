/**
 * Created by Justin on 9/2/16.
 */

///<reference path="../../../typings/index.d.ts" />
///<reference path="../interfaces/extensions/Node.d.ts" />

import { lstatSync, readdirSync } from 'fs'

/**
 * @description Extends fs module functionality
 * @class
 */
export class FileSystemHelper
{
	public static contents:any[] = [];

	/**
	 * Traverse directory and return contents in array
	 * @param root
	 * @param recursive
	 * @returns {any}
     * @constructor
     */
	public static GetDirectoryContents(root:string, recursive:boolean):string[]
	{
		// If arg passed to method is not a directory, return empty array
		if (!this.IsDirectory(root)) return [];

		try
		{
			readdirSync(root).forEach((rootItem:string) =>
			{
				if (this.IsDirectory(`${root}/${rootItem}`) && recursive)
				{
					this.GetDirectoryContents(`${root}/${rootItem}`, true);
				}
				else
				{
					this.contents.push({
						fileName: rootItem,
						fullPath: `${root}/${rootItem}`
					})
				}
			});
		}
		catch(e)
		{
			global.LogBug(e, 'FileSystemHelper', 'GetDirectoryContents', `Error retrieving contents of ${root}`);
			return [];
		}

		return this.contents;
	}

	public static IsDirectory(item:string):boolean
	{
		return lstatSync(item).isDirectory();
	}
}
