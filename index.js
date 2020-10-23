const discord = require("discord.js");
const auth = require("./auth.json");
const client = new discord.Client();

const bot_prefix = '=';

function parse_command_message(msg){
	if (msg.substring(0, 1) === bot_prefix) {
		let args = msg.substring(1).split(' ');
		return {valid: true, commnad : args[0], args: args.splice(1)};
	}
	else
		return {valid: false};
}

client.on("ready", function(evt){
	console.log("start booooooooooooooooooooys");
})

client.on('message', function(message) {
	let msg = parse_command_message(message.content);
	if(!msg.valid)
		return;
	switch(msg.command){
		case 'help':
			message.channel.send("nush coaie d-astea");
			break;
		default:
			message.channel.send("nush ce vrei de la viata mea :vibecheck:");
	}
})

client.login(auth.token);
