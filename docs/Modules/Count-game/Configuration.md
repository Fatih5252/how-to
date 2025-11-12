# Configuration

On this page, you need to configure the Counting Game module.

---

**Channels**
![](/img/modules/Count-game/channels.png)

type: [Channel Select](https://howto.scnx-tutorials.de/type/channel)

required: true

Here, you need to select the channel where the Counting Game will take place. You can also select multiple channels. However, please note that if you choose a channel where a counting game doesn’t make sense (for example, your main chat channel), the bot will still count all messages there and respond to every single one.

---

**Channel-Description**
![](/img/modules/Count-game/channel-description.png)

type: [String](https://howto.scnx-tutorials.de/type/string)

required: false

recommended: true

Here, you can enter a description for the counting channel. This description will be displayed in the channel description, this is recommended because you can work with variables, you can use the following placeholders if you want:

```
%x% - Next number users should count
```

---

**Success-Reaction**
![](/img/modules/Count-game/success-reaction.png)

type: [Emoji](https://howto.scnx-tutorials.de/type/emoji)

required: true

Here, you have to select an emoji that the bot will react with when a user counts the correct number. This setting is required, if you don’t choose an emoji, the module will automatically disable itself.

---

**Restart game, if user miscounts**

type: [Boolean](https://howto.scnx-tutorials.de/type/boolean) (AKA True/False)

required: false

recommended: false

If this option is enabled, the counting game will restart from 1 whenever a user miscounts. If it is disabled, the game will continue from the last correct number. However, this setting is not recommended, as it can ruin the game more easily if there are trolls on the server, so use it with caution.

---

**Only one continuous message per user**
![](/img/modules/Count-game/one-message.png)

type: [Boolean](https://howto.scnx-tutorials.de/type/boolean) (AKA True/False)

required: false

recommended: true

If this option is enabled, a user can only count on number in a row, they can't just spam the next number constantly, this means that another user have to count the next number before the same user can count again. This setting is recommended to prevent users from spamming the counting channel.

---

**Protect against users deleting the last counting message?**
![](/img/modules/Count-game/protect.png)

type: [Boolean](https://howto.scnx-tutorials.de/type/boolean) (AKA True/False)

required: false

recommended: true

If this option is enabled, the bot will protect the last counting message from being deleted. This means that if a user tries to delete the last counting message, the bot will send a message saying that the last counting message got deleted and will repost the last correct number. This setting is recommended to prevent users from ruining the counting game by deleting messages.

---

**Remove reactions after 5 seconds?**
![](/img/modules/Count-game/remove-reactions.png)

type: [Boolean](https://howto.scnx-tutorials.de/type/boolean) (AKA True/False)

required: false

recommended: true

If this option is enabled, the bot will remove its reaction from the counting message after 5 seconds. This setting is recommended to keep the counting channel clean and prevent it from being cluttered with reactions.

---

**Amount of wrong messages to trigger action**
![](/img/modules/Count-game/wrong-messages.png)

type: [Spinner](https://howto.scnx-tutorials.de/type/spinner) (AKA Number Input)

required: false

recommended: true

Here, you can specify the number of wrong messages that will trigger an action from the bot toward a user who reaches that amount (the “x” stands for the number you set here). If you want, the bot can assign a role to the user that has limited permissions, or it can remove the user’s `SEND_MESSAGES` permission for the selected channel(s). If you don’t want to use this feature, simply enter 0.

---

**Give role on action, instead of removing permission**
![](/img/modules/Count-game/give-role.png)

type: [Boolean](https://howto.scnx-tutorials.de/type/boolean) (AKA True/False)

required: false

recommended: false

If this option is enabled, the bot will assign a role to the user who reaches the specified number of wrong messages instead of removing their `SEND_MESSAGES` permission. You can configure this role however you like, it’s completely up to you.

---

**Role given when amount is being reached**
![](/img/modules/Count-game/role.png)

type: [Role Select](https://howto.scnx-tutorials.de/type/role)

required: true (if "Give role on action, instead of removing permission" is enabled)

Here, you can specify the role that will be assigned to the user who reaches the specified number of wrong messages. (as explained in the previous setting)

---

**Allow text characters in messages?**
![](/img/modules/Count-game/allow-text.png)

type: [Boolean](https://howto.scnx-tutorials.de/type/boolean) (AKA True/False)

required: false

recommended: true

If this option is enabled, users can include comments or text along with their counting messages. For example, a user could send "5 Let's keep going!" as their counting message. If this option is disabled, users must send only the number without any additional text. This setting is recommended to maintain clarity in the counting game.

---

**Allow users to use maths in their messages?**
![](/img/modules/Count-game/allow-maths.png)

type: [Boolean](https://howto.scnx-tutorials.de/type/boolean) (AKA True/False)

required: false

recommended: true

If this option is enabled and users have some “Albert Einstein” brains, they can use basic mathematical expressions to represent the counting number. For example, instead of sending “10”, a user could send “5+5”. The bot will evaluate the expression and count it as the correct number. If this option is disabled, users must send the exact number without any mathematical expressions. This setting is recommended to add some extra fun and variety to the counting game.

---

## [Message Examples for the Count-Game Module](https://howto.scnx-tutorials.de/message-examples/count-game)