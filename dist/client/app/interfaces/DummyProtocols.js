/**
 * Created by Justin on 9/12/16.
 */
"use strict";
module.exports = {
    "_id": "57b779105816ca9228fabca3",
    "name": "Auto Titrator Commands",
    "type": "custom",
    "data": {
        "documentation": "",
        "device": [
            {
                "name": "Off",
                "receive": "",
                "send": "OFF",
                "description": "Turns the display off."
            },
            {
                "name": "On",
                "receive": "\r\n???",
                "send": "ON",
                "description": "Turns the display on."
            },
            {
                "name": "tare",
                "receive": "PT,+0004.000  g",
                "send": "PT:*****.*  g",
                "description": "Changes the tare weight. The unit added is the current weighing unit in A&D standard format."
            },
            {
                "name": "Get Model",
                "receive": "TN,   FX-300i",
                "send": "?TN",
                "description": "Requests the model name."
            },
            {
                "name": "Get Serial Number",
                "receive": "SN,15603968",
                "send": "?SN",
                "description": "Requests the serial number."
            },
            {
                "name": "Get ID Number",
                "receive": "ID,0000000",
                "send": "?ID",
                "description": "Requests the ID number."
            },
            {
                "name": "Get Tare Weight",
                "receive": "PT,+0000.000  g",
                "send": "?PT",
                "description": "Requests the tare weight."
            }
        ],
        "button": [
            {
                "name": "Start-Up Procedure",
                "type": "success",
                "receive": "\r\n",
                "send": "SP",
                "description": "Start up auto titration procedure"
            },
            {
                "name": "Shut-Down Procedure",
                "type": "danger",
                "receive": "\r\n",
                "send": "SD",
                "description": "Shut down auto titration procedure"
            },
            {
                "name": "Begin Run",
                "type": "success",
                "receive": "\r\n",
                "send": "BR",
                "description": "Begin test run"
            },
            {
                "name": "Re-Zero",
                "type": "info",
                "receive": "\r\n",
                "send": "R",
                "description": "Same as the RE-ZERO key"
            },
            {
                "name": "Calibrate",
                "type": "info",
                "receive": "\r\n",
                "send": "CAL",
                "description": "Same as the CAL key"
            },
            {
                "name": "Mode",
                "type": "info",
                "receive": "\r\n",
                "send": "U",
                "description": "Same as the MODE key"
            },
            {
                "name": "Sample",
                "type": "info",
                "receive": "\r\n",
                "send": "SMP",
                "description": "Same as the SAMPLE key"
            },
            {
                "name": "Print",
                "type": "default",
                "receive": "\r\n      53.961 g",
                "send": "PRT",
                "description": "Same as the PRINT key"
            },
            {
                "name": "On / Off",
                "type": "success",
                "receive": "|\r\n",
                "send": "P",
                "description": "Same as the ON:OFF key"
            }
        ],
        "other": [
            {
                "name": "Cancel",
                "receive": "\r\n??? or some other non-printable char???",
                "send": "C",
                "description": "Cancels the S or SIR command."
            }
        ],
        "end_char": "\r\n"
    },
    "tags": [
        "A&D",
        "FX-i",
        "FZ-i",
        "commands",
        "serial",
        "A&D Weighing",
        "scale"
    ]
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9pbnRlcmZhY2VzL0R1bW15UHJvdG9jb2xzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztHQUVHOztBQUlILGlCQUFvQjtJQUNuQixLQUFLLEVBQUcsMEJBQTBCO0lBQ2xDLE1BQU0sRUFBRyx3QkFBd0I7SUFDakMsTUFBTSxFQUFHLFFBQVE7SUFDakIsTUFBTSxFQUFHO1FBQ1IsZUFBZSxFQUFHLEVBQUU7UUFDcEIsUUFBUSxFQUFHO1lBQ1Y7Z0JBQ0MsTUFBTSxFQUFFLEtBQUs7Z0JBQ2IsU0FBUyxFQUFHLEVBQUU7Z0JBQ2QsTUFBTSxFQUFHLEtBQUs7Z0JBQ2QsYUFBYSxFQUFHLHdCQUF3QjthQUN4QztZQUNEO2dCQUNDLE1BQU0sRUFBRSxJQUFJO2dCQUNaLFNBQVMsRUFBRyxTQUFTO2dCQUNyQixNQUFNLEVBQUcsSUFBSTtnQkFDYixhQUFhLEVBQUcsdUJBQXVCO2FBQ3ZDO1lBQ0Q7Z0JBQ0MsTUFBTSxFQUFFLE1BQU07Z0JBQ2QsU0FBUyxFQUFHLGlCQUFpQjtnQkFDN0IsTUFBTSxFQUFHLGVBQWU7Z0JBQ3hCLGFBQWEsRUFBRyw4RkFBOEY7YUFDOUc7WUFDRDtnQkFDQyxNQUFNLEVBQUUsV0FBVztnQkFDbkIsU0FBUyxFQUFHLGVBQWU7Z0JBQzNCLE1BQU0sRUFBRyxLQUFLO2dCQUNkLGFBQWEsRUFBRywwQkFBMEI7YUFDMUM7WUFDRDtnQkFDQyxNQUFNLEVBQUUsbUJBQW1CO2dCQUMzQixTQUFTLEVBQUcsYUFBYTtnQkFDekIsTUFBTSxFQUFHLEtBQUs7Z0JBQ2QsYUFBYSxFQUFHLDZCQUE2QjthQUM3QztZQUNEO2dCQUNDLE1BQU0sRUFBRSxlQUFlO2dCQUN2QixTQUFTLEVBQUcsWUFBWTtnQkFDeEIsTUFBTSxFQUFHLEtBQUs7Z0JBQ2QsYUFBYSxFQUFHLHlCQUF5QjthQUN6QztZQUNEO2dCQUNDLE1BQU0sRUFBRSxpQkFBaUI7Z0JBQ3pCLFNBQVMsRUFBRyxpQkFBaUI7Z0JBQzdCLE1BQU0sRUFBRyxLQUFLO2dCQUNkLGFBQWEsRUFBRywyQkFBMkI7YUFDM0M7U0FDRDtRQUNELFFBQVEsRUFBRztZQUNWO2dCQUNDLE1BQU0sRUFBRSxvQkFBb0I7Z0JBQzVCLE1BQU0sRUFBRSxTQUFTO2dCQUNqQixTQUFTLEVBQUUsTUFBTTtnQkFDakIsTUFBTSxFQUFFLElBQUk7Z0JBQ1osYUFBYSxFQUFFLG1DQUFtQzthQUNsRDtZQUNEO2dCQUNDLE1BQU0sRUFBRSxxQkFBcUI7Z0JBQzdCLE1BQU0sRUFBRSxRQUFRO2dCQUNoQixTQUFTLEVBQUUsTUFBTTtnQkFDakIsTUFBTSxFQUFFLElBQUk7Z0JBQ1osYUFBYSxFQUFFLG9DQUFvQzthQUNuRDtZQUNEO2dCQUNDLE1BQU0sRUFBRSxXQUFXO2dCQUNuQixNQUFNLEVBQUUsU0FBUztnQkFDakIsU0FBUyxFQUFFLE1BQU07Z0JBQ2pCLE1BQU0sRUFBRSxJQUFJO2dCQUNaLGFBQWEsRUFBRSxnQkFBZ0I7YUFDL0I7WUFDRDtnQkFDQyxNQUFNLEVBQUUsU0FBUztnQkFDakIsTUFBTSxFQUFFLE1BQU07Z0JBQ2QsU0FBUyxFQUFHLE1BQU07Z0JBQ2xCLE1BQU0sRUFBRyxHQUFHO2dCQUNaLGFBQWEsRUFBRyx5QkFBeUI7YUFDekM7WUFDRDtnQkFDQyxNQUFNLEVBQUUsV0FBVztnQkFDbkIsTUFBTSxFQUFFLE1BQU07Z0JBQ2QsU0FBUyxFQUFHLE1BQU07Z0JBQ2xCLE1BQU0sRUFBRyxLQUFLO2dCQUNkLGFBQWEsRUFBRyxxQkFBcUI7YUFDckM7WUFDRDtnQkFDQyxNQUFNLEVBQUUsTUFBTTtnQkFDZCxNQUFNLEVBQUUsTUFBTTtnQkFDZCxTQUFTLEVBQUcsTUFBTTtnQkFDbEIsTUFBTSxFQUFHLEdBQUc7Z0JBQ1osYUFBYSxFQUFHLHNCQUFzQjthQUN0QztZQUNEO2dCQUNDLE1BQU0sRUFBRSxRQUFRO2dCQUNoQixNQUFNLEVBQUUsTUFBTTtnQkFDZCxTQUFTLEVBQUcsTUFBTTtnQkFDbEIsTUFBTSxFQUFHLEtBQUs7Z0JBQ2QsYUFBYSxFQUFHLHdCQUF3QjthQUN4QztZQUNEO2dCQUNDLE1BQU0sRUFBRSxPQUFPO2dCQUNmLE1BQU0sRUFBRSxTQUFTO2dCQUNqQixTQUFTLEVBQUcsb0JBQW9CO2dCQUNoQyxNQUFNLEVBQUcsS0FBSztnQkFDZCxhQUFhLEVBQUcsdUJBQXVCO2FBQ3ZDO1lBQ0Q7Z0JBQ0MsTUFBTSxFQUFFLFVBQVU7Z0JBQ2xCLE1BQU0sRUFBRSxTQUFTO2dCQUNqQixTQUFTLEVBQUcsT0FBTztnQkFDbkIsTUFBTSxFQUFHLEdBQUc7Z0JBQ1osYUFBYSxFQUFHLHdCQUF3QjthQUN4QztTQUNEO1FBQ0QsT0FBTyxFQUFHO1lBQ1Q7Z0JBQ0MsTUFBTSxFQUFFLFFBQVE7Z0JBQ2hCLFNBQVMsRUFBRyw2Q0FBNkM7Z0JBQ3pELE1BQU0sRUFBRyxHQUFHO2dCQUNaLGFBQWEsRUFBRywrQkFBK0I7YUFDL0M7U0FDRDtRQUNELFVBQVUsRUFBRyxNQUFNO0tBQ25CO0lBQ0QsTUFBTSxFQUFHO1FBQ1IsS0FBSztRQUNMLE1BQU07UUFDTixNQUFNO1FBQ04sVUFBVTtRQUNWLFFBQVE7UUFDUixjQUFjO1FBQ2QsT0FBTztLQUNQO0NBQ0QsQ0FBQyIsImZpbGUiOiJhcHAvaW50ZXJmYWNlcy9EdW1teVByb3RvY29scy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ3JlYXRlZCBieSBKdXN0aW4gb24gOS8xMi8xNi5cbiAqL1xuXG5pbXBvcnQgeyBJUHJvdG9jb2wgfSBmcm9tICcuLydcblxuZXhwb3J0ID0gPElQcm90b2NvbD57XG5cdFwiX2lkXCIgOiBcIjU3Yjc3OTEwNTgxNmNhOTIyOGZhYmNhM1wiLFxuXHRcIm5hbWVcIiA6IFwiQXV0byBUaXRyYXRvciBDb21tYW5kc1wiLFxuXHRcInR5cGVcIiA6IFwiY3VzdG9tXCIsXG5cdFwiZGF0YVwiIDoge1xuXHRcdFwiZG9jdW1lbnRhdGlvblwiIDogXCJcIixcblx0XHRcImRldmljZVwiIDogW1xuXHRcdFx0e1xuXHRcdFx0XHRcIm5hbWVcIjogXCJPZmZcIixcblx0XHRcdFx0XCJyZWNlaXZlXCIgOiBcIlwiLFxuXHRcdFx0XHRcInNlbmRcIiA6IFwiT0ZGXCIsXG5cdFx0XHRcdFwiZGVzY3JpcHRpb25cIiA6IFwiVHVybnMgdGhlIGRpc3BsYXkgb2ZmLlwiXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRcIm5hbWVcIjogXCJPblwiLFxuXHRcdFx0XHRcInJlY2VpdmVcIiA6IFwiXFxyXFxuPz8/XCIsXG5cdFx0XHRcdFwic2VuZFwiIDogXCJPTlwiLFxuXHRcdFx0XHRcImRlc2NyaXB0aW9uXCIgOiBcIlR1cm5zIHRoZSBkaXNwbGF5IG9uLlwiXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRcIm5hbWVcIjogXCJ0YXJlXCIsXG5cdFx0XHRcdFwicmVjZWl2ZVwiIDogXCJQVCwrMDAwNC4wMDAgIGdcIixcblx0XHRcdFx0XCJzZW5kXCIgOiBcIlBUOioqKioqLiogIGdcIixcblx0XHRcdFx0XCJkZXNjcmlwdGlvblwiIDogXCJDaGFuZ2VzIHRoZSB0YXJlIHdlaWdodC4gVGhlIHVuaXQgYWRkZWQgaXMgdGhlIGN1cnJlbnQgd2VpZ2hpbmcgdW5pdCBpbiBBJkQgc3RhbmRhcmQgZm9ybWF0LlwiXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRcIm5hbWVcIjogXCJHZXQgTW9kZWxcIixcblx0XHRcdFx0XCJyZWNlaXZlXCIgOiBcIlROLCAgIEZYLTMwMGlcIixcblx0XHRcdFx0XCJzZW5kXCIgOiBcIj9UTlwiLFxuXHRcdFx0XHRcImRlc2NyaXB0aW9uXCIgOiBcIlJlcXVlc3RzIHRoZSBtb2RlbCBuYW1lLlwiXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRcIm5hbWVcIjogXCJHZXQgU2VyaWFsIE51bWJlclwiLFxuXHRcdFx0XHRcInJlY2VpdmVcIiA6IFwiU04sMTU2MDM5NjhcIixcblx0XHRcdFx0XCJzZW5kXCIgOiBcIj9TTlwiLFxuXHRcdFx0XHRcImRlc2NyaXB0aW9uXCIgOiBcIlJlcXVlc3RzIHRoZSBzZXJpYWwgbnVtYmVyLlwiXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRcIm5hbWVcIjogXCJHZXQgSUQgTnVtYmVyXCIsXG5cdFx0XHRcdFwicmVjZWl2ZVwiIDogXCJJRCwwMDAwMDAwXCIsXG5cdFx0XHRcdFwic2VuZFwiIDogXCI/SURcIixcblx0XHRcdFx0XCJkZXNjcmlwdGlvblwiIDogXCJSZXF1ZXN0cyB0aGUgSUQgbnVtYmVyLlwiXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRcIm5hbWVcIjogXCJHZXQgVGFyZSBXZWlnaHRcIixcblx0XHRcdFx0XCJyZWNlaXZlXCIgOiBcIlBULCswMDAwLjAwMCAgZ1wiLFxuXHRcdFx0XHRcInNlbmRcIiA6IFwiP1BUXCIsXG5cdFx0XHRcdFwiZGVzY3JpcHRpb25cIiA6IFwiUmVxdWVzdHMgdGhlIHRhcmUgd2VpZ2h0LlwiXG5cdFx0XHR9XG5cdFx0XSxcblx0XHRcImJ1dHRvblwiIDogW1xuXHRcdFx0e1xuXHRcdFx0XHRcIm5hbWVcIjogXCJTdGFydC1VcCBQcm9jZWR1cmVcIixcblx0XHRcdFx0XCJ0eXBlXCI6IFwic3VjY2Vzc1wiLFxuXHRcdFx0XHRcInJlY2VpdmVcIjogXCJcXHJcXG5cIixcblx0XHRcdFx0XCJzZW5kXCI6IFwiU1BcIixcblx0XHRcdFx0XCJkZXNjcmlwdGlvblwiOiBcIlN0YXJ0IHVwIGF1dG8gdGl0cmF0aW9uIHByb2NlZHVyZVwiXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRcIm5hbWVcIjogXCJTaHV0LURvd24gUHJvY2VkdXJlXCIsXG5cdFx0XHRcdFwidHlwZVwiOiBcImRhbmdlclwiLFxuXHRcdFx0XHRcInJlY2VpdmVcIjogXCJcXHJcXG5cIixcblx0XHRcdFx0XCJzZW5kXCI6IFwiU0RcIixcblx0XHRcdFx0XCJkZXNjcmlwdGlvblwiOiBcIlNodXQgZG93biBhdXRvIHRpdHJhdGlvbiBwcm9jZWR1cmVcIlxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0XCJuYW1lXCI6IFwiQmVnaW4gUnVuXCIsXG5cdFx0XHRcdFwidHlwZVwiOiBcInN1Y2Nlc3NcIixcblx0XHRcdFx0XCJyZWNlaXZlXCI6IFwiXFxyXFxuXCIsXG5cdFx0XHRcdFwic2VuZFwiOiBcIkJSXCIsXG5cdFx0XHRcdFwiZGVzY3JpcHRpb25cIjogXCJCZWdpbiB0ZXN0IHJ1blwiXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRcIm5hbWVcIjogXCJSZS1aZXJvXCIsXG5cdFx0XHRcdFwidHlwZVwiOiBcImluZm9cIixcblx0XHRcdFx0XCJyZWNlaXZlXCIgOiBcIlxcclxcblwiLFxuXHRcdFx0XHRcInNlbmRcIiA6IFwiUlwiLFxuXHRcdFx0XHRcImRlc2NyaXB0aW9uXCIgOiBcIlNhbWUgYXMgdGhlIFJFLVpFUk8ga2V5XCJcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdFwibmFtZVwiOiBcIkNhbGlicmF0ZVwiLFxuXHRcdFx0XHRcInR5cGVcIjogXCJpbmZvXCIsXG5cdFx0XHRcdFwicmVjZWl2ZVwiIDogXCJcXHJcXG5cIixcblx0XHRcdFx0XCJzZW5kXCIgOiBcIkNBTFwiLFxuXHRcdFx0XHRcImRlc2NyaXB0aW9uXCIgOiBcIlNhbWUgYXMgdGhlIENBTCBrZXlcIlxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0XCJuYW1lXCI6IFwiTW9kZVwiLFxuXHRcdFx0XHRcInR5cGVcIjogXCJpbmZvXCIsXG5cdFx0XHRcdFwicmVjZWl2ZVwiIDogXCJcXHJcXG5cIixcblx0XHRcdFx0XCJzZW5kXCIgOiBcIlVcIixcblx0XHRcdFx0XCJkZXNjcmlwdGlvblwiIDogXCJTYW1lIGFzIHRoZSBNT0RFIGtleVwiXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRcIm5hbWVcIjogXCJTYW1wbGVcIixcblx0XHRcdFx0XCJ0eXBlXCI6IFwiaW5mb1wiLFxuXHRcdFx0XHRcInJlY2VpdmVcIiA6IFwiXFxyXFxuXCIsXG5cdFx0XHRcdFwic2VuZFwiIDogXCJTTVBcIixcblx0XHRcdFx0XCJkZXNjcmlwdGlvblwiIDogXCJTYW1lIGFzIHRoZSBTQU1QTEUga2V5XCJcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdFwibmFtZVwiOiBcIlByaW50XCIsXG5cdFx0XHRcdFwidHlwZVwiOiBcImRlZmF1bHRcIixcblx0XHRcdFx0XCJyZWNlaXZlXCIgOiBcIlxcclxcbiAgICAgIDUzLjk2MSBnXCIsXG5cdFx0XHRcdFwic2VuZFwiIDogXCJQUlRcIixcblx0XHRcdFx0XCJkZXNjcmlwdGlvblwiIDogXCJTYW1lIGFzIHRoZSBQUklOVCBrZXlcIlxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0XCJuYW1lXCI6IFwiT24gLyBPZmZcIixcblx0XHRcdFx0XCJ0eXBlXCI6IFwic3VjY2Vzc1wiLFxuXHRcdFx0XHRcInJlY2VpdmVcIiA6IFwifFxcclxcblwiLFxuXHRcdFx0XHRcInNlbmRcIiA6IFwiUFwiLFxuXHRcdFx0XHRcImRlc2NyaXB0aW9uXCIgOiBcIlNhbWUgYXMgdGhlIE9OOk9GRiBrZXlcIlxuXHRcdFx0fVxuXHRcdF0sXG5cdFx0XCJvdGhlclwiIDogW1xuXHRcdFx0e1xuXHRcdFx0XHRcIm5hbWVcIjogXCJDYW5jZWxcIixcblx0XHRcdFx0XCJyZWNlaXZlXCIgOiBcIlxcclxcbj8/PyBvciBzb21lIG90aGVyIG5vbi1wcmludGFibGUgY2hhcj8/P1wiLFxuXHRcdFx0XHRcInNlbmRcIiA6IFwiQ1wiLFxuXHRcdFx0XHRcImRlc2NyaXB0aW9uXCIgOiBcIkNhbmNlbHMgdGhlIFMgb3IgU0lSIGNvbW1hbmQuXCJcblx0XHRcdH1cblx0XHRdLFxuXHRcdFwiZW5kX2NoYXJcIiA6IFwiXFxyXFxuXCJcblx0fSxcblx0XCJ0YWdzXCIgOiBbXG5cdFx0XCJBJkRcIixcblx0XHRcIkZYLWlcIixcblx0XHRcIkZaLWlcIixcblx0XHRcImNvbW1hbmRzXCIsXG5cdFx0XCJzZXJpYWxcIixcblx0XHRcIkEmRCBXZWlnaGluZ1wiLFxuXHRcdFwic2NhbGVcIlxuXHRdXG59O1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
