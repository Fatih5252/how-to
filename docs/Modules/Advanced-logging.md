---
title: Advanced Logging
---

# Advanced Logging

In this module, you can configure the advanced logging feature of the bot. This feature allows you to log various events in your server, such as message deletions, edits, member joins, leaves, and more. You can choose which events to log and where to log them.

---

**Channel-Updates**
![image](/img/modules/advanced-logging/channel-updates.png)

type: [Boolean](https://howto.scnx-tutorials.de/type/boolean) (AKA True/False)

required: false

recommended: true

If you enable this option, the bot will log any updates made to channels in your server. This includes changes to channel names, permissions, and more. The logs will be sent to the designated logging channel.

---

**Channel for Logging of Channel-Updates**
![image](/img/modules/advanced-logging/channel-updates-channel.png)

type: [Channel Select](https://howto.scnx-tutorials.de/type/channel)

required: true (if you enabled the "Channel-Updates" option)

Here, you have to select the channel where the bot should send the logs of channel updates. Make sure to select a channel that is not used for regular conversations, as it will be used solely for logging purposes.

---
**Role-Updates**
![image](/img/modules/advanced-logging/role-updates.png)

type: [Boolean](https://howto.scnx-tutorials.de/type/boolean) (AKA True/False)

required: false

recommended: true

If you enable this option, the bot will log any updates made to roles in your server. This includes changes to role names, permissions, and more. The logs will be sent to the designated logging channel.

---

**Channel for Logging of Role-Updates**
![image](/img/modules/advanced-logging/role-updates-channel.png)

type: [Channel Select](https://howto.scnx-tutorials.de/type/channel)

required: true (if you enabled the "Role-Updates" option)

Here, you have to select the channel where the bot should send the logs of role updates. Make sure to select a channel that is not used for regular conversations, as it will be used solely for logging purposes.

---

**Member-Updates**
![image](/img/modules/advanced-logging/member-updates.png)

type: [Boolean](https://howto.scnx-tutorials.de/type/boolean) (AKA True/False)

required: false

recommended: true

If you enable this option, the bot will log any updates made to members in your server. This includes changes to nicknames, roles, and more. The logs will be sent to the designated logging channel.

---

**Channel for Logging of Member-Updates**
![image](/img/modules/advanced-logging/member-updates-channel.png)

type: [Channel Select](https://howto.scnx-tutorials.de/type/channel)

required: true (if you enabled the "Member-Updates" option)

Here, you have to select the channel where the bot should send the logs of member updates. Make sure to select a channel that is not used for regular conversations, as it will be used solely for logging purposes.

---

**Message-Updates**
![image](/img/modules/advanced-logging/message-updates.png)

type: [Boolean](https://howto.scnx-tutorials.de/type/boolean) (AKA True/False)

required: false

recommended: true

If you enable this option, the bot will log any updates made to messages in your server. This includes message deletions and edits. The logs will be sent to the designated logging channel.

---

**Channel for Logging of Message-Edits**
![image](/img/modules/advanced-logging/message-edits-channel.png)

type: [Channel Select](https://howto.scnx-tutorials.de/type/channel)

required: true (if you enabled the "Message-Updates" option)

Here, you have to select the channel where the bot should send the logs of message edits. Make sure to select a channel that is not used for regular conversations, as it will be used solely for logging purposes.

---

**Channel for Logging of Message-Deletions**
![image](/img/modules/advanced-logging/message-deletions-channel.png)

type: [Channel Select](https://howto.scnx-tutorials.de/type/channel)

required: true (if you enabled the "Message-Updates" option)

Here, you have to select the channel where the bot should send the logs of message deletions. Make sure to select a channel that is not used for regular conversations, as it will be used solely for logging purposes.

---

**Ignore channels for Message-Updates**
![image](/img/modules/advanced-logging/ignore-channels.png)

type: [Channel Select](https://howto.scnx-tutorials.de/type/channel)

required: false

recommended: false

You can select multiple channels here. If you select a channel, it will be ignored, meaning any message updates (deletions or edits) that happen in that channel will not be logged by the bot. This is useful if you have channels where you don't want to log message updates, such as a general chat or a bot commands channel. But it's not recommended to select a channel here, as it can lead to missing important logs.

---

**Guild-Updates**
![image](/img/modules/advanced-logging/guild-updates.png)

type: [Boolean](https://howto.scnx-tutorials.de/type/boolean) (AKA True/False)

required: false

recommended: true

If you enable this option, the bot will log any updates made to the guild (server) itself. This includes changes to the server name, icon, and more. The logs will be sent to the designated logging channel.

---

**Channel for Logging of Guild-Updates**
![image](/img/modules/advanced-logging/guild-updates-channel.png)

type: [Channel Select](https://howto.scnx-tutorials.de/type/channel)

required: true (if you enabled the "Guild-Updates" option)

Here, you have to select the channel where the bot should send the logs of guild updates. Make sure to select a channel that is not used for regular conversations, as it will be used solely for logging purposes.

---

**Voice-Channel-Updates**
![image](/img/modules/advanced-logging/voice-channel-updates.png)

type: [Boolean](https://howto.scnx-tutorials.de/type/boolean) (AKA True/False)

required: false

recommended: true

If you enable this option, the bot will log any updates made to voice channels in your server. This includes users joining or leaving voice channels, as well as changes to voice channel settings. The logs will be sent to the designated logging channel.

---

**Channel for Logging of Voice-Channel-Updates**
![image](/img/modules/advanced-logging/voice-channel-updates-channel.png)

type: [Channel Select](https://howto.scnx-tutorials.de/type/channel)

required: true (if you enabled the "Voice-Channel-Updates" option)

Here, you have to select the channel where the bot should send the logs of voice channel updates. Make sure to select a channel that is not used for regular conversations, as it will be used solely for logging purposes.

---

**Emoji-Updates**
![image](/img/modules/advanced-logging/emoji-updates.png)

type: [Boolean](https://howto.scnx-tutorials.de/type/boolean) (AKA True/False)

required: false

recommended: true

If you enable this option, the bot will log any updates made to emojis in your server. This includes emojis that got added or deletions of emojis, and more. The logs will be sent to the designated logging channel.

---

**Channel for Logging of Emoji-Updates**
![image](/img/modules/advanced-logging/emoji-updates-channel.png)

type: [Channel Select](https://howto.scnx-tutorials.de/type/channel)

required: true (if you enabled the "Emoji-Updates" option)

Here, you have to select the channel where the bot should send the logs of emoji updates. Make sure to select a channel that is not used for regular conversations, as it will be used solely for logging purposes.

---