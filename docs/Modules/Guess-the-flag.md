---
title: Guess the Flag
---
# Guess the Flag!

:::info
Used flags are Public Domain, provided by Flagpedia and Wikimedia Commons. Inclusion of countries in this dataset is not a political statement of ScootKit - it's just a game, don't take this to seriously.
:::

In this module, users have to guess the country based on the flag shown. The module will display a flag, and users can submit their guesses. If a user guesses correctly, they earn points. The game continues with new flags.

---

**Game-Channel**
![image](/img/modules/guess-the-flag/channel.png)

type: [Channel Select](https://howto.scnx-tutorials.de/type/channel)

required: true

Here, you have to select the channel where the Guess the Flag game will take place. please be sure that the Channel is EMPTY!! if the channel is not empty, the module will not work. just delete all the messages inside the channel.

---

**Maximum amount of hints per user per hour**
![image](/img/modules/guess-the-flag/max-hints-first-letter.png)

type: [Spinner](https://howto.scnx-tutorials.de/type/spinner) (AKA Number input)

required: true

Here, you can set the maximum amount of hints a user can request per hour. Hints will reveal the first letter of the country's name.

---

**Maximum amount of skips per user per hour**
![image](/img/modules/guess-the-flag/max-skips.png)

type: [Spinner](https://howto.scnx-tutorials.de/type/spinner) (AKA Number input)

required: true

Here, you can set the maximum amount of skips a user can use per hour. Skipping will reveal the correct answer and move on to the next flag.

---

**Delete wrong guesses (recommended)**
![image](/img/modules/guess-the-flag/delete-wrong-guesses.png)

type: [Boolean](https://howto.scnx-tutorials.de/type/boolean) (AKA True/False)

required: false

recommended: true

If you enable this option, the Bot will delete all the wrong guesses made by users. This helps to keep the game channel clean and focused on the current flag and not some wrong messages.

---

**Miinimum difficulty**
![image](/img/modules/guess-the-flag/min-difficulty.png)

type: [Spinner](https://howto.scnx-tutorials.de/type/spinner) (AKA Number input)

required: true

Here, you have to set the minimum difficulty range of the flags that will be used in the game. If you enter 3 here, any flag with a difficulty of 2 or 1 will not be displayed. If you enter, for example, 4, any flag with a difficulty of 3, 2 or 1 will not be displayed. You can also work with the "Maximum Difficulty" option here. If you set anything outside the range of 1–5, the module will not work.

---

**Maximum difficulty**
![image](/img/modules/guess-the-flag/max-difficulty.png)

type: [Spinner](https://howto.scnx-tutorials.de/type/spinner) (AKA Number input)

required: true

Here, you have to set the maximum difficulty range of the flags that will be used in the game. If you enter 4 here, any flag with a difficulty of 5 will not be displayed. If you enter, for example, 3, any flag with a difficulty of 4 or 5 will not be displayed. You can also work with the "Minimum Difficulty" option here. If you set anything outside the range of 1–5, the module will not work.

---

**Enable leaderboard**
![image](/img/modules/guess-the-flag/leaderboard.png)

type: [Boolean](https://howto.scnx-tutorials.de/type/boolean) (AKA True/False)

required: false

recommended: true

If you enable this option, the module will keep track of users scores and display a leaderboard. If you want to see the leaderboard, you can view it in the game channel, there will be a new button called "🏅 View Leaderboard". When you press it, the leaderboard will be displayed in a new message.

---

**Immunity roles**
![image](/img/modules/guess-the-flag/immunity-roles.png)

type: [Role Select](https://howto.scnx-tutorials.de/type/role)

required: false

recommended: false

Here, you can select roles that will be immune to the Guess the Flag game. Users with these roles will not be able to skip or first letter action in the game. This is useful if you want to exclude certain users, such as moderators or administrators, from participating in the game, but in my perspective, this is not recommended because everyone has the right to play the game fairly. If no roles are selected, all users will be able to participate in the game. Please note that they are NOT immune against the 5 seconds minimum limit.

:::info
this option is only available in the Professional plan, please upgrade your plan if you want to use this option. here are more information about the SCNX plans: [Plans & Pricing](https://scnx.xyz/plans)
:::