# Voice Channels

In this section, you can set up the Voice Channels where the bot should automatically delete messages. If you want this feature to work in multiple Voice Channels, you’ll need to create a new configuration element for each one. Simply click on the “Add new Config-Element” button to add another setup. This gives you full control over which channels stay clean and organized. On this page, it’s a little different because you can’t set how many messages the bot should keep that option isn’t available here.

---

**Channel**
![image](/img/modules/auto-message-delete/channel.png)

type: [Channel Select](https://howto.scnx-tutorials.de/type/channel)

required: true

Here, you need to select the Voice Channel where the bot should delete messages automatically. Choose a Voice Channel that you think shouldn’t have too many messages

---

**Timeout**   
![image](/img/modules/auto-message-delete/timeout.png)

type: [Spinner](https://howto.scnx-tutorials.de/type/spinner) (AKA Number input)

required: true

Here, you have to enter a number that determines after how many minutes the bot will delete the messages. The bot will only delete messages in the channel you set up.