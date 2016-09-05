/**
 * Created by Justin on 9/2/16.
 */
"use strict";
///<reference path="../../../typings/index.d.ts" />
///<reference path="../interfaces/extensions/Node.d.ts" />
const fs_1 = require('fs');
/**
 * @description Extends fs module functionality
 * @class
 */
class FileSystemHelper {
    /**
     * Traverse directory and return contents in array
     * @param root
     * @param recursive
     * @returns {any}
     * @constructor
     */
    static GetDirectoryContents(root, recursive) {
        // If arg passed to method is not a directory, return empty array
        if (!this.IsDirectory(root))
            return [];
        try {
            fs_1.readdirSync(root).forEach((rootItem) => {
                if (this.IsDirectory(`${root}/${rootItem}`) && recursive) {
                    this.GetDirectoryContents(`${root}/${rootItem}`, true);
                }
                else {
                    this.contents.push({
                        fileName: rootItem,
                        fullPath: `${root}/${rootItem}`
                    });
                }
            });
        }
        catch (e) {
            global.LogBug(e, 'FileSystemHelper', 'GetDirectoryContents', `Error retrieving contents of ${root}`);
            return [];
        }
        return this.contents;
    }
    static IsDirectory(item) {
        return fs_1.lstatSync(item).isDirectory();
    }
}
FileSystemHelper.contents = [];
exports.FileSystemHelper = FileSystemHelper;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlbHBlcnMvRmlsZVN5c3RlbUhlbHBlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7R0FFRzs7QUFFSCxtREFBbUQ7QUFDbkQsMERBQTBEO0FBRTFELHFCQUF1QyxJQU12QyxDQUFDLENBTjBDO0FBRTNDOzs7R0FHRztBQUNIO0lBSUM7Ozs7OztPQU1NO0lBQ04sT0FBYyxvQkFBb0IsQ0FBQyxJQUFXLEVBQUUsU0FBaUI7UUFFaEUsaUVBQWlFO1FBQ2pFLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUM7UUFFdkMsSUFDQSxDQUFDO1lBQ0EsZ0JBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxRQUFlO2dCQUV6QyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsSUFBSSxJQUFJLFFBQVEsRUFBRSxDQUFDLElBQUksU0FBUyxDQUFDLENBQ3pELENBQUM7b0JBQ0EsSUFBSSxDQUFDLG9CQUFvQixDQUFDLEdBQUcsSUFBSSxJQUFJLFFBQVEsRUFBRSxFQUFFLElBQUksQ0FBQyxDQUFDO2dCQUN4RCxDQUFDO2dCQUNELElBQUksQ0FDSixDQUFDO29CQUNBLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDO3dCQUNsQixRQUFRLEVBQUUsUUFBUTt3QkFDbEIsUUFBUSxFQUFFLEdBQUcsSUFBSSxJQUFJLFFBQVEsRUFBRTtxQkFDL0IsQ0FBQyxDQUFBO2dCQUNILENBQUM7WUFDRixDQUFDLENBQUMsQ0FBQztRQUNKLENBQ0E7UUFBQSxLQUFLLENBQUEsQ0FBQyxDQUFDLENBQUMsQ0FDUixDQUFDO1lBQ0EsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsa0JBQWtCLEVBQUUsc0JBQXNCLEVBQUUsZ0NBQWdDLElBQUksRUFBRSxDQUFDLENBQUM7WUFDckcsTUFBTSxDQUFDLEVBQUUsQ0FBQztRQUNYLENBQUM7UUFFRCxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN0QixDQUFDO0lBRUQsT0FBYyxXQUFXLENBQUMsSUFBVztRQUVwQyxNQUFNLENBQUMsY0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3RDLENBQUM7QUFDRixDQUFDO0FBNUNjLHlCQUFRLEdBQVMsRUFBRSxDQUFDO0FBRnRCLHdCQUFnQixtQkE4QzVCLENBQUEiLCJmaWxlIjoiaGVscGVycy9GaWxlU3lzdGVtSGVscGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDcmVhdGVkIGJ5IEp1c3RpbiBvbiA5LzIvMTYuXG4gKi9cblxuLy8vPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vLi4vdHlwaW5ncy9pbmRleC5kLnRzXCIgLz5cbi8vLzxyZWZlcmVuY2UgcGF0aD1cIi4uL2ludGVyZmFjZXMvZXh0ZW5zaW9ucy9Ob2RlLmQudHNcIiAvPlxuXG5pbXBvcnQgeyBsc3RhdFN5bmMsIHJlYWRkaXJTeW5jIH0gZnJvbSAnZnMnXG5cbi8qKlxuICogQGRlc2NyaXB0aW9uIEV4dGVuZHMgZnMgbW9kdWxlIGZ1bmN0aW9uYWxpdHlcbiAqIEBjbGFzc1xuICovXG5leHBvcnQgY2xhc3MgRmlsZVN5c3RlbUhlbHBlclxue1xuXHRwdWJsaWMgc3RhdGljIGNvbnRlbnRzOmFueVtdID0gW107XG5cblx0LyoqXG5cdCAqIFRyYXZlcnNlIGRpcmVjdG9yeSBhbmQgcmV0dXJuIGNvbnRlbnRzIGluIGFycmF5XG5cdCAqIEBwYXJhbSByb290XG5cdCAqIEBwYXJhbSByZWN1cnNpdmVcblx0ICogQHJldHVybnMge2FueX1cbiAgICAgKiBAY29uc3RydWN0b3JcbiAgICAgKi9cblx0cHVibGljIHN0YXRpYyBHZXREaXJlY3RvcnlDb250ZW50cyhyb290OnN0cmluZywgcmVjdXJzaXZlOmJvb2xlYW4pOnN0cmluZ1tdXG5cdHtcblx0XHQvLyBJZiBhcmcgcGFzc2VkIHRvIG1ldGhvZCBpcyBub3QgYSBkaXJlY3RvcnksIHJldHVybiBlbXB0eSBhcnJheVxuXHRcdGlmICghdGhpcy5Jc0RpcmVjdG9yeShyb290KSkgcmV0dXJuIFtdO1xuXG5cdFx0dHJ5XG5cdFx0e1xuXHRcdFx0cmVhZGRpclN5bmMocm9vdCkuZm9yRWFjaCgocm9vdEl0ZW06c3RyaW5nKSA9PlxuXHRcdFx0e1xuXHRcdFx0XHRpZiAodGhpcy5Jc0RpcmVjdG9yeShgJHtyb290fS8ke3Jvb3RJdGVtfWApICYmIHJlY3Vyc2l2ZSlcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHRoaXMuR2V0RGlyZWN0b3J5Q29udGVudHMoYCR7cm9vdH0vJHtyb290SXRlbX1gLCB0cnVlKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRlbHNlXG5cdFx0XHRcdHtcblx0XHRcdFx0XHR0aGlzLmNvbnRlbnRzLnB1c2goe1xuXHRcdFx0XHRcdFx0ZmlsZU5hbWU6IHJvb3RJdGVtLFxuXHRcdFx0XHRcdFx0ZnVsbFBhdGg6IGAke3Jvb3R9LyR7cm9vdEl0ZW19YFxuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdH1cblx0XHRjYXRjaChlKVxuXHRcdHtcblx0XHRcdGdsb2JhbC5Mb2dCdWcoZSwgJ0ZpbGVTeXN0ZW1IZWxwZXInLCAnR2V0RGlyZWN0b3J5Q29udGVudHMnLCBgRXJyb3IgcmV0cmlldmluZyBjb250ZW50cyBvZiAke3Jvb3R9YCk7XG5cdFx0XHRyZXR1cm4gW107XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRoaXMuY29udGVudHM7XG5cdH1cblxuXHRwdWJsaWMgc3RhdGljIElzRGlyZWN0b3J5KGl0ZW06c3RyaW5nKTpib29sZWFuXG5cdHtcblx0XHRyZXR1cm4gbHN0YXRTeW5jKGl0ZW0pLmlzRGlyZWN0b3J5KCk7XG5cdH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
