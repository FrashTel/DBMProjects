{
  "name": "suggest",
  "permissions": "NONE",
  "restriction": "1",
  "_id": "SclZI",
  "actions": [
    {
      "info": "1",
      "infoIndex": "1",
      "storage": "1",
      "varName": "suggestions",
      "name": "Store Command Params"
    },
    {
      "info": "1",
      "find": "suggestions",
      "storage": "1",
      "varName": "suggestchannel",
      "name": "Find Channel"
    },
    {
      "member": "1",
      "varName": "",
      "info": "16",
      "storage": "1",
      "varName2": "memberavatar",
      "name": "Store Member Info"
    },
    {
      "member": "1",
      "varName": "",
      "info": "2",
      "storage": "1",
      "varName2": "membername",
      "name": "Store Member Info"
    },
    {
      "title": "Suggestion Recorded",
      "author": "",
      "color": "#FFFFFF",
      "timestamp": "true",
      "url": "",
      "authorIcon": "",
      "imageUrl": "",
      "thumbUrl": "",
      "storage": "1",
      "varName": "sendsuggestion",
      "name": "Create Embed Message"
    },
    {
      "storage": "1",
      "varName": "sendsuggestion",
      "message": "${tempVars(\"suggestions\")}",
      "name": "Set Embed Description"
    },
    {
      "storage": "1",
      "varName": "sendsuggestion",
      "message": "${tempVars(\"membername\")}",
      "footerIcon": "${tempVars(\"memberavatar\")}",
      "name": "Set Embed Footer"
    },
    {
      "storage": "1",
      "varName": "sendsuggestion",
      "channel": "5",
      "varName2": "suggestchannel",
      "name": "Send Embed Message"
    },
    {
      "title": "Suggestion Recorded",
      "author": "",
      "color": "#FFFFFF",
      "timestamp": "true",
      "url": "",
      "authorIcon": "",
      "imageUrl": "",
      "thumbUrl": "",
      "storage": "1",
      "varName": "suggestionsent",
      "name": "Create Embed Message"
    },
    {
      "storage": "1",
      "varName": "suggestionsent",
      "message": "Your suggestion has been recieved!\n\n${tempVars(\"suggestions\")}\n\nThanks!",
      "name": "Set Embed Description"
    },
    {
      "storage": "1",
      "varName": "suggestionsent",
      "message": "${tempVars(\"membername\")}",
      "footerIcon": "${tempVars(\"memberavatar\")}",
      "name": "Set Embed Footer"
    },
    {
      "storage": "1",
      "varName": "suggestionsent",
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
