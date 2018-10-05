{
  "name": "bisetup",
  "permissions": "NONE",
  "restriction": "2",
  "_id": "nVBMn",
  "actions": [
    {
      "info": "0",
      "infoIndex": "1",
      "storage": "2",
      "varName": "botname",
      "name": "Store Command Params"
    },
    {
      "info": "0",
      "infoIndex": "2",
      "storage": "2",
      "varName": "botversion",
      "name": "Store Command Params"
    },
    {
      "info": "0",
      "infoIndex": "3",
      "storage": "2",
      "varName": "botowner",
      "name": "Store Command Params"
    },
    {
      "info": "0",
      "infoIndex": "4",
      "storage": "2",
      "varName": "botsupport",
      "name": "Store Command Params"
    },
    {
      "info": "4",
      "infoIndex": "1",
      "storage": "2",
      "varName": "bichannel",
      "name": "Store Command Params"
    },
    {
      "info": "1",
      "infoIndex": "6",
      "storage": "2",
      "varName": "botdescrip",
      "name": "Store Command Params"
    },
    {
      "title": "Bot Setup Completed",
      "author": "",
      "color": "#ffffff",
      "timestamp": "true",
      "url": "",
      "authorIcon": "",
      "imageUrl": "",
      "thumbUrl": "",
      "storage": "1",
      "varName": "botsetup",
      "name": "Create Embed Message"
    },
    {
      "storage": "1",
      "varName": "botsetup",
      "message": "The Bot Information System has been setup!\n\nBot Name: ${serverVars(\"botname\")}\n\nBot Description: ${serverVars(\"botdescrip\")}\n\nBot Version: ${serverVars(\"botversion\")}\n\nBot Owner: ${serverVars(\"botowner\")}\n\nBot Support Link: ${serverVars(\"botsupport\")}\n\nBot Embed Channel: ${serverVars(\"bichannel\")}\n\nPlease note this will look incorrect if you do not input all variables.",
      "name": "Set Embed Description"
    },
    {
      "storage": "1",
      "varName": "botsetup",
      "channel": "1",
      "varName2": "",
      "name": "Send Embed Message"
    },
    {
      "storage": "0",
      "varName": "",
      "name": "Delete Message"
    }
  ]
}
