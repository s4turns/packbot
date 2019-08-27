exports.run = (client, message, args) => {
 let user = args[0];                                                                                                                                    
 if (message.mentions.users.size) {
	return message.channel.send(`${message.author.username} passed the bong to ${user}. Lets get baked bitch!`);
 }
 if (args.length  === 0) {
 return message.channel.send(`passed the bong to ${message.author.username}. Lets get baked bitch!`);                                                  
 }
 if (!message.mentions.users.size) {
  return message.channel.send(`FUCK OFF! that user is not a discord user DAGGOT!`);
 }
}
