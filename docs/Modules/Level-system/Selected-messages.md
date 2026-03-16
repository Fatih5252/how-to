# Selected messages

Here, you can select the messages that the bot should send when a user levels up. You can customize these messages to make them more personal and engaging for your community.

---

**level**
![image](/img/modules/level-system/level.png)

type: [String](https://howto.scnx-tutorials.de/type/string)

required: true

Here, you have to type a level, when this level is reached, the bot sends a custom message that you configure, and under this option is the "message" option where you can type the message that the bot should send when a user reaches this level.

---

**message**
![image](/img/modules/level-system/message.png)

type: [Message Editor](https://docs.scnx.xyz/docs/scnx/guilds/message-editor/)

required: true

Here, you have to type the message that the bot should send when a user reaches the level that you configured in the "level" option. You can also use other placeholders:
```
%mention% - Mention of the user
%avatarURL% - Avatar of the user
%username% - Username of the user
%tag% - Tag of the user
%newLevel% - New level of the user
%role% - Mention of the role (No ping, only if level has reward)
```