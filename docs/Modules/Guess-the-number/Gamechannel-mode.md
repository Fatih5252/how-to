---
title: Gamechannel Mode
---

Here, you can activate Game Channel Mode. Game Channel Mode is a feature that allows admins to play the game as well. Admins don’t have to create a game manually, the bot automatically starts a new game when the current one ends.

---

**Enable Gamechannel mode?**
![image](/img/modules/guess-the-number/enable-gamechannel-mode.png)

type: [Boolean](https://howto.scnx-tutorials.de/type/boolean) (AKA True/False)

required: true (false if you don’t want to use Gamechannel mode)

If you enable this option, the bot will automatically create a new game in the same channel when the current game ends. This allows admins to play the game as well.

---

**Gamechannel**
![image](/img/modules/guess-the-number/gamechannel-channel.png)

type: [Channel Select](https://howto.scnx-tutorials.de/type/channel)

required: true (only if you enabled Gamechannel mode)

Here, you have to select the channel where the bot should create the Guess the Number games. The bot will automatically create a new game in this channel when the current game ends.

---

**Minimum number**
![image](/img/modules/guess-the-number/minimum-number.png)

type: [Spinner](https://howto.scnx-tutorials.de/type/spinner) (AKA Number Input)

required: true (only if you enabled Gamechannel mode)

Here, you have to enter the minimum number for the Guess the Number game. This is the lowest number that can be guessed in the game.

---

**Highest number**
![image](/img/modules/guess-the-number/highest-number.png)

type: [Spinner](https://howto.scnx-tutorials.de/type/spinner) (AKA Number Input)

required: true (only if you enabled Gamechannel mode)

Here, you have to enter the highest number for the Guess the Number game. This is the highest number that can be guessed in the game.