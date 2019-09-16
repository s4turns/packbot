exports.run = (client, message, args) => {
 const taggedUser = message.mentions.users.first();
 
 if (message.mentions.users.size && args.length === 1) {
  message.channel.send(`${message.author} is trying to ban ${taggedUser}`);
  setTimeout(() => {message.channel.send(`[!] checking permission please wait. [#----]`)}, 1500);
  setTimeout(() => {message.channel.send(`[!] checking permission please wait. [##---]`)}, 3500);
  setTimeout(() => {message.channel.send(`[!] checking permission please wait. [###--]`)}, 5500);
  setTimeout(() => {message.channel.send(`[!] checking permission please wait. [####-]`)}, 7500);
  setTimeout(() => {message.channel.send(`[!] checking permission please wait. [#####]`)}, 9500);
  setTimeout(() => {message.channel.send(`[!] Permission check completed!`)}, 11500);
  setTimeout(() => {message.channel.send(`YOU DO NOT HAVE PERMISSION TO BAN ${taggedUser}`)}, 15500);
 } else {
   message.channel.send(`[!] Error! wrong command syntax!`);
  return message.channel.send(`USAGE: !ban <user>`);
 }
}
