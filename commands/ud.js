exports.run = (client, message, args) => {
	if(args.length === 1 ) {
		message.channel.send(`https://www.urbandictionary.com/define.php?term=${args[0]}`);
	}
	if(args.length === 2) {
		message.channel.send(`https://www.urbandictionary.com/define.php?term=${args[0]}+${args[1]}`);
	} else if (args.length > 2 || args.length < 1) {
		return message.channel.send(`USAGE: !ud <search terms>`);
	}
}
