exports.run = (client, message, args) => {
if (!message.mentions.users.size) {
 return message.reply('You need to tag a user dumbass!');
}
 let fed = args[1];
 message.channel.send(`FED ALERT! FED ALERT! * ${fed} * is a FED!! oh shit! oh shit! FED ALERT!`);
}
