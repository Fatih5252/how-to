# Text-Channels

In this section, you can set up the channel where the bot should automatically delete messages. If you want this feature to work in multiple channels, you’ll need to create a new configuration element for each one. Simply click on the “Add new Config-Element” button to add another setup. This gives you full control over which channels stay clean and organized.

---

**Channel**
![image](/img/modules/auto-message-delete/channel.png)

type: [Channel Select](https://howto.scnx-tutorials.de/type/channel)

required: true

Here, you need to select the channel where the bot should delete messages automatically. Choose a channel that you think shouldn’t have too many messages

---

**Timeout**   
![image](/img/modules/auto-message-delete/timeout.png)

type: [Spinner](https://howto.scnx-tutorials.de/type/spinner) (AKA Number input)

required: true

Here, you have to enter a number that determines after how many minutes the bot will delete the messages. The bot will only delete messages in the channel you set up.

---

**Amount of messages to keep**
![image](/img/modules/auto-message-delete/keep.png)

type: [Spinner](https://howto.scnx-tutorials.de/type/spinner) (AKA Number input)

required: true

Here, you have to enter a number that defines how many messages the bot should keep in that channel. You can set a maximum of 50 messages, and only the newest ones will be kept.