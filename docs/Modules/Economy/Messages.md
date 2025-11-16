# Messages

On this page, its more about editing messages for the Economy Module. You can customize various messages that the bot sends in response to different actions related to the Economy system. This allows you to tailor the bot's communication to better fit the theme and tone of your server.

---

**item string**
![image](/img/modules/economy/item-string.png)

type: [String](https://howto.scnx-tutorials.de/type/string)

required: true

Here, you can edit the message of the shop message that shows the items in the shop. You can use the following placeholders to show the stats you want:

```
%id% - Id of the item
%itemName% - Name of the item
%price% - Price of the item
%sellcount% - Count of the sales of the item
```

---

**workSuccess**    
![image](/img/modules/economy/work-success.png)

type: [Add Fields](https://howto.scnx-tutorials.de/type/Add-Fields)

required: true

Here, you can edit the message that the bot sends when a user successfully works and earns money. You can use the following placeholders to show the stats you want:

```
%earned% - Money that the user had earned
```

---

**crimeSuccess**   
![image](/img/modules/economy/crime-success.png)

type: [Add Fields](https://howto.scnx-tutorials.de/type/add-fields)

required: true

Here, you can edit the message that the bot sends when a user successfully commits a crime and earns money. You can use the following placeholders to show the stats you want:

```
%earned% - Money that the user had earned
```

---

**crimeFail**    
![image](/img/modules/economy/crime-fail.png)

type: [Add Fields](https://howto.scnx-tutorials.de/type/add-fields)

required: true

Here, you can edit the message that the bot sends when a user fails to commit a crime and loses money. You can use the following placeholders to show the stats you want:

```
%loose% - Money that the user looses
```

---

**leaderboardEmbed**
![image](/img/modules/economy/leaderboard-embed.png)

type: [Embed](MUSS EDITIERT WERDEN)

required: true

Here, you can edit the message the leaderboard embed that the bot sends. you can edit the embed as your want, you can even add a thumbnail and a picture to the embed. you can even change the color and the title of the embed!

---

**deposit message**
![image](/img/modules/economy/deposit-message.png)

type: [String](https://howto.scnx-tutorials.de/type/string)

required: true

Here, you can edit the message that the bot sends when a user deposits money into their bank account. You can use the following placeholders to show the stats you want:

```
