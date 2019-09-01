exports.run = (client, message, args) => {
	let taggedUser = args[0];
	if (!message.mentions.users.size) {
		message.reply("USAGE: !rape <username>");
		return;
	}
	if (message.mentions.users.size) {
		message.channel.send(`Gets out from behind the counter and holds ${taggedUser}'s head against the table`);
		message.channel.send(`heard you are faggot as fuck ${taggedUser} so i guess this wont be rape!`);
		return;
	}
}
