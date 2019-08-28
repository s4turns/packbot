exports.run = (client, message, args) => {
 if(!message.mentions.users.size && args.length === 0) {
  return message.channel.send(`Your avatar: < {file: ${message.author.displayAvatarURL}}>`);
 }
 const avatarList = message.mentions.users.map(user => {
  return `${user.username}'s avatar: < {file: ${user.displayAvatarURL}}>`;
 });
 message.channel.send(avatarList);
}

