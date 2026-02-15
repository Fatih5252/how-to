---
title: Configuration
---

# Configuration

Here, you configure the Massrole module.

---

**adminRoles**
![image](/img/modules/massrole/admin-roles.png)

type: [Role Select](https://howto.scnx-tutorials.de/type/role)

required: true

Here, you have to select the roles that are allowed to use the massrole commands. If you want to allow everyone to use the commands, you can select the "@everyone" role. But please don't do that. This is a very powerful module, and if you allow everyone to use it, it can cause a lot of problems. So please select a admin role. The admins have then access to these commands: `/massrole add`, `/massrole remove` and `/massrole remove-all`.