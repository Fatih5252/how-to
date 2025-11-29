# Forum Support

:::::danger
Please note that all forum threads created in that channel are public for everyone to see. Do not use this module for sensitive or private support questions. Please be careful when using this module

::::info
please note that there is a limit on how many support systems you can create per server, depending on your plan. 

- Starter: 1 support system
- Unlimited: 5 support systems
- Professional: 15 support systems

if you want more support systems then 15, please contact the [Scootkit billing team](https://scootkit.com/#contact).

:::tip
If you want a Support System that is private between the support team and the user, please use the [Ticket System Module](https://howto.scnx-tutorials.de/docs/Modules/Ticket-system) or the [Modmail Bot](https://modmail.net) (also more professional) instead.

:::
::::
:::::

With this module, you can create a support system for your server. It’s not the same as a ticket system and also not a modmail system, it’s a support system in a forum channel. Users can create threads for their support questions, and the support team can reply to them. You can customize the messages the bot sends, lock threads when the support is finished, and much more!

---

**Forum Channel**
![image](/img/modules/forum-support/channel.png)

type: [Forum Channel Select](MUSS EDITIERT WERDEN)

required: true

Here, you have to select the forum channel where the support system will be created. Please note that you can't select a regular channel, it has to be a forum channel.

---

**Add close button**
![image](/img/modules/forum-support/close-button.png)

type: [Boolean](https://howto.scnx-tutorials.de/type/boolean) (AKA True/False)

required: false

recommended: true

If enabled, the bot will add a close button to each thread created in the forum channel. This button can be used by the support team and the User that created the thread to close the thread when the support is finished. if disabled, the threads can only be closed manually by the support team so its recommended to activate this option.

---

**Close Button Content**
![image](/img/modules/forum-support/content.png)

type: [String](https://howto.scnx-tutorials.de/type/string)

required: true (false if you didn't enable the "Add close button" option)

Here, you can customize the content of the close button. This is the message that will appear in the close button.

---

**Staff-Roles**
![image](/img/modules/forum-support/staff-roles.png)

type: [Role Select](https://howto.scnx-tutorials.de/type/role)

required: true (false if you didn't enable the "Add close button" option)

Here, you can select the roles that can close the support threads. Members with these roles will be able to close threads created in the forum channel. please note that OP's can close the time everytime, no matter if they have the role or not.

---

**Lock thread when closing?**
![image](/img/modules/forum-support/lock-thread.png)

type: [Boolean](https://howto.scnx-tutorials.de/type/boolean) (AKA True/False)

required: false

recommended: true

If enabled, the bot will lock the thread when it is closed. This means that no one can reply to the thread anymore. if disabled, the thread will remain open and can still be replied to, even after being closed. its recommended to enable this option to prevent further messages in closed threads.

---

**Add tag when closing?**
![image](/img/modules/forum-support/close-tag.png)

type: [Boolean](https://howto.scnx-tutorials.de/type/boolean) (AKA True/False)

required: false

recommended: true

If enabled, the bot will add a tag to the thread when it is closed. This tag can be used to identify closed threads easily. if disabled, no tag will be added when the thread is closed. its recommended to enable this option to easily identify closed threads. please note that the tag has to exist in your forum channel.

---

**Closed Tag**
![image](/img/modules/forum-support/closed-tag.png)

type: [String](https://howto.scnx-tutorials.de/type/string)

required: true (false if you didn't enable the "Add tag when closing?" option)

Here, you have to enter the name of the tag that will be added to the thread when it is closed. Please make sure that the tag is already configured in your forum channel, otherwise the bot won't be able to add it.

---

**Enabled priority Roles?**
![image](/img/modules/forum-support/enable-priority-roles.png)

type: [Boolean](https://howto.scnx-tutorials.de/type/boolean) (AKA True/False)

required: false

recommended: true

If enabled, the bot will send an additional message to the support thread when a user with a priority role creates a thread. This message can include anything you want, but the most common use is for the bot to send an extra thank-you message or something similar. If disabled, no additional message will be sent

---

**Priority Roles**
![image](/img/modules/forum-support/priority-roles.png)

type: [Role Select](https://howto.scnx-tutorials.de/type/role)

required: true (false if you didn't enable the "Enabled priority Roles?" option)

Here, you can select the roles that are considered priority roles. Members with these roles will trigger the additional message when they create a support thread.

---

**Add tag to priority tickets?**
![image](/img/modules/forum-support/priority-tag.png)

type: [Boolean](https://howto.scnx-tutorials.de/type/boolean) (AKA True/False)

required: false (false if you didn't enable the "Enabled priority Roles?" option)

If enabled, the bot will add a tag to the thread when it is created by a user with a priority role. This tag can be used to identify priority threads easily. if disabled, no tag will be added when the thread is created. its recommended to enable this option to easily identify priority threads. please note that the tag has to exist in your forum channel.

---

**Priority tag**
![image](/img/modules/forum-support/priority-tag-name.png)

type: [String](https://howto.scnx-tutorials.de/type/string)

required: true (false if you didn't enable the "Add tag to priority tickets?" option)

Here, you have to enter the name of the tag that will be added to the thread when it is created by a user with a priority role. Please make sure that the tag is already configured in your forum channel, otherwise the bot won't be able to add it.

---

## [Message Examples for the Forum Support Module](https://howto.scnx-tutorials.de/message-examples/forum-support)