exports.run = (client, message, args) => {
 if (args.length < 1) {
  return message.channel.send(`Sorry ${message.author} you did not provide me a person to gape!`);
 }
 if (args.length > 1) {
  return message.channel.send(`Sorry ${message.author} i can only gape one person at the time!`);
 }
 if (!message.mentions.users.size) {
  return message.channel.send(`Sorry ${message.author} but i can't gape that ask dOm3r in #201337`);
 } 
 message.channel.send(`gaping this FAGGOT IN 50 seconds!`);
 setTimeout(() => {message.channel.send(`nevermind, gaping this FAGGOT now!`)}, 1500);
 setTimeout(() => {message.channel.send(`5`)}, 2500);
 setTimeout(() => {message.channel.send(`4`)}, 3500);
 setTimeout(() => {message.channel.send(`3`)}, 4500);
 setTimeout(() => {message.channel.send(`2`)}, 5500);
 setTimeout(() => {message.channel.send(`1`)}, 6500);
 setTimeout(() => {message.channel.send(`gapes ${args[0]}!!`)}, 7500);
}
