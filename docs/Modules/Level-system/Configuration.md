# Configuration

Here, you Configure the Level system module.

---

**Rest Level on leave**
![image](/img/modules/level-system/rest-level.png)

type: [Boolean](https://howto.scnx-tutorials.de/type/boolean) (AKA True/False)

required: false

recommended: true

If you enable this option, the bot will reset the level and XP of a user when they leave the server. If this is disabled, the bot will keep the level and XP of a user even if they leave the server, so if they join back, they will have the same level and XP as before.

---

**Enable maximum level?**
![image](/img/modules/level-system/enable-max-level.png)

type: [Boolean](https://howto.scnx-tutorials.de/type/boolean) (AKA True/False)

required: false

recommended: false

If you enable this option, you can set a maximum level that users can reach. If a user reaches the maximum level, they will not earn any more XP and will not level up anymore.

---

**maximum level**
![image](/img/modules/level-system/max-level.png)

type: [Spinner](https://howto.scnx-tutorials.de/type/spinner) (AKA Number input)

required: true (if you enabled the "Enable maximum level?" option)

Here, you can set the maximum level that users can reach. If you set this to 100, users will not be able to reach level 101 or higher. Please note that if you set a maximum level, the bot will not give any XP to users who have reached the maximum level, so they will not be able to level up anymore.

---

**Start with Level 0?**
![image](/img/modules/level-system/level-0.png)

type: [Boolean](https://howto.scnx-tutorials.de/type/boolean) (AKA True/False)

required: false

recommended: false

If you enable this option, users level will be displayed as 0, this is just a decoration, it doesn't change the actual level of the user, so if a user has 100 XP and are on level 2, the user will be displayed as level 0.

---

**Use User's Tags instead of their Mention in the Leaderboard-Channel-Embed**
![image](/img/modules/level-system/user-tag.png)

type: [Boolean](https://howto.scnx-tutorials.de/type/boolean) (AKA True/False)

required: false

recommended: false

If you enable this option, the bot will use the user's tag (e.g. User#1234) instead of their mention (e.g. @User) in the leaderboard channel embed. i can't recommend this option, because you can't easily click on the user's name to view their profile, but if you want to use this option, you can enable it.

---

**Cheats**
![image](/img/modules/level-system/cheats.png)

type: [Boolean](https://howto.scnx-tutorials.de/type/boolean) (AKA True/False)

required: false

recommended: FALSE OH HELL NAH DONT ACTIVATE THIS SHIT

If you enable this option, Admins can give other users XP and levels, they also can take away XP and levels from other users. please don't activate this option, because it can be easily abused by admins to give themselves or other users a lot of XP and levels, or to take away XP and levels from other users. if you want a fair level system don't even think about activating this option.

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

**cooldown**
![image](/img/modules/level-system/cooldown.png)

type: [Spinner](https://howto.scnx-tutorials.de/type/spinner) (AKA Number input)

required: true

Here, you can set the cooldown time in milliseconds for earning XP from sending messages. If you set this to 60000, users will only earn XP from sending a message once every 60 seconds. This is to prevent users from spamming messages to earn XP quickly. please note that the cooldown only applies to earning XP from sending messages, users can still earn XP from spending time in voice channels every minute. (you can use this website if you don't know how to convert time to milliseconds: https://www.convertunits.com/from/ms/to/s)

---

**Type of the leveling curve**
![image](/img/modules/level-system/type-leveling-curve.png)

type: [Options](https://howto.scnx-tutorials.de/type/options)

required: true

Here, you can choose the type of the leveling curve. The leveling curve determines how much XP is required to level up. here are all the options and the explanation of each option in the SCNX Docs: https://docs.scnx.xyz/docs/custom-bot/modules/community/levels/#level-curves

---

**Custom Level Formula**
![image](/img/modules/level-system/custom-level-formula.png)

type: [String](https://howto.scnx-tutorials.de/type/string) (AKA Text input)

required: true (if you selected "Custom formula (dangerous!)" as the type of the leveling curve)

Here, you can set a custom level formula if you selected "Custom formula (dangerous!)" as the type of the leveling curve. here: https://docs.scnx.xyz/docs/custom-bot/modules/community/levels/#level-simulator you can calculate the level formula and see how it works, but please be careful when using a custom level formula, because if you set a wrong formula, it can break the leveling system and users might not be able to level up anymore. if you don't know what you're doing, i would recommend to not use a custom level formula and just use one of the predefined leveling curves. (here are more informations about the custom level formula: https://docs.scnx.xyz/docs/custom-bot/modules/community/levels/#custom-level-curve)

---

**Blacklisted Channels**
![image](/img/modules/level-system/blacklisted-channels.png)

type: [Channel Select](https://howto.scnx-tutorials.de/type/channel)

required: false

recommended: it's in your choice

Here, you can select the channels where users will not earn XP for sending messages. If you select a channel here, users will not earn any XP for sending messages in that channel. If you select a Voice channel here, users can't earn any xp per minute. This is useful if you have channels where you don't want users to earn XP, such as a spam channel or a channel for memes.

---

**Blacklisted Roles**
![image](/img/modules/level-system/blacklisted-roles.png)

type: [Role Select](https://howto.scnx-tutorials.de/type/role)

required: false

recommended: it's in your choice

Here, you can select the roles that will not earn XP for sending messages. If a user has a role that is selected here, they will not earn any XP in any way. This is useful if you have roles that you don't want users to earn XP with, such as a muted role or a role for bots.

---

**XP Multiplication Roles**
![image](/img/modules/level-system/xp-multiplication-roles.png)

type: [Add Element](https://howto.scnx-tutorials.de/type/element)

required: false

recommended: it's in your choice

Here, you can add roles that have a higher multiplication factor then the other users/roles. For example, if you have a role called "VIP" and you set the multiplication factor for that role to 2, users with the "VIP" role will earn double XP for sending messages and spending time in voice channels. This is useful if you want to reward certain users or roles with more XP than others. You can add as many roles as you want with different multiplication factors.

---

**XP Multiplication Channels**
![image](/img/modules/level-system/xp-multiplication-channels.png)

type: [Add Element](https://howto.scnx-tutorials.de/type/element)

required: false

recommended: it's in your choice

Here, you can add channels that have a higher multiplication factor then the other channels. For example, if you have a channel called "general" and you set the multiplication factor for that channel to 2, users will earn double XP for sending messages in that channel. This is useful if you want to reward certain channels with more XP than others. You can add as many channels as you want with different multiplication factors.

---

**Leaderboard-Sort-Category**
![image](/img/modules/level-system/leaderboard-sort.png)

type: [Options](https://howto.scnx-tutorials.de/type/options)

required: true

Here, you can choose the category by which the leaderboard will be sorted. The options are "Level" and "XP". If you select "Level", the leaderboard will be sorted by level, if you select "XP", the leaderboard will be sorted by XP.

---

**Live Leaderboard-Channel**
![image](/img/modules/level-system/live-leaderboard.png)

type: [Channel Select](https://howto.scnx-tutorials.de/type/channel)

required: false

recommended: true

Here, you can select a channel where the bot will send a message with the current leaderboard. The message will be updated every 5 minutes. This is useful if you want to have a live leaderboard in a channel, so users can see their progress and compare it with others. If you don't want to have a live leaderboard, you can leave this option empty and users can still view the leaderboard by using the `/leaderboard` command.

:::tip
please select a channel that is empty and not used for regular conversations, because the bot will edit the message with the leaderboard every 5 minutes, so if there are a lot of messages in the channel.
:::

---

**Maximum amount of users displayed in live leaderboard Channel**
![image](/img/modules/level-system/max-users-live-leaderboard.png)

type: [Spinner](https://howto.scnx-tutorials.de/type/spinner) (AKA Number input)

required: true (if you enabled the "Live Leaderboard-Channel" option)

Here, you can set the maximum amount of users that will be displayed in the live leaderboard channel. If you set this to 10, only the top 10 users will be displayed in the live leaderboard channel.

---

**Level Reward roles**
![image](/img/modules/level-system/level-reward-roles.png)

type: [Add Element](https://howto.scnx-tutorials.de/type/element)

required: false

recommended: it's in your choice

Here, you can add roles that will be given to users when they reach a certain level. For example, if you have a role called "Level 10" and you set the level requirement for that role to 10, users will receive the "Level 10" role when they reach level 10. In the integer field, you have to enter a level and in the role select field, you have to select a role that will be given to users when they reach that level. You can add as many level reward roles as you want with different level requirements and different roles.

---

**Only keep highest Level-Role**
![image](/img/modules/level-system/highest-role.png)

type: [Boolean](https://howto.scnx-tutorials.de/type/boolean) (AKA True/False)

required: false

recommended: true

If you enable this option, users will only keep the highest level reward role they have. For example, if a user has the "Level 10" role and they reach level 20 (if the level 20 role is configured), they will receive the "Level 20" role, but they will lose the "Level 10" role. If this option is disabled, users will keep all level reward roles they have, so in the previous example, the user would keep both the "Level 10" and "Level 20" roles.

---

**Which Level-Up-Messages should get sent?**
![image](/img/modules/level-system/level-up-message.png)

type: [Options](https://howto.scnx-tutorials.de/type/options)

required: true

Here, you can choose which level up messages should be sent. The options are "all", "only-role-rewards" and "none", if you select "all", the bot will send a message in the channel where the user leveled up, if you select "only-role-rewards", the bot will only send a message in the channel where the user leveled up if the user received a role reward for leveling up, if you select "none", the bot will not send any messages when a user levels up. please note that if you select "only-role-rewards" and you don't have any level reward roles configured, then no messages will be sent when users level up.

---

**Level-Up-Channel**
![image](/img/modules/level-system/level-up-channel.png)

type: [Channel Select](https://howto.scnx-tutorials.de/type/channel)

required: true (if you selected: "all" or "only-role-rewards" in "Which Level-Up-Messages should get sent?" and you didn't select "none")

Here, you can select the channel where the bot will send the level up messages. If you selected "all" or "only-role-rewards" in "Which Level-Up-Messages should get sent?" and you didn't select "none", then you can select a channel here, where the bot will send the level up messages when a user levels up. if you don't select any channel here, the Level-Up Messages won't be sent, even if you selected "all" or "only-role-rewards" in "Which Level-Up-Messages should get sent?" and you didn't select "none".

---

**Random messages**
![image](/img/modules/level-system/random-messages.png)

type: [Boolean](https://howto.scnx-tutorials.de/type/boolean) (AKA True/False)

required: false

recommended: true

If you enable this option, the bot will send a random message that you configure here: https://scnx.app/glink?page=bot/configuration?file=levels|configs/random-levelup-messages when a user levels up. If this is disabled, the bot will send the same message that you configured every time a user levels up. You can customize the messages here: https://scnx.app/glink?page=bot/configuration?file=levels|configs/strings.