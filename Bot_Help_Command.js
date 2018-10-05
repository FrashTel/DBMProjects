{
  "name": "bihelp",
  "permissions": "NONE",
  "restriction": "2",
  "_id": "irAoX",
  "actions": [
    {
      "title": "Bot Information Help Menu",
      "author": "",
      "color": "#ffffff",
      "timestamp": "true",
      "url": "",
      "authorIcon": "",
      "imageUrl": "",
      "thumbUrl": "",
      "storage": "1",
      "varName": "bihelp",
      "name": "Create Embed Message"
    },
    {
      "storage": "1",
      "varName": "bihelp",
      "message": "For this system to work proper you must do the following commands!",
      "name": "Set Embed Description"
    },
    {
      "storage": "1",
      "varName": "bihelp",
      "fieldName": "Commands",
      "message": "!botinfo - runs the main command which sends the embed containing all of the bot's information.\n\n!bihelp - Sends the bot information help menu in an embed to the command author.\n\n!bisetup <Name of Bot> <Bot Version> <Bot Owner> <Link To Bot Support> <Mention Channel (This is where the embed contianing the info will go)> <Description Of Bot> - sets the variables needed for the bot info system to work.",
      "inline": "0",
      "name": "Add Embed Field"
    },
    {
      "storage": "1",
      "varName": "bihelp",
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
