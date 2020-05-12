exports.run = (client, message, args) => {
 let taggedUser = args[0];
 if (!message.mentions.users.size) {
  message.reply("USAGE: <!fight> <nick>");
  return;
 }
 if (message.mentions.users.size) {
 message.channel.send(`OMG!!1! ${message.author} WANTS TO FIGHT ${taggedUser}!!`);
	message.channel.send(`ROUND!!!11!! FIGHT!!!`);
 }
}
