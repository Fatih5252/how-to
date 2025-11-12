# Milestones

On this page, you can set up Milestones. This means that when a user reaches a specific number you define, the bot will send a custom message. For example, if you set 10 as a milestone and a user counts up to 10 correctly, the bot will automatically send a message. You can also choose to give out roles when a user reaches a milestone.

---

**Message count**
![](/img/modules/Count-game/message-count.png)

type: [Spinner](https://howto.scnx-tutorials.de/type/spinner) (AKA Number Input)

required: true

Here, you can specify the number that needs to be reached for the milestone. For example, if you enter 50, when a user counts up to 50 numbers correctly, the bot will trigger the milestone action.

---

**Roles**
![](/img/modules/Count-game/milestone-roles.png)

type: [Role Select](https://howto.scnx-tutorials.de/type/role)

required: false

recommended: false

In this section, you can select one or more roles that will be assigned to the user when they reach the specified milestone number. This is optional; if you don't want to assign any roles, you can leave this section empty.

---

## [Message Examples for the Count-Game Module](https://howto.scnx-tutorials.de/message-examples/count-game)