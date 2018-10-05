{
  "name": "botowner",
  "permissions": "NONE",
  "restriction": "2",
  "_id": "ZWafR",
  "actions": [
    {
      "info": "0",
      "infoIndex": "1",
      "storage": "2",
      "varName": "botowner",
      "name": "Store Command Params"
    },
    {
      "title": "Bot Owner Updated",
      "author": "",
      "color": "#ffffff",
      "timestamp": "true",
      "url": "",
      "authorIcon": "",
      "imageUrl": "",
      "thumbUrl": "",
      "storage": "1",
      "varName": "botownerupdated",
      "name": "Create Embed Message"
    },
    {
      "storage": "1",
      "varName": "botownerupdated",
      "message": "The bot owner has been set to ${serverVars(\"botowner\")}!",
      "name": "Set Embed Description"
    },
    {
      "storage": "1",
      "varName": "botownerupdated",
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
