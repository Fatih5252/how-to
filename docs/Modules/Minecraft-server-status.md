---
title: Minecraft Server Status
---

With this module, you can display the status of a Minecraft server in your Discord server. You can show whether the server is online or offline, the number of players currently online, and the version that is supported. you can display these information, with a custom message or in the channel/category name. This is a great way to keep your community informed about the status of your Minecraft server.

---

**Server Address**
![image](/img/modules/minecraft-server-status/server-address.png)

type: [String](https://howto.scnx-tutorials.de/type/string)

required: true

Here, you have to enter the address of the Minecraft server you want to monitor. This can be an IP address or a domain name. For example, if your Minecraft server is hosted on "mc.example.com", you would enter "mc.example.com" here. please note that if your Minecraft server is a bedrock server, you have enable **Bedrock server?** here in the configuration (underneath this option). You can also include ports if needed (Bedrock servers for example).

---

**Bedrock server?**
![image](/img/modules/minecraft-server-status/bedrock-server.png)

type: [Boolean](https://howto.scnx-tutorials.de/type/boolean) (AKA True/False)

required: it depends

If you enable this option, the bot will treat the server address you provided as a Bedrock Minecraft server. If you disable this option, the bot will treat the server address as a Java Minecraft server. Make sure to enable this option if you are trying to monitor a Bedrock server, otherwise the bot won't be able to retrieve the correct information and will show the server as offline.

---

**Enable status as channel name?**
![image](/img/modules/minecraft-server-status/status-as-channel-name.png)

type: [Boolean](https://howto.scnx-tutorials.de/type/boolean) (AKA True/False)

required: false

recommended: true

If you enable this option, the bot will update the name of a specified channel/category to reflect the status of the Minecraft server. For example, if the server is online, a online text will show up in the channel/category name (you can edit the message) and if the server is offline, a offline text will show up in the channel/category name (you can also edit the message). This is a great way to provide a quick visual indicator of the server status without needing to read a message.

---

**Stauts Channel**
![image](/img/modules/minecraft-server-status/status-channel.png)

type: [Channel Select](https://howto.scnx-tutorials.de/type/channel)

required: true (if you enabled the "Enable status as channel name?" option)

Here, you have to select the channel or category that the bot should update with the Minecraft server status. Make sure to select a channel or category that is not used for regular conversations, as it will be updated frequently with the server status. I would suggest creating a dedicated channel or category for this purpose to keep it organized.

---

**Offline status**
![image](/img/modules/minecraft-server-status/offline-status.png)

type: [String](https://howto.scnx-tutorials.de/type/string)

required: true (if you enabled the "Enable status as channel name?" option)

Here, you can customize the message that will be displayed in the channel/category name when the Minecraft server is offline. This allows you to personalize the status message to fit the theme of your server. But i would suggest the default message, which is "⚠ Server offline", as it clearly indicates the status of the server.

---

**Online status**
![image](/img/modules/minecraft-server-status/online-status.png)

type: [String](https://howto.scnx-tutorials.de/type/string)

required: true (if you enabled the "Enable status as channel name?" option)

Here, you can customize the message that will be displayed in the channel/category name when the Minecraft server is online. This allows you to personalize the status message to fit the theme of your server. there are also placeholders you can use in the online status message, which are:
```
%onlinePlayers% - Number of players that are currently online
%availableSlots% - Number of the maximum available slots
%version% - Supported version of the server (as returned by the server)
```

---

**Enable status as a message?**
![image](/img/modules/minecraft-server-status/status-as-message.png)

type: [Boolean](https://howto.scnx-tutorials.de/type/boolean) (AKA True/False)

required: false

recommended: true

If you enable this option, the bot will send a message in a specified channel to reflect the status of the Minecraft server. The bot will only send one message and will edit that message to update the server status, so it won't spam the channel with new messages every time the status changes.

---

**Channel to send message into**
![image](/img/modules/minecraft-server-status/status-message-channel.png)

type: [Channel Select](https://howto.scnx-tutorials.de/type/channel)

required: true (if you enabled the "Enable status as a message?" option)

Here, you have to select the channel where the bot should send the Minecraft server status message. Make sure to select a channel that is not used for regular conversations, because the bot will only send one message and edit that message to update the server status, so if that channel is active, the message would just dissapear in the middle of the conversation and users might miss it. I would suggest creating a dedicated channel for this purpose to keep it organized.

---

### [Message examples for the Minecraft Server Status Module](https://howto.scnx-tutorials.de/message-examples/minecraft-server-status)