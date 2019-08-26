exports.run = (client, message, args) => {
 if (!message.mentions.users.size) {return message.reply('You need to tag a user dumbass!');}  
 let user = args[0];                                                                                                                                    
 message.channel.send(`${message.author.username} passed the bong to ${user}. Lets get baked bitch!`);                                                  
}
