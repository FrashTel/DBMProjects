{
  "name": "verify",
  "permissions": "NONE",
  "restriction": "1",
  "_id": "nsqTd",
  "actions": [
    {
      "info": "1",
      "find": "Member",
      "storage": "1",
      "varName": "role",
      "name": "Find Role"
    },
    {
      "info": "0",
      "infoIndex": "1",
      "storage": "1",
      "varName": "usercode",
      "name": "Store Command Params"
    },
    {
      "storage": "1",
      "varName": "usercode",
      "comparison": "5",
      "value": "serverVars(\"vcode\")",
      "iftrue": "2",
      "iftrueVal": "12",
      "iffalse": "0",
      "iffalseVal": "",
      "name": "Check Variable"
    },
    {
      "title": "Verify Code Incorrect",
      "author": "",
      "color": "#FFFFFF",
      "timestamp": "true",
      "url": "",
      "authorIcon": "",
      "imageUrl": "",
      "thumbUrl": "",
      "storage": "1",
      "varName": "wrongcode",
      "name": "Create Embed Message"
    },
    {
      "storage": "1",
      "varName": "wrongcode",
      "message": "${member} sorry but that is the incorrect code!",
      "name": "Set Embed Description"
    },
    {
      "storage": "1",
      "varName": "wrongcode",
      "channel": "0",
      "varName2": "",
      "varName3": "wrongcodedel",
      "storage3": "1",
      "name": "Send Embed Message MOD"
    },
    {
      "storage": "1",
      "varName": "wrongcode",
      "channel": "1",
      "varName2": "",
      "name": "Send Embed Message"
    },
    {
      "storage": "0",
      "varName": "",
      "name": "Delete Message"
    },
    {
      "time": "10",
      "measurement": "1",
      "name": "Wait"
    },
    {
      "storage": "1",
      "varName": "wrongcodedel",
      "name": "Delete Message"
    },
    {
      "name": "End Action Sequence"
    },
    {
      "member": "1",
      "varName2": "",
      "role": "3",
      "varName": "role",
      "name": "Add Member Role"
    },
    {
      "title": "Verify Complete",
      "author": "",
      "color": "#FFFFFF",
      "timestamp": "true",
      "url": "",
      "authorIcon": "",
      "imageUrl": "",
      "thumbUrl": "",
      "storage": "1",
      "varName": "verifycomplete",
      "name": "Create Embed Message"
    },
    {
      "storage": "1",
      "varName": "verifycomplete",
      "message": "You have now been verified! You now have access to all of our channels.\n\nThanks!",
      "name": "Set Embed Description"
    },
    {
      "storage": "1",
      "varName": "verifycomplete",
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
