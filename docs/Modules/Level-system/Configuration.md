# Configuration

Here, you Configure the Level system module.

---

**XP given at least for messages**
![image](/img/modules/level-system/xp-for-messages.png)

type: [Spinner](https://howto.scnx-tutorials.de/type/spinner) (AKA Number input)

required: true

Here, you can set the minimum amount of XP that a user gets for sending a message. If you set this to 1, users will earn 1 XP every message they sent.

---

**XP given at most for messages**
![image](/img/modules/level-system/xp-for-messages-max.png)

type: [Spinner](https://howto.scnx-tutorials.de/type/spinner) (AKA Number input)

required: true

Here, you can set the maximum amount of XP that a user gets for sending a message. If you set this to 5, users will earn at most 5 XP every message they sent. The actual amount of XP a user gets for sending a message is randomly generated between the minimum and maximum value.

---

**XP given per Voice minute**
![image](/img/modules/level-system/xp-for-voice.png)

type: [Spinner](https://howto.scnx-tutorials.de/type/spinner) (AKA Number input)

required: true

Here, you can set the amount of XP that a user gets for every minute they spend in a voice channel. If you set this to 2, users will earn 2 XP every minute they spend in a voice channel. please note that if they are alone in the voice channel, they will not earn any XP, this is to prevent users from farming XP by just joining a voice channel and doing nothing.

---

