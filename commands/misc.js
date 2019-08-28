exports.run = (client, message, args) => {

	setTimeout(()  => {message.channel.send("1")}, 1000 );
  setTimeout(()  => {message.channel.send("2")}, 2000 );
  setTimeout(()  => {message.channel.send("3")}, 3000 );
  setTimeout(()  => {message.channel.send("4")}, 4000 );
  setTimeout(()  => {message.channel.send("5")}, 5000 );
}



