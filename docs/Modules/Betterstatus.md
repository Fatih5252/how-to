# Betterstatus
With the BetterStatus module, you can customize your Discord bot’s status more effectively change it every few seconds or add parameters to it. It’s the same bot status as in the [Built-in Configuration](https://scnx.app/glink?page=bot/configuration?file=bot|config), but with this module, you have more advanced customization options.

---

**Enable Interval?**    
![image](/img/modules/betterstatus/interval.png)

type: [Boolean](https://howto.scnx-tutorials.de/type/boolean) (AKA True/False)

required: false

recommended: true

Here, you have to decide whether the bot status should change every few seconds or not. If you enable this option, the bot status will change every x (you can change that later on) seconds. If you disable this option, the bot status will be static and will not change.

---

**Interval-Statuses**    
![image](/img/modules/betterstatus/interval-statuses.png)

type: [Add field](https://howto.scnx-tutorials.de/type/add-field)

required: false (true if you enabled the “Enable Interval?” option)

Here, you have to create texts that will be used as the bot status when the interval is enabled. You can add multiple statuses here, and the bot will cycle through them every x seconds. You can use Parameters here. Explanation:
```
%onlineMemberCount% - Count of online members on your guild (will not work if presence intent not enabled)
%memberCount% - Count of members on your guild
%randomMemberTag% - Tag of one random member on your guild
%randomOnlineMemberTag% - Tag of one random member who is online on your guild
%channelCount% - Count of channels on your guild
%roleCount% - Count of roles on your guild
```

---

**Activity-Type**
![image](/img/modules/betterstatus/activity-type.png)

type: [Options](https://howto.scnx-tutorials.de/type/options)

required: true

Here, you have to select the activity type for the bot’s status. You can choose between CUSTOM, PLAYING, WATCHING, STREAMING, COMPETING, and LISTENING.
Please note that you need to provide your Twitch channel URL for the status to work properly — but we’ll cover that later on this page (see the “Streaming Link” section).

---

**Bot-Status**
![image](/img/modules/betterstatus/bot-status.png)

type: [Options](https://howto.scnx-tutorials.de/type/options)

required: true

Here, you have to select the bot status. You can choose between ONLINE, IDLE and DND. this will be displayed in the bot’s profile. https://support.discord.com/hc/en-us/articles/227779547-Changing-Online-Status

---

**Status-Interval**
![image](/img/modules/betterstatus/status-interval.png)

type: [Spinner](https://howto.scnx-tutorials.de/type/spinner) (AKA Number Input)

required: false (true if you enabled the “Enable Interval?” option)

Here, you have to give a number in seconds. This number represents how often the bot status should change. For example, if you enter 30 here, the bot status will change every 30 seconds. Please note that the minimum value is 10 seconds. this is because Discord has a rate limit for changing the bot status, and changing it too often could lead to issues.

---

**Change Status on user join?**
![image](/img/modules/betterstatus/change-status.png)

type: [Boolean](https://howto.scnx-tutorials.de/type/boolean) (AKA True/False)

required: false

recommended: true

Here, you have to decide whether the bot status should change when a user joins the server or not. If you enable this option, the bot status will change to a specific status when a user joins the server. If you disable this option, the bot status will not change on user join.

---

**User-join-Status**´
![image](/img/modules/betterstatus/user-join-status.png)

type: [String](https://howto.scnx-tutorials.de/type/string)

required: true

Here, you have to type a message that will be displayed as the bot status when a user joins the server. You can use Parameters here. Explanation:
```
%tag% - Tag of the new user
%username% - Username of the new user
%MemberCount% - New member count of your guild
```

---

**Streaming Link**
![image](/img/modules/betterstatus/streaming-link.png)

type: [String](https://howto.scnx-tutorials.de/type/string)

required: false (true if you selected STREAMING as the Activity-Type)

Here, you have to provide your Twitch channel URL if you selected STREAMING as the Activity-Type. This is necessary for the bot status to work properly. If you didn’t select STREAMING, you can leave this field empty.