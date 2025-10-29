In this page, you can configure the settings for the Automatic Reactions module. This module allows the bot to automatically add reactions to messages based on certain criteria such as channels, mentions, roles, authors, and categories. you also can add animated reactions. For a server-specific, non-animated emoji, you first need the emoji name, followed by a colon (“:”), and then the emoji ID.
However, if it's an animated emoji, you also need to add an “a:” in front of it. If you want to add multiple reactions, you can separate them with | (pipe) symbol.

---

**Channels**
![image](/img/modules/automatic-reactions/channels.png)

type: [Add Element](https://howto.scnx-tutorials.de/type/element)

required: false (if you want this, then true)

In this Element, you can add a channel where every message inside that channel will get automatic reactions. You can add multiple channels here by clicking the "Add Element" button. Just select the channel at the left and the emojis with the ids at the right.

---

**Mentions**
![image](/img/modules/automatic-reactions/mentions.png)

type: [Add Element](https://howto.scnx-tutorials.de/type/element)

required: false (if you want this, then true)

In this Element, you can add mentions to a user that will trigger automatic reactions. You can add multiple mentions here by clicking the "Add Element" button. Just select type the user-id of the user type at the left and the emojis with the ids at the right.

---

**Roles**
![image](/img/modules/automatic-reactions/roles.png)

type: [Add Element](https://howto.scnx-tutorials.de/type/element)

required: false (if you want this, then true)

In this Element, you can add roles that will trigger automatic reactions. You can add multiple roles here by clicking the "Add Element" button. Just select the role(s) at the left and the emojis with the ids at the right.

---

**Authors**
![image](/img/modules/automatic-reactions/authors.png)

type: [Add Element](https://howto.scnx-tutorials.de/type/element)

required: false (if you want this, then true)

In this Element, you can add authors that will trigger automatic reactions. this means that when a user types a author in the chat, the bot will automatically react with the specified emojis. You can add multiple authors here by clicking the "Add Element" button. Just select give the author(s) user-id at the left and the emojis with the ids at the right.

---

**Categories**
![image](/img/modules/automatic-reactions/categories.png)

type: [Add Element](https://howto.scnx-tutorials.de/type/element)

required: false (if you want this, then true)

In this Element, you can add categories where every message inside that category will get automatic reactions. You can add multiple categories here by clicking the "Add Element" button. Just select the category at the left and the emojis with the ids at the right.

---

**Only react to @mentions?**
![image](/img/modules/automatic-reactions/react.png)

type: [Boolean](https://howto.scnx-tutorials.de/type/boolean) (AKA True/False)

required: false

recommended: true

If this option is disabled, then the bot will also react to mentions in inline-replies.