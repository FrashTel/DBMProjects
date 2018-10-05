{
  "name": "botname",
  "permissions": "NONE",
  "restriction": "2",
  "_id": "LBfMf",
  "actions": [
    {
      "info": "0",
      "infoIndex": "1",
      "storage": "2",
      "varName": "botname",
      "name": "Store Command Params"
    },
    {
      "title": "Bot Name Updated",
      "author": "",
      "color": "#ffffff",
      "timestamp": "true",
      "url": "",
      "authorIcon": "",
      "imageUrl": "",
      "thumbUrl": "",
      "storage": "1",
      "varName": "botnameupdated",
      "name": "Create Embed Message"
    },
    {
      "storage": "1",
      "varName": "botnameupdated",
      "message": "The bot name has been set to ${serverVars(\"botname\")}!",
      "name": "Set Embed Description"
    },
    {
      "storage": "1",
      "varName": "botnameupdated",
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
