exports.run = (client, message, args) => {
 let taggedUser = args[0];
 
 if (!message.mentions.users.size && args.length > 0) {
  return message.channel.send(`FUCK OFF! that user is not a discord user DAGGOT!`);
 }
 if (args.length === 0) {
 	return message.channel.send(`Passed the bong to ${message.author}\nLets get baked bitch!`);
 }
 if (message.mentions.users.size) {
	return message.channel.send(`Passed the bong to ${taggedUser}.\nLets get baked bitch!`);
 }

//TODO: find the roleID for ballers to segment the bot replies
// if (message.mentions.everyone) {
//  message.channel.guild.members.forEach(user => {
//	 message.channel.send(`Passed the bong to ${user}.\nLets get baked bitch!`);
//  });
// }
}
