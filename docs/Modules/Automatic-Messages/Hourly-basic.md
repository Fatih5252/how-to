# Hourly Basic
On this page, you can configure the time when the bot should send the message, using the 24-hour time format. For example, if you enter 13:00, the bot will send the message every day at 1 PM. Yes, on this page the bot sends the message every day at the given time. You can only specify the hour minutes and seconds are not supported and will either be ignored or cause the module to disable itself.

---

**Channel**
![image](/img/modules/automatic-messages/channel.png)

type: [Channel Select](https://howto.scnx-tutorials.de/type/channel)

required: true

Here, you need to select the channel where the bot should send the automatic message. you can select any channel here, i can't recommend anything here.

---
**Limit hours to**   
![image](/img/modules/automatic-messages/limit.png)

type: [Add Fields](https://howto.scnx-tutorials.de/type/fields)

required: true

In this field (or fields), you have to add the hours when the bot should send the message. The hours must be in 24-hour format. For example, if you want the bot to send the message only between 9 AM and 5 PM, you would add two fields: one with "09:00" and another with "17:00".