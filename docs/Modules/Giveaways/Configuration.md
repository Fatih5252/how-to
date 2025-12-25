Here, you configure the Giveaways Module.

---

**Giveaway-Requirements-Bypass-Roles**
![image](/img/modules/giveaways/bypass-roles.png)

type: [Role Select](https://howto.scnx-tutorials.de/type/role)

required: false

recommended: it depends

Here, you can select roles that will bypass the giveaway requirements. Members with these roles will be able to join giveaways even if they do not meet the specified requirements. This is useful for allowing certain members, such as moderators or VIPs, to participate in giveaways without restrictions.

---

**Message-Count-Mode**
![image](/img/modules/giveaways/message-count.png)

type: [Options](https://howto.scnx-tutorials.de/type/options)

required: true

Here, you have to select one of the three options: "all", "Blacklist" or "Whitelist". This option determines where the messages should count, if you select all, all messages in the guild will count towards the giveaway requirements. If you select Whitelist, only messages in the channels you specify in the "Whitelist" option will count. If you select Blacklist, messages in the channels you specify in the "Blacklist" option will NOT count.

---

**Blacklist**
![image](/img/modules/giveaways/blacklist.png)

type: [Channel Select](https://howto.scnx-tutorials.de/type/channel)

required: false (true if you selected "Blacklist" in the "Message-Count-Mode" option)

Here, you can select channels where messages will NOT count towards the giveaway requirements. This option is only applicable if you selected "Blacklist" in the "Message-Count-Mode" option. Members can send messages in these channels without affecting their eligibility for giveaways.

---

**Whitelist**
![image](/img/modules/giveaways/whitelist.png)

type: [Channel Select](https://howto.scnx-tutorials.de/type/channel)

required: false (true if you selected "Whitelist" in the "Message-Count-Mode" option)

Here, you can select channels where messages WILL count towards the giveaway requirements. This option is only applicable if you selected "Whitelist" in the "Message-Count-Mode" option. Members need to send messages in these channels to meet the eligibility criteria for giveaways.

---

**Multiple Entries**
![image](/img/modules/giveaways/multiple-entries.png)

type: [Add Element](https://howto.scnx-tutorials.de/type/element)

required: false (true if you want this)

Here, you can allow roles to have multiple entries in giveaways. You can specify roles and the number of additional entries they receive. For example, if a role is given 2 additional entries, members with that role will have a total of 3 entries (1 base entry + 2 additional entries) in the giveaway. This increases their chances of winning. please note that if you do multiple entries for users that invite others, is against Discord ToS and can get your bot banned. pleae don't use this feature for invite giveaways.

---

**Entry denied roles**
![image](/img/modules/giveaways/entry-denied-roles.png)

type: [Role Select](https://howto.scnx-tutorials.de/type/role)

required: false

Here, you can select roles that will be denied entry to giveaways. Members with these roles will not be able to participate in any giveaways, regardless of whether they meet the other requirements. This is useful for excluding certain members, such as bots or specific user groups, from entering giveaways.

---

**Win roles**
![image](/img/modules/giveaways/win-roles.png)

type: [Role Select](https://howto.scnx-tutorials.de/type/role)

required: false

recommended: it's in your choice

Here, you can select roles that the winners of giveaways will automatically receive. When a member wins a giveaway, they will be granted the selected roles in addition to any prizes they may have won. This is useful for rewarding winners with special roles that may grant them additional privileges or recognition within the server. Please note that if you reroll a giveaway, the roles will not be removed from the previous winners.


---

**Send DM-message to winner**
![image](/img/modules/giveaways/dm-winner.png)

type: [Boolean](https://howto.scnx-tutorials.de/type/boolean) (AKA True/False)

required: false

recommended: true

Here, you can choose whether to send a direct message (DM) to the winners of giveaways. If set to true, the bot will automatically send a DM to each winner notifying them of their win and providing any necessary information about claiming their prize. If set to false, winners will not receive a DM from the bot. It is generally recommended to enable this option to ensure winners are informed about their prizes.
