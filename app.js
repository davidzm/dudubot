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
    	message.reply(message.author);
    	message.reply(message.author.nick);
    	if(message.author.nick.includes("Chiprel")) {
    		message.reply('Mira tus mensajes privados ;)');
        	message.author.sendMessage("Ahora visita acá: https://month3.herokuapp.com/");
    	}
    }
});

bot.on("guildMemberAdd", (member) => {
    member.sendMessage("Esto es una prueba y no hay pack");
});


bot.login('Mjk5NjkyNTk4NjUyODI5Njk2.C8sqQA.9jB2khnLNnKvSs9qNb74IlbNsy0');