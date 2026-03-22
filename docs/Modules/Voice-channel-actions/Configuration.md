---
title: Configuration
---

Here, you configure the Voice channel actions module.

---

**Assign roles to members connected to voice channels?**
![image](/img/modules/voice-channel-actions/assign-roles.png)

type: [Boolean](https://howto.scnx-tutorials.de/type/boolean) (AKA True/False)

required: false

recommended: false

If you enable this option, the bot will assign the selected roles to the users that are connected to a voice channel. The bot will remove the assigned roles when the user disconnects from the voice channel.

---

**Roles for users that are connected to voice channels**
![image](/img/modules/voice-channel-actions/roles.png)

type: [Role Select](https://howto.scnx-tutorials.de/type/role)

required: true (if you enabled the "Assign roles to members connected to voice channels?" option)

Here, you have to select the roles that should be assigned to the users that are connected to a voice channel. You can select multiple roles, and the bot will assign all of them to the users that are connected to a voice channel.
