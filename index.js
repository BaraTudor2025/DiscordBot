const discord = require("discord.js");

const bot = new discord.Client();

const bot_prefix = '=';


bot.on("ready", function(evt){
	console.log("start booooooooooooooooooooys");
})

bot.on('message', function(message) {
	if (message.content.substring(0, 1) === bot_prefix) {
		let args = message.content.substring(1).split(' ');
		let command = args[0];
		args = args.splice(1); // remove command (args[0])

		switch(command){
				case 'help':
					message.channel.send("nush coaie d-astea");
					break;
				default:
					message.channel.send("nush ce vrei de la viata mea :vibecheck:");
		}
	}
})

bot.login("NzY4OTE4NzYzNTMyODQ1MDY2.X5HdZw.g7vbgFsidOwcOtZ9q1JBOgGRtvU");

// bot.on('message', function (user, userID, channelID, message, evt) {
//     // Our bot needs to know if it will execute a command
//     // It will listen for messages that will start with `!`
//     console.log(message);
//     if (message.substring(0, 1) === bot_prefix) {
//         var args = message.substring(1).split(' ');
//         var cmd = args[0];
//         args = args.splice(1);
//         switch(cmd) {
//             // !ping
//             case 'ping':
//                 bot.sendMessage({
//                     to: channelID,
//                     message: 'Pong!'
//                 });
//             break;
//             // Just add any case commands if you want to..
//          }
//      }
// });



