const { ForgeClient } = require("@tryforge/forgescript");
require('dotenv').config();
const express = require("express");
const app = express();
const PORT = 8080

app.get("/", async(req,res) => {
  res.send("Bot is online!")
})

app.get("/clean", (req, res) => {
  const { code } = req.query;
  if (!code) {
    return res.status(400).json({ error: "Missing 'code' parameter." });
  }
  // Remove code block markers (``` or ```lang) and trim whitespace
  const cleaned = code.replace(/^```[\w]*\n?|```$/g, '').trim();
  res.json({ output: cleaned });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})

const client = new ForgeClient({
    intents: ["GuildMessages","Guilds","MessageContent"],
    events: ["messageCreate","clientReady","interactionCreate"],
    prefixes: ["s!"]
})

client.login(process.env.TOKEN).catch(err => {
    console.error("Failed to login:", err);
    process.exit(1);
});

client.commands.load("./Commadns");
client.commands.load("./Events");
client.applicationCommands.load('./Slashes');