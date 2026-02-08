---
title: Advent Calendar
---

Here, you configure the advent calendar, The advent calendar you know, the advent calendar everyone knows, in here, you have to configure the message that the bot is going to send. all the advent calendar prizes that user can get from day 1, all the way to day 24.

---

**enabled?**
![image](/img/modules/winter-holidays/enabled-advent.png)

type: [Boolean](https://howto.scnx-tutorials.de/type/boolean) (AKA True/False)

required: false (true, if you want this feature)

If you don't want this feature, you can leave it off, but if you want a advent calendar turn this on, this activates the Advent calendar feature.

---

**Calendar Channel**
![image](/img/modules/winter-holidays/calendar-channel.png)

type: [Channel Select](https://howto.scnx-tutorials.de/type/channel)

required: True (if you enabled the "enabled?" option)

Here, you have to select the channel that the Bot should send the advent calendar message

:::info
Please be sure that the Channel is empty, if the channel isn't empty, then it could cause problems.
:::

---

**Reward roles for claiming all days (optional)**
![image](/img/modules/winter-holidays/reward.png)

type: [Role Select](https://howto.scnx-tutorials.de/type/role)

required: false

recommended: true

here, you can activate, if a user should get a reward after he claims all 24 prizes every day, this is optional, so you can choose if a user should get a role or not


---

**Allow users to see the calender message of the current day multiple times?**
![image](/img/modules/winter-holidays/allow.png)

type: [Boolean](https://howto.scnx-tutorials.de/type/boolean) (AKA True/False)

required: false

recommended: true

Here, you can activate if a user should be able to see the calendar message of the current day multiple times, if this is deactivated, then a user can only see the calendar message of the current day once, but if this is activated, then a user can see the calendar message of the current day multiple times.

---

**Randomize buttons hourly?**
![image](/img/modules/winter-holidays/randomize.png)

type: [Boolean](https://howto.scnx-tutorials.de/type/boolean) (AKA True/False)

required: false

recommended: false

Here, you can activate if the buttons of the calendar message should be randomized every hour, if this is activated, then the buttons of the calendar message will be randomized every hour, but if this is deactivated, then the buttons of the calendar message will not be randomized every hour.

---

**Day 1-24**
![image](/img/modules/winter-holidays/days.png)

type: [String](https://howto.scnx-tutorials.de/type/string) and [Role Select](https://howto.scnx-tutorials.de/type/role)

required: true

Here, you have to configure the message that the bot is going to send for each day, and you can also configure a role that the user will get if he claims the prize of that day, this is optional, so you can choose if a user should get a role or not. you can customize every message and role for each day, so you can have 24 different messages and 24 different roles, or you can have the same message and role for all days, it's up to you.

---

### [Message Examples for the Winter Holidays Module](https://howto.scnx-tutorials.de/message-examples/winter-holidays)