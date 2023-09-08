<p align="center">
<img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&height=200&section=header&text=TOKYO&fontSize=80&fontAlignY=35&animation=twinkling&fontColor=gradient"/> 
</p>

<p align="center"> 
  <a href="https://ko-fi.com/adh319" target="_blank"> <img src="https://media.discordapp.net/attachments/571068093493805067/1149715926757945354/images_1_13.jpg"/> </a>
</p>

<p align="center"> 
  <a href="https://discord.gg" target="_blank"> <img src="https://discordapp.com/api/guilds/1056011738950156359/widget.png?style=banner2"/> </a>
</p>

# 📒 Table of Contents

[Features](#-features) • [Requirements](#-requirements) • [Installation](#-installation) •
[Configuration & Starting](#-configuration--starting). 

#

## 📢 Features

-   ☑️ Used Poru v4 Lavalink Client
-   ☑️ Slash Commands
-   ☑️ Prefix Commands **[Owner Only]**
-   ☑️ Dev/Maintenance Mode System **[Owner Only]**
-   ☑️ Music System
-   ☑️ Configurable Premium System **[You can enable/disable it]**
-   ☑️ Custom Filters **[8D, EarRape, Nighcore, Slowmode, Vaporwave]** More? **[Deal With It]**
-   ☑️ 24/7 in Voice Channel
-   ☑️ AutoPlay **[YouTube Only]**
-   ☑️ Clean UI
-   ☑️ Easy to use
-   ☑️ And Many More...!

## 🎵 Supported Platforms

-   ☑️ Youtube
-   ☑️ Youtube Music
-   ☑️ Spotify **[Link only]**
-   ☑️ SoundCloud
-   ☑️ Twitch
-   ☑️ Bandcamp
-   ☑️ Vimeo
-   ☑️ Local Files
-   ☑️ Https **[Radio]**

## 📌 Requirements

-   Node.js v18 or higher
-   MongoDB v5.0.x or higher **[For Local Database]**
-   Java 17 or higher
-   Discord Bot Token **[Guide](https://discordjs.guide/preparations/setting-up-a-bot-application.html#creating-your-bot)**
-   LavaLink v3.7.x **[Guide](https://github.com/lavalink-devs/Lavalink)**

## 🎶 More Support Audio Platforms

**☑️ [LavaSrc](https://github.com/topi314/LavaSrc)**

-   Spotify [ spsearch ]
-   Deezer [ dzsearch ]
-   Apple Music [ amsearch ]
-   Yandex Music [ ymsearch ]

**☑️ [skybot-lavalink-plugin](https://github.com/DuncteBot/skybot-lavalink-plugin)**

-   Mixcloud
-   Ocremix
-   Clyp
-   Reddit
-   Getyarn
-   TikTok
-   Po\*nHub
-   Soundgasm

## 📝 Installation

```
git clone --single-branch --branch master https://github.com/Enour-Dev/Lunox.git
cd Lunox
npm install
```

## 🚀 Configuration & Starting

Rename `.env.example` to `.env` and fill out these values. You can find the details on `/src/settings/config.js` and make configration there
too (you choose):

```
#########################################
## SEE THE DETAILS ON "/SRC/SETTINGS/CONFIG.JS" FILE ##
#########################################

#BOT DETAILS
TOKEN = #Your bot token
PREFIX = #Your bot prefix
EMBED_COLOR = #Your bot embed color
OWNER_ID = #Your discord id
GUILD_LOGS = #Your guild channel id for logs
LEAVE_TIMEOUT = 60000 #Time in ms to leave the voice channel after the last user leaves
DISABLE_PREMIUM = false #Disable premium system

#PORU DETAILS
PLAY_SOURCE = ytmsearch #Default source to play the searched songs (ytmsearch, ytsearch, scsearch, or spotify). More? Use LavaSrc plugin
SPOTIFY_ID = #Spotify client id
SPOTIFY_SECRET = #Spotify client secret
NODE_NAME = Lunox #Name of the lavalink, could be anything
NODE_HOST = localhost #Host of the lavalink
NODE_PORT = 2333 #Port of the lavalink
NODE_PASSWORD = youshallnotpass #Password of the lavalink
NODE_SECURE = false #If the lavalink is using ssl use "true"

#LINK DETAILS
MONGO_URI = #Your mongodb uri (mongodb+srv://<username>:<password>@<db_cluster_url>/<db_name>)
SUPPORT_URL = #Your support server invite link
INVITE_URL = #Your bot invite link
IMAGE_URL = #Any direct image link
```

After installation & finished all needed configuration, you can start the bot by either using `npm start` or `node src/sharder.js`.

## 🔐 Licensed

Distributed under the `MIT License`. See [`LICENSE`](ANonim) for more information.

## THANKS

Also make sure to give a **⭐** to this project if you like it 😉!
