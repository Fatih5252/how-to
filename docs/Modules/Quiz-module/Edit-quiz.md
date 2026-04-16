---
title: Edit quiz
---

In this Config Page, you can Create and Edit Quizzes. You can edit a quiz by typing the Question or statement in the "Question or statement" option.

---

**Question or statement**
![image](/img/modules/quiz-module/question-or-statement.png)

type: [String](https://howto.scnx-tutorials.de/type/string) (AKA Text Input)

required: true

Here, you have to type the question or statement of the quiz. This is the main part of the quiz, and it will be shown to the users when they participate in the quiz. If you want to edit a quiz or statement, you just have to type the exact same question or statement of the quiz that you want to edit, and then you can change the other options to edit the quiz. If you want to create a new quiz, you have to type a question or statement that is not used in any other quiz.

---

**Time Limit**
![image](/img/modules/quiz-module/time-limit.png)

type: [String](https://howto.scnx-tutorials.de/type/string) (AKA Text Input)

required: true

Here, you can set a time limit for the quiz. This means that users will only have a certain amount of time to answer the quiz after the bot sent the question or statement. You can set this to any amount of time you like, but I recommend that you set it to at least 30 seconds, so that users have enough time to think about their answer. to setup a time limit, you have to follow the [Orders Of Magnitude time](https://en.wikipedia.org/wiki/Orders_of_magnitude_(time)) rule, which means that you have to type a number followed by a time unit. The time units that you can use are: s for seconds, m for minutes, h for hours and d for days. For example, if you want to set a time limit of 1 minute, you have to type "1m". If you want to set a time limit of 30 seconds, you have to type "30s". If you want to set a time limit of 2 hours, you have to type "2h". If you want to set a time limit of 1 day, you have to type "1d".

---

**Correct answers**
![image](/img/modules/quiz-module/correct-answers.png)

type: [Add Field](https://howto.scnx-tutorials.de/type/add-field)

required: true

Here, you can add the correct answers for the quiz. You can add as many correct answers as you want, and users will get the quiz right if they type any of the correct answers. To add a correct answer, you have to click on the "Add Field" button, and then you can type the correct answer in the new field that appears.

---

**Wrong answers**
![image](/img/modules/quiz-module/wrong-answers.png)

type: [Add Field](https://howto.scnx-tutorials.de/type/add-field)

required: true

Here, you can add the wrong answers for the quiz. You can add as many wrong answers as you want, and users will get the quiz wrong if they type any of the wrong answers. To add a wrong answer, you have to click on the "Add Field" button, and then you can type the wrong answer in the new field that appears.
