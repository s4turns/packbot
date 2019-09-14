exports.run = (client, message, args) => {
let role = "622115569851826176";
let roleMembers = message.guild.roles.get(role).members.map(m=>m.user.tag);

 if (message.mentions.everyone) {
  roleMembers.forEach(user => {
   message.channel.send(`Passes the bong to @${user}`);
  });
 }
}


