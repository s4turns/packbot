const Discord = require('discord.js');
const fs = require('fs');
const { prefix, token } = require('../config.json');
const client = new Discord.Client();

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
