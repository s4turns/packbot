exports.run = (client, message, args) => {
	let taggedUser = args[0];  
	if (!message.mentions.users.size) {
		message.reply("USAGE: !bloodeagle <username>");
		return;
	}
	if (message.mentions.users.size) {
		message.channel.send(`np: Wardruna -Runaljod`);
		setTimeout(() => {message.channel.send(`begins to cut ${taggedUser}`);}, 4500);
		setTimeout(() => {message.channel.send(`${message.author} watches as ${taggedUser} makes no sound`);}, 6500);
		setTimeout(() => {message.channel.send(`begins to open ${taggedUser}`);}, 8500);
		setTimeout(() => {message.channel.send(`tears out the lungs of ${taggedUser} and places them on their shoulders`);}, 10500);
		setTimeout(() => {message.channel.send(`wacthes as everyone in ${message.guild} looks in horror!`);}, 12500);
		setTimeout(() => {message.channel.send(`you will now go to valhalla my friend....`);}, 14500);
		return;
	}
}
