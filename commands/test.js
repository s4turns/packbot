exports.run = (client, message, args) => {
	if (message.mentions.everyone) {
		message.channel.guild.members.forEach(user => {
			console.log(`hello there ${user}`);
		});
	}
}


