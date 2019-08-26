exports.run = (client, message, args) => {
 if (!message.mentions.users.size) {
  return message.reply(`You need to tag a user in order to kick them!`);
 }

 const taggedUser = message.mentions.users.first();
 message.channel.send(`You wanted to kick: ${taggedUser.username}`);
}
