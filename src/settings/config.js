require("dotenv").config();
const { customFilter } = require("poru");
const { Spotify } = require("poru-spotify");

const spotify = new Spotify({
    clientID: "6c31645ffb004ab8b44d06f7b96d1b66",
    clientSecret: "3618fdc0b4824cfd91a8d425dac32987",
});

module.exports = {
    // BOT DETAILS
    token: process.env.TOKEN || " ", // your bot token
    prefix: process.env.PREFIX || "&", // your bot prefix "for owner message command"
    color: process.env.EMBED_COLOR || "#ce0406", // your embeded hex color
    owner: process.env.OWNER_ID || "665165194850336778", // your bot Owners ID
    guildLogs: process.env.GUILD_LOGS || "958902667994878003", // your server join left logs Channel ID
    leaveTimeout: process.env.LEAVE_TIMEOUT || "60000", // set leave TimeOut when bot was alone 1000 = 1sec
    disablePremium: parseBoolean(process.env.DISABLE_PREMIUM || "false"), // disable premium command

    // PORU DETAILS
    playSource: process.env.PLAY_SOURCE || "ytmsearch", // recomended using "ytmsearch" or "spotify". You can change this to: "ytsearch" / "ytmsearch" / "scsearch" / "spotify". More? Use Lavasrc plugin.
    poruOptions: {
        customFilter,
        library: "discord.js", // This source made by using discord.js, so don't even try to change this thing :)
        plugins: [spotify], // Enable spotify link to be readable by poru without using LavaSrc plugin.
        reconnectTries: Infinity, // total attemps to try if reconnect failed. you can change it to "Infinity" for unlimited attemps.
        reconnectTimeout: 10000, // total time to try reconnect in ms. 1000 = 1sec
    },
    nodes: [
        {
            name: "Lunox", // lavalink node name (anything you want)
            host: "lavalink.invalid-studios.com", // lavalink host
            port: "2333", //lavalink port
            password: "invaliduser", //lavalink pass/auth
            secure: parseBoolean("false"), //lavalink secure "true/false"
        },
    ],

    // LINK DETAILS
    mongoUri: process.env.MONGO_URI || "mongodb+srv://agilmargautama:sudahada28H@anonim28sudahada28H.cnpodlb.mongodb.net/" --apiVersion 1 --username agilmargautama", // your MongoDB Url
    supportUrl: process.env.SUPPORT_URL || "https://discord.gg/anotherworldserver", // your Support Server Link
    inviteUrl: process.env.INVITE_URL || "https://discord.com/api/oauth2/authorize?client_id=1148829424796569792&permissions=8&scope=bot", // your Bot Invite Link
    imageUrl: process.env.IMAGE_URL || "https://media.discordapp.net/attachments/571068093493805067/1149715926757945354/images_1_13.jpg", // your Bot Banner Imange Link to use on "help" & "about" command
};

function parseBoolean(value) {
    if (typeof value === "string") {
        value = value.trim().toLowerCase();
    }
    switch (value) {
        case true:
        case "true":
            return true;
        default:
            return false;
    }
}
