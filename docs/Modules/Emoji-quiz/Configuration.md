Here, you configure the Emoji Quiz module.

---

**Use custom Game-Questions?**
![image](/img/modules/emoji-quiz/custom-game-questions.png)

type: [boolean](https://howto.scnx-tutorials.de/type/boolean) (AKA True/False)

required: false

recommended: false

Here, if you activate this option, you have to upload your own game-questions [here](https://howto.scnx-tutorials.de/docs/Modules/Emoji-quiz/Custom-game-questions). If you activate this option but don't fill out any questions, the module will auto-disable itself. If you don't activate this option, the default game-questions from ScootKit will be used. this is not recommended because it could take too much time to setup all the questions on your own.

---

**Game-Channel**
![image](/img/modules/emoji-quiz/game-channel.png)

type: [Channel Select](https://howto.scnx-tutorials.de/type/channel)

required: true

Here, you have to select the channel where the Emoji Quiz game will take place. please be sure that the Channel is EMPTY!! if the channel is not empty, the module will not work. just delete all the messages inside the channel.

---

**Maximum amount of hints per user per hour**
![image](/img/modules/emoji-quiz/max-hints-first-letter.png)

type: [Spinner](https://howto.scnx-tutorials.de/type/spinner) (AKA Number Input)

required: true

Here, you must specify the maximum number of hints a user can use per hour. Please note that these hints only reveal the first letter of the word the bot will give. For example, if you enter 5, each user can use up to 5 hints per hour. If a user tries to use more hints than the allowed maximum, they will receive a message stating that they have reached the limit.

---

**Maximum amount of hints per user per hour**
![image](/img/modules/emoji-quiz/max-hints.png)

type: [Spinner](https://howto.scnx-tutorials.de/type/spinner) (AKA Number Input)

required: true

Here, you must specify the maximum number of hints a user can use per hour. These are real hints that the bot will provide. For example, if you enter 5, each user can use up to 5 hints per hour. If a user tries to use more hints than the allowed maximum, they will receive a message informing them that they have reached the limit.

---

**Maximum amount of skips per user per hour**
![image](/img/modules/emoji-quiz/max-skips.png)

type: [Spinner](https://howto.scnx-tutorials.de/type/spinner) (AKA Number Input)

required: true

Here, you must specify the maximum number of skips a user can use per hour. For example, if you enter 5, each user can skip up to 5 words per hour. If a user tries to skip more words than the allowed maximum, they will receive a message stating that they have reached the limit.

---

**Delete wrong guesses? (recommended)**
![image](/img/modules/emoji-quiz/delete-wrong-guesses.png)

type: [boolean](https://howto.scnx-tutorials.de/type/boolean) (AKA True/False)

required: false

recommended: true

Here, you have to decide whether the bot should delete wrong guesses or not. If you enable this option, the bot will delete any wrong guesses made by users. This is recommended to keep the game channel clean and organized. If you disable this option, all wrong guesses will remain in the channel.

---

**Enable Leaderboard**
![image](/img/modules/emoji-quiz/enable-leaderboard.png)

type: [boolean](https://howto.scnx-tutorials.de/type/boolean) (AKA True/False)

required: false

recommended: true

Here, you have to decide whether to enable the leaderboard feature or not. If you enable this option, the bot will keep track of users' scores and display a leaderboard. This is recommended to encourage competition among players. If you disable this option, no leaderboard will be maintained.

---

**Immunity roles**
![image](/img/modules/emoji-quiz/immunity-roles.png)

type: [Role Select](https://howto.scnx-tutorials.de/type/role)

required: false

recommended: false

Here, you can select roles that will be immune to the Emoji Quiz game. Users with these roles will not be able to skip, hint, or skip in the game. This is useful if you want to exclude certain users, such as moderators or administrators, from participating in the game, but in my perspective, this is not recommended because everyone has the right to play the game fairly. If no roles are selected, all users will be able to participate in the game. Please note that they are NOT immune against the 5 seconds minimum limit.

:::info
this option is only available in the Professional plan, please upgrade your plan if you want to use this option. here are more information about the SCNX plans: [Plans & Pricing](https://scnx.xyz/plans)
:::