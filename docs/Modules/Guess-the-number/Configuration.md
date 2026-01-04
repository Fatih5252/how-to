---
title: Configuration
---

Here, you configugure the Guess the Number Module.

---

**Admin-Roles**
![image](/img/modules/guess-the-number/admin-roles.png)

type: [Role Select](https://howto.scnx-tutorials.de/type/role)

required: false

recommended: true

Here, you can select roles that should have access to the admin commands of the Guess the Number Module (/guess-the-number). If you don't select any roles here, well... no one can create a guess the number game.

---

**React with Lower / Higher reactions**
![image](/img/modules/guess-the-number/react.png)

type: [Boolean](https://howto.scnx-tutorials.de/type/boolean) (AKA True/False)

required: false

recommended: true

If you enable this, the bot will react to the guess message with a "⬆️" reaction if the guess was too low and with a "⬇️" reaction if the guess was too high. If you do not enable this option, the bot will only react with a "⛔" reaction if the guess was incorrect. and with a "✅" reaction if the guess was correct.

---

### [Message Examples for the Guess the Number Module](https://howto.scnx-tutorials.de/message-examples/guess-the-number)