const { ForgeClient } = require("@tryforge/forgescript")
require('dotenv').config();
const express = require("express");
const app = express();

app.get("/", async(req,res) => {
  res.send("Bot is online!")
})

app.listen(5000, () => {})

const client = new ForgeClient({
    intents: ["GuildMessages","Guilds","MessageContent"],
    events: ["messageCreate","ready"],
    prefixes: ["s!"]
})

client.login(process.env.TOKEN).catch(err => {
    console.error("Failed to login:", err);
    process.exit(1);
});

client.commands.load("./Commadns");
client.events.load("./Events");