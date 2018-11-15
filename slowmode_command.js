{
  "name": "slowmode",
  "permissions": "MANAGE_CHANNELS",
  "restriction": "1",
  "_id": "qccvT",
  "actions": [
    {
      "info": "0",
      "infoIndex": "1",
      "storage": "2",
      "varName": "timesecs",
      "name": "Store Command Params"
    },
    {
      "info": "0",
      "infoIndex": "2",
      "storage": "2",
      "varName": "slowmodetiming",
      "name": "Store Command Params"
    },
    {
      "storage": "2",
      "varName": "smstatus",
      "changeType": "0",
      "value": "1",
      "name": "Control Variable"
    },
    {
      "channel": "0",
      "varName": "",
      "message": "Slowmode has been enabled by ${member} for ${serverVars(\"timesecs\")} seconds.",
      "storage": "1",
      "varName2": "smonmsg",
      "name": "Send Message"
    },
    {
      "storage": "1",
      "varName": "smonmsg",
      "name": "Pin Message"
    },
    {
      "time": "${serverVars(\"timesecs\")}",
      "measurement": "1",
      "name": "Wait"
    },
    {
      "storage": "2",
      "varName": "smstatus",
      "changeType": "0",
      "value": "0",
      "name": "Control Variable"
    },
    {
      "storage": "1",
      "varName": "smonmsg",
      "name": "Un-Pin Message"
    },
    {
      "channel": "0",
      "varName": "",
      "message": "Slowmode is now off!",
      "storage": "0",
      "varName2": "",
      "name": "Send Message"
    }
  ],
  "_aliases": [],
  "comType": "0"
}
