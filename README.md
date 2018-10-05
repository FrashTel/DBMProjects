# Bot Information System

### Commands

* **[Bot Info Command](https://github.com/Zacwilson90/DBMProjects/blob/Bot-Information-System/Bot_Info_Command.js)**

* **[Bot_Help_Command](https://github.com/Zacwilson90/DBMProjects/blob/Bot-Information-System/Bot_Help_Command.js)**

* **[BotSetup Command](https://github.com/Zacwilson90/DBMProjects/blob/Bot-Information-System/BotInfo_Setup_Command.js)**

`!botinfo` - runs the main command which sends the embed containing all of the bot's information.

`!bihelp` - Sends the bot information help menu in an embed to the command author.

`!bisetup <Name of Bot> <Bot Version> <Bot Owner> <Link To Bot Support> <Mention Channel (This is where the embed contianing the info will go)> <Description Of Bot>` - sets the variables needed for the bot info system to work.

The following commands are **restricted** to the bot owner.
 * !bihelp
 * !bisetup
 
### Events

* **[Bot Info Interval](https://github.com/Zacwilson90/DBMProjects/blob/Bot-Information-System/Bot_Info_Interval_Event.js)** 



### Info

This system will send an embed message to a specified channel contiang the bot's name, prefix, version, creator/owner's name, support link for the bot, uptime in hours, ram and cpu usage, ping, number of guilds the bot is in, number of users the bot has, and the total emojis.

### Instructions

1. Must have latest **[Mods](https://github.com/Discord-Bot-Maker-Mods/DBM-Mods)** and **[Beta Version](https://discordapp.com/channels/379372685182107669/421384914219433984/493286471696908309)** version of DBM.
2. Run the !bisetup command to setup the system. 
3. You may also edit any embeds to your liking.
4. You may also change the interval that the command is triggered by changed the number of seconds in the `line #2`. (Event Only)

### Support

If you need any help or have problems feel free to ask for it in the **[Raw Data #Support](https://discordapp.com/channels/379372685182107669/388055603320324116)** someone will help you. Please **DO NOT** ping me or dm in the server or on Discord in general. You could also open an issue request and I will get back to that asap!

