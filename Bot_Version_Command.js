{
  "name": "botversion",
  "permissions": "NONE",
  "restriction": "2",
  "_id": "mRMKE",
  "actions": [
    {
      "info": "0",
      "infoIndex": "1",
      "storage": "2",
      "varName": "botversion",
      "name": "Store Command Params"
    },
    {
      "title": "Bot Version Updated",
      "author": "",
      "color": "#ffffff",
      "timestamp": "true",
      "url": "",
      "authorIcon": "",
      "imageUrl": "",
      "thumbUrl": "",
      "storage": "1",
      "varName": "botversionupdated",
      "name": "Create Embed Message"
    },
    {
      "storage": "1",
      "varName": "botversionupdated",
      "message": "The bot version has been set to ${serverVars(\"botversion\")}!",
      "name": "Set Embed Description"
    },
    {
      "storage": "1",
      "varName": "botversionupdated",
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
