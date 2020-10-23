const discord = require("discord.js");
const auth = require("./auth.json");
const client = new discord.Client();

const bot_prefix = '=';

function parse_command(msg){
	//if (msg.substring(0, 1) === bot_prefix) {
	if(msg.startsWith(bot_prefix)){
		let args = msg.substring(1).split(' ');
		return {valid: true, name : args[0], args: args.splice(1)};
	}
	else
		return {valid: false};
}

function get_emoji_str(name){
	const e = client.emojis.cache.find(e => e.name === name);
	return e.toString();
}

function is_message_from_bot(message){
	return message.author.id == client.user.id;
}

client.on("ready", function(evt){
	client.user.setActivity("la buci ca la turci", {type: "dând"});
	console.log("start booooooooooooooooooooys");
})

client.on('message', async function(message) {
	let command = parse_command(message.content);
	if(!command.valid)
		return;
	switch(command.name){

		case 'delete':
			message.channel.messages.fetch({limit:50}).then(msgs => {
				msgs.map(msg => {
					if(is_message_from_bot(msg) || msg.content.startsWith(bot_prefix))
						msg.delete();
				});
			});

			break;
		case 'help':
			message.channel.send("nush coaie d-astea");

			break;
		default:
			//message.channel.send("nush ce vrei de la viata mea");
			let msg_sent = await message.channel.send(get_emoji_str("vibecheck"));
			setTimeout(() => {
				msg_sent.edit("am fost editat");
				setTimeout(() => {
					msg_sent.delete();
					if(is_message_from_bot(msg_sent))
						console.log(msg_sent.member.user.username);
				}, 1000);
			}, 1000);
			break;
	}
})

client.login(auth.token);
