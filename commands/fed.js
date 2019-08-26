exports.run = (client, message, args) => {
	if (!message.mentions.users.size) {
 		return message.reply('You need to tag a user dumbass!');
	} else if (message.mentions.users.size  && args.length  === 1) {
	let fed = args[0];
 	message.channel.send(`FED ALERT! FED ALERT! * ${fed} * is a FED!! oh shit! oh shit! FED ALERT!`);
	}
}
