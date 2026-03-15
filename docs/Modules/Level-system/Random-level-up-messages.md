# Random-Level-Up-Messages

:::note
you have to add many Config-Elements as you want random messages, please don't only add one, because then there is no random, the bot will always select the same message. So please add at least 3-4 messages to make it more random.
:::

Here, you can configure the random level up messages that are sent when a user levels up. Please note that you have to activate the "Random messages" option in the configuration site (https://scnx.app/glink?page=bot/configuration?file=levels|configs/config) if you don't activate that option or don't want this, you can leave this site empty. (just don't create a new Config-Element).

---

**type**
![image](/img/modules/level-system/type.png)

type: [Options](https://howto.scnx-tutorials.de/type/options)

required: true

Here, you have to select the type of the message, you can choose between "normal" and "with-reward". If you select "normal", then the message will be selected when a user levels up, but if you select "with-reward", then the message will be selected when a user levels up and gets a reward for it.

---

**message**
![image](/img/modules/level-system/message.png)

type: [Message Editor](MUSS EDITIERT WERDEN)

required: true

Here, you can edit the message that is going to get selected when a user levels up. This text can be anything, so i can't recommend anything here, it's your choice. You can use the following placeholders:
```
%mention% - Mention of the user
%avatarURL% - Avatar of the user
%username% - Username of the user
%tag% - Tag of the user
%newLevel% - New level of the user
%role% - Mention of the role (No ping, only if type = with-reward)
```