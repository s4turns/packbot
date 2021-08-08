exports.run = (client, message, args) => {
	let user = args;
	if (args.length === 0) {
		message.reply(`Here! take this! an ice cold beer! is a Warsteiner! Prost!`);
	}
	if (!message.mentions.users.size && args.length > 0) {
		return message.channel.send(`FUCK OFF! That user is not a discord user WAGGOT!`);
	}
	if (message.mentions.users.size) {
		return message.channel.send(`Here! ${user} an ice cold beer! is a WarSteiner! Prost!`);
	}
}
