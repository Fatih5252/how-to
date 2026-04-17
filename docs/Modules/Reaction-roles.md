---
title: Reaction Roles
---

:::info
The Reaction Roles module is an outdated module, it still works, but it's recommended to use the [Login as a Bot](https://scnx.app/glink?page=bot/login) feature, where you can create the same thing with the message editor, but it's smoother and easier to use.
:::

The Reaction Roles module allows you to create reaction roles messages, where users can react to a message to get a role.

---

**Message-ID**
![image](/img/modules/reaction-roles/message-id.png)

type: [String](https://howto.scnx-tutorials.de/type/string) (AKA Text Input)

required: true

Here, you have to provide the ID of the message that you want to use for the reaction roles. You can find the message ID by enabling developer mode in Discord (User settings > Advanced > Developer Mode:on), and then right-clicking on the message and selecting "Copy Message-ID". You first have to send a message in the channel where you want to setup the reaction roles, and then you can use this message for the reaction roles by providing its ID here.

---

**Reactions**
![image](/img/modules/reaction-roles/reactions.png)

type: [Add Element](https://howto.scnx-tutorials.de/type/add-element)

required: true

Here, you need to add an element, as this is required. Inside the element, you first (on the left side) select the emoji that users should react with, and second (on the right side) you need to provide the role ID of the role that users should receive. To get the role ID, enable Developer Mode (User Settings > Advanced > Developer Mode: On), then right-click on a role and select ‘Copy Role ID’. You can add as many roles as you want; just separate them with a comma (,). Please note that someone has to react first for it to work, as the bot does not automatically react to the message