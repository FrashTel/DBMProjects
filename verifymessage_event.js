{
  "name": "verify message",
  "temp": "member",
  "event-type": "6",
  "_id": "TxLEk",
  "actions": [
    {
      "input": "*",
      "wordLength": "8",
      "storage": "2",
      "varName": "vcode",
      "name": "Randomize Letters"
    },
    {
      "title": "Please Verify!",
      "author": "",
      "color": "#FFFFFF",
      "timestamp": "true",
      "url": "",
      "authorIcon": "",
      "imageUrl": "",
      "thumbUrl": "",
      "storage": "1",
      "varName": "plsverify",
      "name": "Create Embed Message"
    },
    {
      "storage": "1",
      "varName": "plsverify",
      "message": "${tempVars(\"member\")} To get access to all of our Discord Server please\ndo !verify <code> in the verify channel!\n\nCode: ${serverVars(\"vcode\")}\n\nIf you have any problems contact (Discord User).\n\nAlso please note then when you verify yourself you are also agreeing to our rules.\n",
      "name": "Set Embed Description"
    },
    {
      "storage": "1",
      "varName": "plsverify",
      "fieldName": "Rules",
      "message": "INSERT RULES HERE!\n\n\n\nThanks!",
      "inline": "0",
      "name": "Add Embed Field"
    },
    {
      "storage": "1",
      "varName": "plsverify",
      "channel": "5",
      "varName2": "member",
      "name": "Send Embed Message"
    }
  ]
}
