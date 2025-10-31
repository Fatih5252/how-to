Here, you can configure the Module, this means you can setup on how the module should work. the Users get a role automaticly when they boost the server. They can edit the role (including name color and icon) with the /color-me manage command in the Discord server. please note that if you want to use a icon, that the Server needs to have at least boost level 2. if the Server dosn't have boost level 2, the icon will not be shown.

---

**Recreate roles**   
![image](/img/modules/color-me/recreate-roles.png)

type: [Boolean](https://howto.scnx-tutorials.de/type/boolean) (AKA True/False)

required: false

recommended: true

If you activate this option, the bot creates the role again, if the user boosts the server again after unboosting it.

---

**Separate roles in member-list**
![image](/img/modules/color-me/separate.png)

type: [Boolean](https://howto.scnx-tutorials.de/type/boolean) (AKA True/False)

required: false

recommended: false

If you activate this option, the Color-Me roles will be displayed separately in the member list. This means that the roles created by this module will appear in their own section. If you don’t enable this option, the roles will be shown in the member list like normal @everyone roles. This is not recommended, as it can look chaotic when many users each have their own role within a category.

---

**Remove role on unboost**
![image](/img/modules/color-me/remove-role.png)

type: [Boolean](https://howto.scnx-tutorials.de/type/boolean) (AKA True/False)

required: false

recommended: true

If you activate this option, the bot will remove the role when the user unboosts the server. If you don’t enable this option, the user will keep the role even after unboosting the server. This is not recommended, as it can lead to confusion when users have roles that they shouldn’t have anymore, but its up to you.

---

**Role update Cooldown**
![image](/img/modules/color-me/role-update-cooldown.png)

type: [Spinner](https://howto.scnx-tutorials.de/type/spinner) (AKA Number Input)

required: true

In here, you have to give a number in Hours. This number represents how often a user can update their role. For example, if you enter 24 here, the user can update their role every 24 hours. This is recommended to prevent spam (Discord API Spam) and unnecessary role updates.

---

**Role Position**
![image](/img/modules/color-me/position.png)

type: [Role select](https://howto.scnx-tutorials.de/type/role)

required: true

In here, you have to select a role. all roles that are created by this module will be placed under the role that you selected here. you can create for example a "--------------------" named role and select the role in the configuration so it looks more organized.