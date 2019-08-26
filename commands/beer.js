exports.run = (client, message, args) => {
	let user = args;
	if (message.mentions.users.size) {
		return message.channel.send(`Here! ${user} an ice cold beer! is a WarSteiner! Prost!`);
	}
	message.reply(`Here! take this! an ice cold beer! is a Warsteiner! Prost!`);
}
