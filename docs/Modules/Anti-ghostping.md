---
title: Anti-Ghostping
---
# Anti Ghostping

If you enable this module, the bot sends a message whenever a user pings someone and then deletes the message. This only works for about a minute after that time has passed, the bot won’t send anything. This module is designed for servers that don’t want users to get trolled with pings, etc.

---

**Wait for Bot-Messages**   
![image](/img/modules/anti-ghostping/bot-messages.png)

type: [Boolean](https://howto.scnx-tutorials.de/type/boolean) (AKA True/False)

Required: false

Recommended: true

If you activate this, the bot waits 2 seconds to check whether another bot deleted the message and also responded to it. If this happens, the custom bot won’t send any messages.

---

**Ignored Channels**
![image](/img/modules/anti-ghostping/ignore.png)

type: [Channel Select](https://howto.scnx-tutorials.de/type/channel)

Required: false

Recommended: false

You can select multiple channels here. If you select a channel, it will be ignored, meaning users can ping you and delete their messages anytime they want, and the bot won’t do anything in that channel. Therefore, I recommend not selecting a channel here.

---

### [Message examples for the Anti Ghostping Module](https://howto.scnx-tutorials.de/message-examples/anti-ghostping)