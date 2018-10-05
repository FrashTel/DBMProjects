{
  "name": "bichannel",
  "permissions": "NONE",
  "restriction": "2",
  "_id": "Lehoe",
  "actions": [
    {
      "info": "4",
      "infoIndex": "1",
      "storage": "2",
      "varName": "bichannel",
      "name": "Store Command Params"
    },
    {
      "title": "Bot Channel Updated",
      "author": "",
      "color": "#ffffff",
      "timestamp": "true",
      "url": "",
      "authorIcon": "",
      "imageUrl": "",
      "thumbUrl": "",
      "storage": "1",
      "varName": "botchannelupdated",
      "name": "Create Embed Message"
    },
    {
      "storage": "1",
      "varName": "botchannelupdated",
      "message": "The bot channel has been set to ${serverVars(\"bichannel\")}!",
      "name": "Set Embed Description"
    },
    {
      "storage": "1",
      "varName": "botchannelupdated",
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
