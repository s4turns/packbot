exports.run = (client, message, args) => {
 let user = args[0];                                                                                                                                    
 if (message.mentions.users.size) {
	return message.channel.send(`${message.author.username} passed the bong to ${user}. Lets get baked bitch!`);
 }
 message.channel.send(`passed the bong to ${message.author.username}. Lets get baked bitch!`);                                                  
}
