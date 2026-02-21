---
title: Roles
---

Here, you can see all the roles that are used in the Role nicknames module. If you want more roles nicknames, you can add a new config element. just click on the "Add new Config-Element" button. You can add as many roles as you want, but keep in mind that the bot will change the nickname of all users that have the selected role to the name of the role. So if you have a lot of users with the same role, it can cause a lot of nickname changes and can be confusing for the users. So please only add roles that are necessary for your server.

---

**Role**
![image](/img/modules/role-nicknames/role.png)

type: [Role Select](https://howto.scnx-tutorials.de/type/role)

required: true

Here, you have to select the role that should have a nickname. The bot will then change the nickname of the users that have this role to the name of the role.

---

**Prefix**
![image](/img/modules/role-nicknames/prefix.png)

type: [String](https://howto.scnx-tutorials.de/type/string)

required: true and false (if you want to have a prefix, then this is required, but if you want to have a suffix, then this is not required)

Here, you can add a prefix to the nickname of the users that have the selected role. The prefix will be added before the name of the role. For example, if you have a role called "Admin" and you add a prefix "Mr.", then the nickname of the users that have the "Admin" role will be "Mr. Admin".

---

**Suffix**
![image](/img/modules/role-nicknames/suffix.png)

type: [String](https://howto.scnx-tutorials.de/type/string)

required: true and false (if you want to have a suffix, then this is required, but if you want to have a suffix, then this is not required)

Here, you can add a suffix to the nickname of the users that have the selected role. The suffix will be added after the name of the role. For example, if you have a role called "Admin" and you add a suffix "Sr.", then the nickname of the users that have the "Admin" role will be "Admin Sr.".