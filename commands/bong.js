exports.run = (client, message, args) => {
 let taggedUser = args[0];
 let role = "622115777662812171";
 let roleMembers = message.guild.roles.get(role).members.map(m=>m.user.tag);
 
 if (!message.mentions.users.size && args.length > 0 && !message.mentions.everyone) {
  return message.channel.send(`FUCK OFF! that user is not a discord user DAGGOT!`);
 }
 if (args.length === 0) {
 	return message.channel.send(`Passed the bong to ${message.author}\nLets get baked bitch!`);
 }
 if (message.mentions.users.size) {
	return message.channel.send(`Passed the bong to ${taggedUser}.\nLets get baked bitch!`);
 }
 if (message.mentions.everyone) {
  roleMembers.forEach(user => {
   message.channel.send(`Passes the bong to ${user}\nLets get baked bitch!`);
  });
 }
}


