var Discord = require("discord.js");
var bot = new Discord.Client();
var today = new Date();

bot.on('ready', () => {
    console.log('I am ready');
});

bot.on('message', message => {
    if(message.content === 'ping') {
        message.reply('pong');
        message.author.sendMessage("holis");
    }
    if(message.content === 'feliz' || message.content === 'amor') {
    	if(message.author.nick == "@Chiprel#5555 ") {
    		message.reply('Mira tus mensajes privados ;)');
        	message.author.sendMessage("Ahora visita acá: https://month3.herokuapp.com/");
    	}
    	message.author.sendMessage("test");
    	message.author.sendMessage("mensaje es: " + message.author);
    	message.author.sendMessage("mensaje es: " + message.author.username);
    	message.author.sendMessage("mensaje es: " + message.author.name);
    	message.author.sendMessage("mensaje es: " + message.author.mention);
    	message.reply(message.author);
    	message.reply(message.author.nick);
    	message.reply(message.author.name);
    	message.reply(message.author.mention);
    	message.reply("version1");
    }
});

bot.on("guildMemberAdd", (member) => {
    member.sendMessage("Esto es una prueba y no hay pack");
});


bot.login('Mjk5NjkyNTk4NjUyODI5Njk2.C8sqQA.9jB2khnLNnKvSs9qNb74IlbNsy0');