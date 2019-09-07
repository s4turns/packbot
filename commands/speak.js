exports.run = (client, message, args) => {
	if (args.length === 0) {
		console.log('[*] No arguments were passed to the command');
		return;
	}
	message.channel.send(`${message.author} says: ${args.join(' ')}`);
}
