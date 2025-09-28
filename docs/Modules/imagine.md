---
hide_table_of_contents: true
title: Imagine
---
# /Imagine

With /imagine you can create images with AI based on ChatGPT. Please note that this feature uses your AI Coins and is much more expensive than the [AI chat channel module](https://howto.scnx-tutorials.de/docs/modules/ai-chat-channel). Use it carefully. Generating an image with the size 1792x1024 costs 13 AI Coins, with the size 1024x1792 also 13 AI Coins, and with the size 1024x1024 costs 10 AI Coins.

**Enable Rate-Limit?**  
![Image](@site/static/img/modules/imagine/rate-limit.png)

Type: [Boolean](https://howto.scnx-tutorials.de/type/boolean) (AKA True/False)

Required: false

Recommended: true

If you enable this, you can set up a rate limit for users who use this command. This means you can configure both a time interval and a usage limit for how often a user can run the command. It is recommended to enable this, since every use consumes your AI Coins. Generating an image with the size 1792x1024 costs 13 AI Coins, 1024x1792 also costs 13 AI Coins, and 1024x1024 costs 10 AI Coins. You can disable this option, but be aware that doing so may lead to a significant loss of AI Coins.

**Timeframe (in minutes) (If you didn’t enable rate limit, then you can skip this.)**
![Image](@site/static/img/modules/imagine/timeframe.png)

Type: Spinner (AKA Number Input)

Required: true

Here, you can set how many times a user can use the command within a certain number of minutes. This setting works in minutes, so if you enter 20, it means 20 minutes. The recommended interval is 15 minutes.

**Maximal amounts of requests in the timeframe (If you didn’t enable rate limit, then you can skip this.)**
![Image](@site/static/img/modules/imagine/amount.png)

Type: Spinner (AKA Number Input)

Required: true

Here, you need to work with the timeframe that you set at the top. You can set a usage limit for the command per user. For example, if the timeframe is 15 minutes and the limit is 5 uses, then a user can only use the command 5 times within that 15-minute period. This is helpful for users who want to save AI Coins.

**Add download button?**  
![Image](@site/static/img/modules/imagine/download.png)

Type: [Boolean](https://howto.scnx-tutorials.de/type/boolean) (AKA True/False)

Required: false

Recommended: true

If enabled, a download button will be added every time a user runs the command. Clicking the button will take you to the link https://scnx-cdn.scootkit.net/... (the ... represents a randomly generated link that cannot be predicted), where the image will automatically download. This feature is useful and free for anyone who activates it.

### [Message Examples for the /Imagine module](https://howto.scnx-tutorials.de/message-examples/imagine)