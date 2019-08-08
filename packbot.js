const Discord = require('discord.js');
const client = new Discord.Client();
const config = require("./config.json");

client.on('ready', () => {
  console.log('PackBot is up and running motherfucker!');
  client.user.setActivity("Type !help");
});

client.on('message', msg => {
  if (msg.author.bot) return;
  if (msg.content === '!pack') {
    msg.channel.send("`\\|/\\|/ ` **listen up... public announcement**: Pick it, Pack it, just be ready for a chan wide toke-out in 30 seconds. `\\|/\\|/`");
    setTimeout(() => {
      msg.channel.send("`\\|/\\|/` Ladies & Gents, get your __BOWLS, BONGS, DAB RIGS__ **READY**! `\\|/\\|/`")
      setTimeout(() => {msg.channel.send("`\\|/\\|/\\|//\\|/\\|/\\|/` 5 `\\|/\\|/\\|//\\|/\\|/\\|/`")}, 1500);
      setTimeout(() => {msg.channel.send("`\\|/\\|/\\|/\\|/`4 `\\|/\\|/\\|/\\|/`")}, 2500);
      setTimeout(() => {msg.channel.send("`\\|/\\|/\\|/`3 `\\|/\\|/\\|/`")}, 3500);
      setTimeout(() => {msg.channel.send("`\\|/\\|/`2 `\\|/\\|/`")}, 4500);
      setTimeout(() => {msg.channel.send("`\\|/`1 `\\|/`")}, 5500);
      setTimeout(() => {msg.channel.send("SYNCHRONIZED! `\\|/\\|/` FIRE UP YOUR DANK SHIT!! `\\|/\\|/`")}, 6500);
    }, 30000);
  }
});

client.on('message', msg => {
  if (msg.author.bot) return;
  if (msg.content === '!rounds') {
    msg.channel.send("`Everyone get your drinks ready! We are doing shots in 30 secs!!`");
    setTimeout(() => {
      msg.channel.send("`00000100|0x04| .....`")
      setTimeout(() => {msg.channel.send("`00000011|0x03| ....`")}, 1500);
      setTimeout(() => {msg.channel.send("`00000010|0x02| ...`")}, 2500);
      setTimeout(() => {msg.channel.send("`00000001|0x01| ..`")}, 3500);
      setTimeout(() => {msg.channel.send("`00000000|0x00| .`")}, 4500);
      setTimeout(() => {msg.channel.send("`BOTTOMS UP!!`")}, 5500);
    }, 30000);
  }
});

client.on('message', msg => {
  if (msg.content === '!pray') {
   msg.reply('In nomine Patris, et Filii, et Spiritus Sancti. Amen!')
  }
   if (msg.content === '!interdome') {
   msg.reply('interdome? that nigga in #201337, he is so fucking 80s, he is listening to gg allen!!')
  }
   if (msg.content === '!applegroo') {
   msg.reply('he is the best builder there is, his knowledge of physics empowers his building skills.')
  }
});

client.on("message", message => {
  if (message.author.bot) return;
  if (message.content.indexOf(config.prefix) !== 0) return;

  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  if(command === 'ping') {
  message.channel.send('Pong!');
  } else
  if (command === 'blah') {
  message.channel.send('Meh.');
  }
  if (command === "asl") {
  let age = args[0];
  let sex = args[1];
  let location = args[2];
  message.channel.send(`Hello ${message.author.username}, I see youre a ${age} year old ${sex} from ${location}. Wanna date?`);
  }
  else if (command === "bong") {
    if (!message.mentions.users.size) {
  	return message.reply('you need to tag a user dumbass!');
  }
    let user = args[0];
    message.channel.send(`${message.author.username} passed the bong to ${user}. Lets get baked bitch!`);
  }
  if (command === "beer") {
   if(args.length > 1){
    return message.reply('You can only pass a beer to a single user!');
   }
   else if (args.length === 0) {
    return message.reply(`here! take this! an ice cold beer! is a Warsteiner! Prost!`);
   }
   else if (!message.mentions.users.size) {
    return message.reply('you need to tag a user dumbass!');
   }
   else {
    let user2 = args[0];
    message.channel.send(`here ${user2}! take this an ice cold beer! Its a Warsteiner!`);
   }
  }
  if (command === "edibles") {
  message.reply(`enjoy some of these edibles`, { file: "https://media.giphy.com/media/GJ6SBog5lpi7u/giphy.gif" });
  }
  if (command === "ud") {
   if (args.length != 1) {
    return message.reply(`USAGE: !ud <single search term>`);
   }
   else if (args[0].length > 10) {
    return message.reply(`your search term is too long... who you trying to fuck with nigga`);
   }
   else {
    let search_term = args[0];
    message.channel.send(`https://www.urbandictionary.com/define.php?term=${search_term}`);
   }
  }
  if (command === "help") {
  message.reply("`my current commands are: !pack !bong !pray !beer !rounds !applegroo !interdome !ping !blah`");
  }
});

client.login(config.token);
