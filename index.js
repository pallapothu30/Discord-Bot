import dotenv from "dotenv"
import { Client, Events, GatewayIntentBits, MessageActivityType } from 'discord.js';
dotenv.config();
const client = new Client({intents:[GatewayIntentBits.Guilds , GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent]})

client.on("messageCreate", message =>{
    if(message.author.bot)return;
    if(message.content.startsWith("create")){
        const url = message.content.split("create")[1];
        return message.reply({
            content : "Generating shorturl for" + url + " using bitly service / custom url shortener.",
        });
    }

    message.reply(`Hi from Bot ${client.user.username}`)

})

client.on("interactionCreate",(interaction)=>{
    console.log(interaction)
    interaction.reply("Wanna Play Ping Pong!");
})

client.login(process.env.DISCORD_TOKEN)