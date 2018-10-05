{
  "name": "botsupport",
  "permissions": "NONE",
  "restriction": "2",
  "_id": "GemAB",
  "actions": [
    {
      "info": "0",
      "infoIndex": "1",
      "storage": "2",
      "varName": "botsupport",
      "name": "Store Command Params"
    },
    {
      "title": "Bot Support Link Updated",
      "author": "",
      "color": "#ffffff",
      "timestamp": "true",
      "url": "",
      "authorIcon": "",
      "imageUrl": "",
      "thumbUrl": "",
      "storage": "1",
      "varName": "botsupportupdated",
      "name": "Create Embed Message"
    },
    {
      "storage": "1",
      "varName": "botsupportupdated",
      "message": "The bot support link has been set to ${serverVars(\"botsupport\")}!",
      "name": "Set Embed Description"
    },
    {
      "storage": "1",
      "varName": "botsupportupdated",
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
