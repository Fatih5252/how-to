# Channel-Stats

With this Module, you can turn your channel name into stats in the Server, for example, you can show the total member count of your server in the channel name. this gets updated in a interval that you setup here ("Update-Inverval"), so you don't have to worry about updating it manually. The bot does it for you. you can also choose Channel Categories and Voice Channels for this module. so it really dosn't matter what type of channel you choose, the bot will update the name of the channel with the stats you want.

---

**Channel**
![image](/img/modules/channel-stats/channel.png)

type: [Channel Select](https://howto.scnx-tutorials.de/type/channel)

required: true

Here, you have to select a channel where the bot should update the name with the stats. As explained at the beginning of this page, you can choose any type of channel/category here, the bot will update the name of the channel or category with the stats you want.

---

**Channel-Name**
![image](/img/modules/channel-stats/channel-name.png)

type: [String](https://howto.scnx-tutorials.de/type/string)

required: true

Here, you have to give a name for the channel or the category, this channel will then get overwritten as the text you provided. if you want to use Server stats, then you can use the following placeholders to show the stats you want:

```
%userCount% - Total count of users on your server
%memberCount% - Total count of members (not bots) on your server
%onlineUserCount% - Total count of online (dnd or online status) users on your server
%channelCount% - Total count of channels on your server
%roleCount% - Total count of roles on your server
%botCount% - Count of Bots on your server
%dndCount% - Count of members (not bots) with DND as status
%onlineMemberCount% - Count of members (not bots) with online (and only online) as status
%awayCount% - Count of members (not bots) with away status
%offlineCount% - Count of members (not bots) with offline status
%guildBoosts% - Show how often this guild was boosted
%boostLevel% - Shows the current boost-level of this guild
%boosterCount% - Count of boosters on this guild
%emojiCount% - Count of emojis on this guild
%currentTime% - Current time and date
%userWithRoleCount-<ID>% - Count of members with a specific role (replace "<ID>" with an actual role-id)
%onlineUserWithRoleCount-<ID>% - Count of members with a specific role who are online (replace "<ID>" with an actual role-id)
```

---

**Update-Interval**
![image](/img/modules/channel-stats/update-interval.png)

type: [Spinner](https://howto.scnx-tutorials.de/type/spinner) (AKA Number Input)

required: true

Here, you have to put a number. this number will represent how often the bot should update the channel name with the stats you provided in minutes. for example, if you put 60 here, the bot will update the channel name every 60 minutes (1 hour).