exports.run = (client, message, args) => {
 let taggedUser = args[0];                                                                  
 if (args.length === 0) {
 	return message.channel.send(`Passed the bong to ${message.author.username}. Lets get baked bitch!`);                                                  
 }
 if (!message.mentions.users.size && args.length > 0) {
  return message.channel.send(`FUCK OFF! that user is not a discord user DAGGOT!`);
 }
 if (message.mentions.users.size) {
	return message.channel.send(`Passed the bong to ${taggedUser}. Lets get baked bitch!`);
 }
}
