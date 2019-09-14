exports.run = (client, message, args) => {
if (message.author.id === '305119858063048704' || message.author.id === '332715070465376262') {
 const amount = parseInt(args[0]) + 1;
 
 if(isNaN(amount)) {
  return message.reply('that doesn\'t seem to be a valid number.');
 } else if (amount <= 1 || amount > 100) {
  return message.reply('You need to input a number between 1 and 99.');
 }

 message.channel.bulkDelete(amount, true).catch(err => {
  console.error(err);
  message.channel.send('There was an error trying to prune messages in this channel!'); 
  });
 }
} 
