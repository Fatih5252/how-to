---
title: Custom Game Questions
---

:::caution did you activate this option yet?
Before you can add your custom game-questions, you have to activate the "Use custom Game-Questions?" option in the [Configuration](https://howto.scnx-tutorials.de/docs/Modules/Emoji-quiz/Configuration) of the Emoji Quiz module. If you don't activate this option, the module will use the default game-questions from ScootKit.
:::

Here, you can add your own custom game-questions for the Emoji Quiz module.

---

**Prompt (= Emojis)**
![image](/img/modules/emoji-quiz/prompt.png)

type: [String](https://howto.scnx-tutorials.de/type/string)

required: true

Here, you have to enter the emojis that will be used as the prompt for the game-question. You can use multiple emojis to create a more complex prompt. For example, if the answer is "Pizza", you can use the emojis 🍕🧀🍅 to represent the ingredients of a pizza.

---

**Hint (optional)**
![image](/img/modules/emoji-quiz/hint.png)

type: [String](https://howto.scnx-tutorials.de/type/string)

required: false

recommended: true

Here, you can enter a hint that will be provided to the users if they request one. This hint should help the users to guess the correct answer. For example, if the answer is "Pizza", you can use the hint "A popular Italian dish".

---

**Solution**
![image](/img/modules/emoji-quiz/solution.png)

type: [String](https://howto.scnx-tutorials.de/type/string)

required: true

Here, you have to enter the correct answer for the game-question. This is the word that the users have to guess based on the emojis provided in the prompt. For example, if the prompt is 🍕🧀🍅, the solution would be "Pizza".