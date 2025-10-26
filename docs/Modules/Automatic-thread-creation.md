# Automatic Thread-Creation

With this Module, you can automatically create Threads in a channel every time a user sends a message in that channel.

---

**Channels**
![image](/img/modules/Automatic-thread-creation/channels.png)

type: [Channel Select](https://howto.scnx-tutorials.de/type/channel)

required: true

Here, you have to select a channel where the bot should create automatic threads when a user sends a message in that channel.

---

**threadName**
![image](/img/modules/Automatic-thread-creation/name.png)

type: [String](https://howto.scnx-tutorials.de/type/string)

required: true

Here, you have to provide a name for all the threads that will be created in that channel. You can only provide 1 name, multiple threads with different names are not possible.

---

**threadArchiveDuration**
![image](/img/modules/Automatic-thread-creation/archive.png)

type: [Options](https://howto.scnx-tutorials.de/type/options)

required: true

Here, you have to decide after how many minutes of inactivity the thread should be archived. You can choose between 60 minutes, 1 day (1440 minutes), 3 days (4320 minutes), 1 week (10080 minutes), and never (MAX).