# Configuration
This configuration focuses more on setting up the messages that the bot sends. However, there are still some settings you need to configure. This page is not about creating a category, here, you can set up how the Apply module should work.

---

**Require Team- Approve / Deny reason**
![image](/img/modules/Applications/reason.png)

type: [Boolean](https://howto.scnx-tutorials.de/type/boolean) (AKA True/False)

required: false

recommended: true

If you activate this, moderators who approve or deny an application will have to provide a reason for their decision. The reason will also be displayed to the user who applied.

---

**Display truncated application content in Discord?**
![image](/img/modules/Applications/application-content.png)

type: [Boolean](https://howto.scnx-tutorials.de/type/boolean) (AKA True/False)

required: false

recommended: false

If you activate this, the bot will send a second message to the notifications channel containing all the answers the user provided. This way, you don’t have to visit the website. However, this is not recommended, as it may limit customization options. Long applications cannot be fully displayed and will be truncated.

---

**Enable cooldown between applications?**
![image](/img/modules/Applications/cooldown.png)

type: [Boolean](https://howto.scnx-tutorials.de/type/boolean) (AKA True/False)

required: false

recommended: true

If you activate this, a cooldown will be applied to the user who submitted an application. This is recommended, as it helps prevent spam and similar issues.

---

**Cooldown duration**   
![image](/img/modules/Applications/duration.png)

type: [String](https://howto.scnx-tutorials.de/type/string)

required: true (if you activated "Enable cooldown between applications?")

Here, you need to specify how long a user must wait before they can apply again. You can follow this tutorial from the SCNX docs on how to set the duration: https://docs.scnx.xyz/docs/custom-bot/additional-features/#durations

---

**Application Info Channel**
![image](/img/modules/Applications/info-channel.png)

type: [Channel Select](https://howto.scnx-tutorials.de/type/channel)

required: false

recommended: true

If you select a channel here, the bot will send an informational message with a dropdown menu where users can select a category. This is faster because users don’t have to DM the bot, but the application process will still take place via DM.

### [Message Examples for the Applications module](https://howto.scnx-tutorials.de/message-examples/applications)