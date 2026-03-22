---
title: Message on Voice Join
---

Here, you set up the whole system for this module.

---

**Channels**
![image](/img/modules/voice-channel-actions/channels.png)

type: [Channel Select](https://howto.scnx-tutorials.de/type/channel)

required: true

Here, you have to select the channels where the bot should perform the actions. You can select multiple channels, but make sure to select only voice channels, as the bot will not perform any actions in text channels.

---

**Notification Channel**
![image](/img/modules/voice-channel-actions/notification-channel.png)

type: [Channel Select](https://howto.scnx-tutorials.de/type/channel)

required: true

Here, you have to select the channel where the bot should send the notifications. The bot will send a notification to this channel whenever a user joins one of the selected voice channels.

---

**Enable Cooldown**
![image](/img/modules/voice-channel-actions/cooldown.png)

type: [Boolean](https://howto.scnx-tutorials.de/type/boolean) (AKA True/False)

required: false

recommended: false

If you enable this option, the bot will only send a notification for a user once the cooldown time has passed. This means that if a user joins the voice channel multiple times within the cooldown period, the bot will only send one notification for that user.

---

**Cooldown Duration (Minutes)**
![image](/img/modules/voice-channel-actions/duration.png)

type: [Spinner](https://howto.scnx-tutorials.de/type/spinner) (AKA Number Input)

required: true (if you enabled the "Enable Cooldown" option)

Here, you can set the duration of the cooldown in minutes. This means that after a user joins a voice channel and triggers a notification, they will not trigger another notification until the cooldown period has passed. You can set this to any amount of minutes you like.

---

**Join-DM**
![image](/img/modules/voice-channel-actions/join-dm.png)

type: [Boolean](https://howto.scnx-tutorials.de/type/boolean) (AKA True/False)

required: false

recommended: true

If you enable this option, the bot will send a direct message (DM) to the user who joined the voice channel. The DM will contain a custom message that you can set up in the next option.

---

**Join-DM-Message**
![image](/img/modules/voice-channel-actions/join-dm-message.png)

type: [Message Editor](https://docs.scnx.xyz/docs/scnx/guilds/message-editor/)

required: true (if you enabled the "Join-DM" option)

Here, you can set the custom message that the bot will send to users who join the voice channel if you enabled the "Join-DM" option. You can use placeholders in this message to include dynamic information:
```
%vc% - Name of the voicechat
```
