# Discord Bot RPC with Server Count
Show your Discord bot's server count on your profile using Discord RPC.

## Requirements
1. Your bot must be published and approved on [Top.gg](https://top.gg/bot/new).
2. You must use the [Top.gg API](https://docs.top.gg) in your bot process to post your server count to Top.gg.

## Setup
1. Clone the repo to your PC.
2. Install the NPM packages.
3. Create your `.env` file to use your [Top.gg API key](https://docs.top.gg/api/@reference/).
4. Customize your RPC data in `src/variables.json` to use [rich presence assets from your bot](https://discord.com/developers/applications) (`https://discord.com/developers/applications/:bot_id/rich-presence/assets`).
5. Save your `.env` and `src/variables.json` files.
6. Open your Discord desktop client.
7. Start the process using `node .` or use [PM2](https://pm2.keymetrics.io/) or equivalents.