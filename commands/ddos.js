exports.run = (client, message, args) => {
	let taggedUser = args[0];  
	if (!message.mentions.users.size) {
		message.reply("USAGE: !ddos <username>");
		return;
	}
	if (message.mentions.users.size) {
		message.channel.send(`Packeting * ${taggedUser} * from ( 127.0.0.1 ) with flags (272) for (1200) seconds.`);
		setTimeout(() => {message.channel.send(`${taggedUser} left ${message.channel}. Ping timeout 6666 seconds.`);}, 3500);
		return;
	}
}
