---
title: RSS-Notifications
---

:::info
In this module, you cannot set up unlimited Reddit notifications. There are limitations based on your plan:
- Starter plan: 3 RSS channels;
- Unlimited plan: 6 RSS channels;
- Professional plan: 16 Rss channels.

if you want more support systems then 16 channels, please contact the [Scootkit billing team](https://scootkit.com/#contact).
:::

Do you have a favorite website that provides an RSS feed, and you want to get notifications in your Discord server whenever there is a new update? With this module, you can do exactly that! You can set up RSS notifications for any website that provides an RSS feed, and the bot will send a notification to a specified channel whenever there is a new update. You can customize the notification message, and you can also choose to include the content of the RSS feed

---

**Channel**
![image](/img/modules/rss-notifications/channel.png)

type: [Channel Select](https://howto.scnx-tutorials.de/type/channel)

required: true

Here, you have to select the channel where the bot should send the notifications. The bot will send a notification to this channel whenever there is a new update in the RSS feed.

---

RSS / Atom Feed URL
![image](/img/modules/rss-notifications/url.png)

type: [String](https://howto.scnx-tutorials.de/type/string) (AKA Text Input)

required: true

Here, you have to enter the URL of the RSS or Atom feed that you want to get notifications for. Please make sure that the URL is correct and that it points to a valid RSS or Atom feed. Here is A RSS Validator that you can use to check if the URL is correct: https://www.rssboard.org/rss-validator/check.cgi

---

### [Message Examples for the RSS-Notifications module](https://scnx.app/import/config-template?key=cmoeq26xw0015d2q2bypbkuqw&source=marketplace)