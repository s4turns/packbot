exports.run = (client, message, args) => {
	let taggedUser = args[0];
	if (!message.mentions.users.size) {
	message.channel.send(`USAGE: !stabs <username> `);
	return;
	}
	if (message.mentions.users.size) {
		message.channel.send(`gets out from behind the counter and stabs ${taggedUser}`);
		message.channel.send(`getting real sick and tired of your shit ${taggedUser}`);
	return;
	}
}
