{
  "name": "slowmode check",
  "permissions": "NONE",
  "restriction": "1",
  "_id": "gdjYl",
  "actions": [
    {
      "message": "0",
      "varName": "",
      "info": "3",
      "storage": "1",
      "varName2": "messageauthor",
      "name": "Store Message Info"
    },
    {
      "storage": "2",
      "varName": "smstatus",
      "comparison": "1",
      "value": "1",
      "iftrue": "0",
      "iftrueVal": "",
      "iffalse": "1",
      "iffalseVal": "",
      "name": "Check Variable"
    },
    {
      "member": "1",
      "varName": "messageauthor",
      "dataName": "slowmode",
      "defaultVal": "0",
      "storage": "1",
      "varName2": "smcheck",
      "name": "Store Member Data"
    },
    {
      "storage": "1",
      "varName": "smcheck",
      "comparison": "2",
      "value": "1",
      "iftrue": "2",
      "iftrueVal": "7",
      "iffalse": "0",
      "iffalseVal": "7",
      "name": "Check Variable"
    },
    {
      "member": "1",
      "varName": "",
      "dataName": "slowmode",
      "changeType": "0",
      "value": "1",
      "name": "Control Member Data"
    },
    {
      "name": "End Action Sequence"
    },
    {
      "storage": "0",
      "varName": "",
      "name": "Delete Message"
    },
    {
      "time": "${serverVars(\"slowmodetiming\")}",
      "measurement": "1",
      "name": "Wait"
    },
    {
      "member": "1",
      "varName": "",
      "dataName": "slowmode",
      "changeType": "0",
      "value": "0",
      "name": "Control Member Data"
    }
  ],
  "comType": "3"
}
