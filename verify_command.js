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
      "info": "1",
      "find": "vrlogs",
      "storage": "1",
      "varName": "vrlogs",
      "name": "Find Channel"
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
      "iftrueVal": "13",
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
      "title": "Rules",
      "author": "",
      "color": "#FFFFFF",
      "timestamp": "true",
      "url": "",
      "authorIcon": "",
      "imageUrl": "",
      "thumbUrl": "",
      "storage": "1",
      "varName": "rulesembed",
      "name": "Create Embed Message"
    },
    {
      "storage": "1",
      "varName": "",
      "message": "Now that you have verified yourself can you please react to this \nmessgae with a :thumbsup: so we know you have been made aware and agree to our rules. \n\n",
      "name": "Set Embed Description"
    },
    {
      "storage": "1",
      "varName": "rulesembed",
      "fieldName": "Rules",
      "message": "Rules\n\n:red_circle: No racism, homophobia, threats, or suicide jokes at anytime\n\n:red_circle: No spamming at anytime\n\n:red_circle: Do NOT use curse words excessively \n\n:red_circle: Advertising your discord or anything else in any way shape or form is forbidden unless an advertisement purchase is made.\n\n:red_circle: Do not harass or spam any staff members in direct messages\n\n:red_circle: No impersonation of any kind is allowed (It will result in an instant permanent ban)\n\n:red_circle: Do not use bot commands in any other channel then in #bot\n\n:red_circle: No NSFW posts are allowed in any channel\n\n:red_circle: Do not abuse any of the bots in this Discord (It will result in an instant permanent ban)\n\n:red_circle: Pointless tickets using @Tickety#3703 are not allowed \n\n:red_circle: Do NOT disrespect (trash talk) this server or any staff",
      "inline": "0",
      "name": "Add Embed Field"
    },
    {
      "storage": "1",
      "varName": "rulesembed",
      "channel": "1",
      "varName2": "",
      "name": "Send Embed Message"
    },
    {
      "reaction": "1",
      "varName": "rulesembed",
      "info": "5",
      "storage": "1",
      "varName2": "rulesagree",
      "name": "Store Reaction Info"
    },
    {
      "storage": "1",
      "varName": "rulesagree",
      "comparison": "1",
      "value": ":thumbsup:",
      "iftrue": "0",
      "iftrueVal": "",
      "iffalse": "1",
      "iffalseVal": "",
      "name": "Check Variable"
    },
    {
      "title": "Verify & Rules Complete Logs",
      "author": "",
      "color": "#FFFFFF",
      "timestamp": "true",
      "url": "",
      "authorIcon": "",
      "imageUrl": "",
      "thumbUrl": "",
      "storage": "1",
      "varName": "vrcomplete",
      "name": "Create Embed Message"
    },
    {
      "storage": "1",
      "varName": "vrcomplete",
      "message": "Thanks for verifying and agreeing to our rules!",
      "name": "Set Embed Description"
    },
    {
      "storage": "1",
      "varName": "vrcomplete",
      "channel": "1",
      "varName2": "",
      "name": "Send Embed Message"
    },
    {
      "storage": "1",
      "varName": "vrcomplete",
      "channel": "5",
      "varName2": "vrlogs",
      "name": "Send Embed Message"
    },
    {
      "storage": "0",
      "varName": "",
      "name": "Delete Message"
    }
  ]
}
