---
title: Partner-List
---

:::info
The Option **"Partnet-List-Embed"** doesn't do anything right now, this option got fixed in the Beta version, HowTo only shows the options in the Stable version, you can wait until this gets implemented into the stable version, or you can go to the [Beta Version](https://docs.scnx.xyz/docs/scnx/guilds/bots/#beta). Nothing happens if you fill in these options, you can leave them empty, but if you want to fill them in, then you can, but please be aware that these options are not used anymore, so they won't have any effect on the module.
:::

This module is designed to make managing partnerships with other Discord servers easy. Create an always up-to-date embed listing all your current partners. Create custom categories to keep your partners sorted. Automatically assign and remove roles from partners. Automatically send notifications to your partner about changes in their status.

---

**Channel**
![image](/img/modules/partner-list/channel.png)

type: [Channel Select](https://howto.scnx-tutorials.de/type/channel)

required: true

Here, you have to select the channel where the bot should send the partner list. The bot will then send an embed in this channel with all the partners that you have added. Make sure to select a channel that is not used for regular conversations, as it will be used solely for the partner list.

---

**categories**
![image](/img/modules/partner-list/categories.png)

type: [Add field](https://howto.scnx-tutorials.de/type/add-field)

required: true

Here, you have to add the categories for your partners. You can add as many categories as you want, with these categories, you can add your partners to these categories, in the `/partnet add` command, there is a option called "category", you can select the category that you added to add the partner to. The bot will then add the partner to the selected category in the partner list embed.

---

**Category-Roles**
![image](/img/modules/partner-list/category-roles.png)

type: [Add Element](https://howto.scnx-tutorials.de/type/add-element)

required: false

recommended: it's your choice

Here, you can add a role that are automatically assigned to partners when they get added to the partner list by category. This means that when you add a partner to a category, the bot will automatically assign the selected role to the partner. in the String field, you have to type the name of the category that you added in the "categories" option, and in the Role field, you have to select the role that should be assigned to the partner when they get added to the partner list with the selected category. This feature is optional, but it can be useful if you want to give your partners a special role in your server.

:::warning
Please make sure that the category name in the String field is EXACTLY the same as the category name that you added in the "categories" option, the Capital letters also matter, if you don't pay attention to that, the bot won't be able to assign the role to the partner when they get added to the partner list.
:::

---

**Send Partner-Notifications?**
![image](/img/modules/partner-list/notifications.png)

type: [Boolean](https://howto.scnx-tutorials.de/type/boolean) (AKA True/False)

required: false

recommended: true

Here, you can activate if the bot should send notifications to your partners when they get added to the partner List or removed from the partner list. If this is activated, the bot will automatically send a notification to the partner when one of these actions happens. The notification will be sent as a direct message to the partner, so make sure that your partners have their direct messages open.

---

### [Message Examples for the Partner-List module](https://howto.scnx-tutorials.de/message-examples/partner-list)