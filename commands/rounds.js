exports.run = (client, message, args) => {
 message.channel.send("`Everyone get your drinks ready! We are doing shots in 30 secs!!`");
 setTimeout(() => {
   message.channel.send("`00000100|0x04| .....`")
   setTimeout(() => {message.channel.send("`00000011|0x03| ....`")}, 1500);
   setTimeout(() => {message.channel.send("`00000010|0x02| ...`")}, 2500);
   setTimeout(() => {message.channel.send("`00000001|0x01| ..`")}, 3500);
   setTimeout(() => {message.channel.send("`00000000|0x00| .`")}, 4500);
   setTimeout(() => {message.channel.send("`BOTTOMS UP!!`")}, 5500);
 }, 30000);
}
