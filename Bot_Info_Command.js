{
  "name": "botinfo",
  "permissions": "ADMINISTRATOR",
  "restriction": "1",
  "_id": "TIVBz",
  "actions": [
    {
      "channel": "4",
      "varName": "bichannel",
      "info": "2",
      "storage": "1",
      "varName2": "channel",
      "name": "Store Channel Info"
    },
    {
      "info": "1",
      "find": "${tempVars(\"channel\")}",
      "storage": "1",
      "varName": "channelfind",
      "name": "Find Channel"
    },
    {
      "storage": "1",
      "varName": "channelfind",
      "comparison": "0",
      "value": "",
      "iftrue": "2",
      "iftrueVal": "10",
      "iffalse": "0",
      "iffalseVal": "",
      "name": "Check Variable"
    },
    {
      "info": "1",
      "find": "botinfo",
      "storage": "1",
      "varName": "botmadechannel",
      "name": "Find Channel"
    },
    {
      "channel": "3",
      "varName": "botmadechannel",
      "info": "2",
      "storage": "1",
      "varName2": "botinfochannel",
      "name": "Store Channel Info"
    },
    {
      "storage": "1",
      "varName": "botinfochannel",
      "comparison": "1",
      "value": "botinfo",
      "iftrue": "2",
      "iftrueVal": "10",
      "iffalse": "0",
      "iffalseVal": "5",
      "name": "Check Variable"
    },
    {
      "channel": "0",
      "varName": "",
      "message": ":arrows_counterclockwise: Could not find channel, creating it now!",
      "storage": "1",
      "varName2": "createchannelmsg",
      "name": "Send Message"
    },
    {
      "channelName": "botinfo",
      "topic": "",
      "position": "",
      "storage": "1",
      "varName": "channelfind",
      "name": "Create Text Channel"
    },
    {
      "time": "5",
      "measurement": "1",
      "name": "Wait"
    },
    {
      "storage": "1",
      "varName": "createchannelmsg",
      "name": "Delete Message"
    },
    {
      "info": "1",
      "find": "botinfo",
      "storage": "1",
      "varName": "botembedsend",
      "name": "Find Channel"
    },
    {
      "info": "23",
      "storage": "1",
      "varName2": "uptimedays",
      "name": "Store Bot Client Info"
    },
    {
      "info": "24",
      "storage": "1",
      "varName2": "uptimehours",
      "name": "Store Bot Client Info"
    },
    {
      "info": "27",
      "storage": "1",
      "varName2": "ramusage",
      "name": "Store Bot Client Info"
    },
    {
      "info": "29",
      "storage": "1",
      "varName2": "cpuusage",
      "name": "Store Bot Client Info"
    },
    {
      "info": "3",
      "storage": "1",
      "varName2": "guildamt",
      "name": "Store Bot Client Info"
    },
    {
      "info": "4",
      "storage": "1",
      "varName2": "useramount",
      "name": "Store Bot Client Info"
    },
    {
      "info": "11",
      "storage": "1",
      "varName2": "emojiamount",
      "name": "Store Bot Client Info"
    },
    {
      "info": "19",
      "storage": "1",
      "varName2": "botprefix",
      "name": "Store Bot Client Info"
    },
    {
      "info": "2",
      "storage": "1",
      "varName2": "botping",
      "name": "Store Bot Client Info"
    },
    {
      "title": "Bot Information",
      "author": "",
      "color": "#ffffff",
      "timestamp": "true",
      "url": "",
      "authorIcon": "",
      "imageUrl": "",
      "thumbUrl": "",
      "storage": "1",
      "varName": "botinfomsg",
      "name": "Create Embed Message"
    },
    {
      "storage": "1",
      "varName": "botinfomsg",
      "message": "Bot Name: ${serverVars(\"botname\")}\n\nBot Prefix: ${tempVars(\"botprefix\")}\n\nBot Version: ${serverVars(\"botversion\")}\n\nBot Creator/Owner: ${serverVars(\"botowner\")}\n\nBot Support: ${serverVars(\"botsupport\")}\n\nBot Uptime: ${tempVars(\"uptimehours\")} hours\n\nBot Ram Usage: ${tempVars(\"ramusage\")}\n\nBot CPU Usage: ${tempVars(\"cpuusage\")}\n\nBot Ping: ${tempVars(\"botping\")}\n\nBot Guild Amount: ${tempVars(\"guildamt\")}\n\nBot User Amount: ${tempVars(\"guildamt\")}\n\nBot Emoji Amount: ${tempVars(\"emojiamount\")}",
      "name": "Set Embed Description"
    },
    {
      "storage": "1",
      "varName": "botinfomsg",
      "channel": "5",
      "varName2": "botembedsend",
      "varName3": "botinfomsg1",
      "storage3": "2",
      "name": "Send Embed Message MOD"
    },
    {
      "storage": "1",
      "varName": "botinfomsg",
      "channel": "6",
      "varName2": "bichannel",
      "varName3": "botinfomsg1",
      "storage3": "2",
      "name": "Send Embed Message MOD"
    },
    {
      "storage": "0",
      "varName": "",
      "name": "Delete Message"
    },
    {
      "name": "End Action Sequence"
    }
  ]
}
