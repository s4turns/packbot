exports.run = (client, message, args) => {
	message.channel.send("`\\|/\\|/ ` **listen up... public announcement**: Pick it, Pack it, just be ready for a chan wide toke-out in 30 seconds. `\\|/\\|/`");
    setTimeout(() => {
      message.channel.send("`\\|/\\|/` Ladies & Gents, get your __BOWLS, BONGS, DAB RIGS__ **READY**! `\\|/\\|/`")
      setTimeout(() => {message.channel.send("`\\|/\\|/\\|//\\|/\\|/\\|/` 5 `\\|/\\|/\\|//\\|/\\|/\\|/`")}, 1500);
      setTimeout(() => {message.channel.send("`\\|/\\|/\\|/\\|/`4 `\\|/\\|/\\|/\\|/`")}, 2500);
      setTimeout(() => {message.channel.send("`\\|/\\|/\\|/`3 `\\|/\\|/\\|/`")}, 3500);
      setTimeout(() => {message.channel.send("`\\|/\\|/`2 `\\|/\\|/`")}, 4500);
      setTimeout(() => {message.channel.send("`\\|/`1 `\\|/`")}, 5500);
      setTimeout(() => {message.channel.send("SYNCHRONIZED! `\\|/\\|/` FIRE UP YOUR DANK SHIT!! `\\|/\\|/`")}, 6500);
    }, 30000);
}
