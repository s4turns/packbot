exports.run = (client, message, args) => {
	if (message.mentions.everyone) {
		message.channel.guild.members.forEach(user => {
			console.log(user.roles);
		});
	}
}


