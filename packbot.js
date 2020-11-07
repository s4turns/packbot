const Discord = require('discord.js');
const Enmap = require('enmap');
const fs = require('fs');
const client = new Discord.Client();
const config = require("./config.json");
client.config = config;

fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    const event = require(`./events/${file}`);
    let eventName = file.split(".")[0];
    client.on(eventName, event.bind(null, client));
  });
});

client.commands = new Enmap();

fs.readdir("./commands/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/${file}`);
    let commandName = file.split(".")[0];
    console.log(`[+] ${commandName} loaded!`);
    client.commands.set(commandName, props);
  });
});

client.on('ready', () => {
  console.log('PackBot is up and running motherfucker!');
  client.user.setActivity("!help");
});

//One liners
client.on('message', message => {
 if (message.author.bot) return;
 const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
 const command = args.shift().toLowerCase();
 if (command === 'pray') {message.reply('in nomine Patris, et filii, et spiritus sancti. amen!')}
 if (command === 'interdome') {message.reply('interdome? that nigga in #201337, he is so fucking 80s, he is listening to gg allen!!');}
 if (command === 'applegroo') {message.reply('he is the best builder there is, his knowledge of physics empowers his building skills.');}
 if (command === 'edibles') {message.reply(`enjoy some of these edibles`, {file: "https://media.giphy.com/media/GJ6SBog5lpi7u/giphy.gif" });}
 if (command === 'joint') {message.channel.send(`lights ${message.author.username} joint! smoke up broheim!`);}
 if (command === 'tax') {message.channel.send(`taxes? i think you better look at this`, {file: "http://i.imgur.com/mxrbcBX.jpg"});}
 if (command === 'dff') {message.channel.send(`DFF: Dobby the Faggot Ferret!!!1 <3 `, {file: "https://i.imgur.com/7nac3rM.jpg"});}
 if (command === 'bøtte') {message.channel.send(`hre enjoy this bøtte!`, {file: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Buckie.JPG/800px-Buckie.JPG"});}
 if (command === 'roll') {message.channel.send(`fuck yeah!! ${message.author.username} is rolling up that joint, be ready for the great passing!`, {file: "https://i.redd.it/klvo4ye5v7sz.jpg"});}
});

client.login(config.token);
