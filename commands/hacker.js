exports.run = (client, message, args) => {
	let taggedUser = args[0];  
	if (!message.mentions.users.size) {
		message.reply("you know that fgt ain't a hacker!");
		return;
	}
	if (message.mentions.users.size) {
		message.channel.send(`HACKER ALERT! HACKER ALERT! * ${taggedUser} * is a HACKER!! oh shit! oh shit! HACKER ALERT`);
		message.channel.send(`${taggedUser} HACKED THE GIBSON TWICE THIS MORNING !!!! HACKER ALERT!`);
		return;
	}
}
