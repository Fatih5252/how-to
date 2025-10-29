---
title: Anonymous chat
---
# Anonymous chat
With this module, you can send anonymous messages to a channel. You can only send messages to one channel, which you choose in the configuration. If a user has access to the channel, they can see every message sent. Every message is anonymous (if you have an option enabled in the configuration, it could be insecure, but we will get to that later). Even the admins cannot see who sent the message. NO ONE can see anything; it is truly "Anonymous".

---

**Channel**
![image](/img/modules/anonymous-chat/channel.png)

type: [Channel Select](https://howto.scnx-tutorials.de/type/channel)

Required: true

Here, you have to select a channel where all the Messages will be sent, This channel could be visible to everyone, but its on your choice.

---

**Use webhook Messages?**  
![image](/img/modules/anonymous-chat/webhook.png)

type: [Boolean](https://howto.scnx-tutorials.de/type/boolean) (AKA True/False)

required: false

recommended: true

If you activate this, then the bot creates [Webhooks](https://support.discord.com/hc/en-us/articles/228383668-Intro-to-Webhooks) to send the messages.

---

**Allow users to reset their identity?**
![image](/img/modules/anonymous-chat/reset.png)

type: [Boolean](https://howto.scnx-tutorials.de/type/boolean) (AKA True/False)

required: false

recommended: true

If you activate this, when users run the `/anonymous-message` command, they have the option to reset their identity. With this, the user gets a new username and a new profile picture. they can’t choose the name or the profile picture. If a user resets their identity, they can’t get the old name or profile picture back. Since the names are randomized, the chances are very low to get the old profile back.

---

**Allow users to create anonymous messages by sending a message in the channel? (unsecure!)**
![image](/img/modules/anonymous-chat/send.png)

type: [Boolean](https://howto.scnx-tutorials.de/type/boolean) (AKA True/False)

required: false

recommended: FALSE OH HELL NAH DONT ACTIVATE THIS SHIT

The insecure part of this is that many servers have something called enhanced logs, where the logging bot captures everything: deleted/edited messages, deleted channels, and so on. Basically, the logging bot captures everything. Since the custom bot deletes the original message, the logging bot can capture it and store it in a hidden channel that regular users can’t see but Moderators can see which is no longer truly anonymous. And that’s the reason why this option can be insecure.

### [Message Examples for the Anonymous chat module](https://howto.scnx-tutorials.de/message-examples/anonymous-chat)