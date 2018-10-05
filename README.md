# Verify System

### Commands

* **[Verify Command](https://github.com/Zacwilson90/DBMProjects/blob/Verify-System/Verify_Command.js)**

`[p]Verify <code>` - Will verify the user and add them to a normal user role.



### Events

* **[Verify Event](https://github.com/Zacwilson90/DBMProjects/blob/Verify-System/verifymessage_event.js)**



### Info

When using this verify system it will send the user an embed message with a code and rules upon join. The user is then to go into the verify channel and do `[p]verify <code>` when they do this it will send them an embed with saying the code was unsuccessful or successful, if successful then it will send another embed to the user in direct messages containing the rules asking for them to react to them with a thumbsup emoji to agree. Lastly if they do that then it will send an embed saying that they have successfully been verified and agreed to the rules a similar embed will also be sent to a log channel. 
  
### Instructions

**Remember you must deny read access to @everyone except the verify channel you would like to use!**

You can **skip Instructions #2** if you make a role called `Member`.

You can **Skip Instructions #3 & #4** if you do no want to add your own rules.

1. Must have latest **[Mods](https://github.com/Discord-Bot-Maker-Mods/DBM-Mods)** and **[Beta Version](https://discordapp.com/channels/379372685182107669/421384914219433984/493286471696908309)** version of DBM.
2. Edit `line #1` with your role name or role id. (This is for the command)
3. Edit `line #4` with your rules. (This is for the event)
4. Edit `line #19` with your rules. (This is for the command)
5. This will only delete the command message, it will still send the embed message to the same channel and command author.
6. Feel free to make any changes to this system as you wish.



### Support

If you need any help or have problems feel free to ask for it in the **[Raw Data #Support](https://discordapp.com/channels/379372685182107669/388055603320324116)** someone will help you. Please **DO NOT** ping me or dm in the server or on Discord in general. You could also open an issue request and I will get back to that asap!
