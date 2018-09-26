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
      "message": "${tempVars(\"member\")} To get access to all of our Discord Server please\ndo !verify <code> in the verify channel!\n\nCode: ${serverVars(\"vcode\")}\n\nIf you have any problems contact (Discord User).\n\nPlease react to the rules with the :thumbsup: emoji to agree with them.\n",
      "name": "Set Embed Description"
    },
    {
      "storage": "1",
      "varName": "plsverify",
      "fieldName": "Rules",
      "message": "Rules\n\n:red_circle: No racism, homophobia, threats, or suicide jokes at anytime\n\n:red_circle: No spamming at anytime\n\n:red_circle: Do NOT use curse words excessively \n\n:red_circle: Advertising your discord or anything else in any way shape or form is forbidden unless an advertisement purchase is made.\n\n:red_circle: Do not harass or spam any staff members in direct messages\n\n:red_circle: No impersonation of any kind is allowed (It will result in an instant permanent ban)\n\n:red_circle: Do not use bot commands in any other channel then in #bot\n\n:red_circle: No NSFW posts are allowed in any channel\n\n:red_circle: Do not abuse any of the bots in this Discord (It will result in an instant permanent ban)\n\n:red_circle: Pointless tickets using @Tickety#3703 are not allowed \n\n:red_circle: Do NOT disrespect (trash talk) this server or any staff\n\nThanks!",
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
