# Cronjob (Advanced)

With Cronjobs, you can setup automatic messages at any time you want. But its a bit more advanced than the other automatic messages (Hourly Basic and Daily Basic). You need to know how to write cron expressions to use this module. If you don't know how to write cron expressions, you can use https://crontab.guru to help you create cron expressions.

---

**Channel**
![image](/img/modules/automatic-messages/channel.png)

type: [Channel Select](https://howto.scnx-tutorials.de/type/channel)

required: true

Here, you need to select the channel where the bot should send the automatic message. you can select any channel here, i can't recommend anything here.

---

**Expression**
![image](/img/modules/automatic-messages/expression.png)

type: [String](https://howto.scnx-tutorials.de/type/string)

required: true

In this field, you need to enter the cron expression that defines when the bot should send the message. For example, if you want the bot to send the message every day at 1 PM, you would enter "0 13 * * *". You can use https://crontab.guru to help you create cron expressions.