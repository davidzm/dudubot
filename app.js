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
    if(message.content === 'mes' || message.content === 'mes' || message.content === 'Feliz' || message.content === 'feliz' || message.content === 'amor') {
    	if(message.author.username == "Nakha") {
    		message.reply('Mira tus mensajes privados ;)');
        	message.author.sendMessage("Ahora visita acá: https://month3.herokuapp.com/");
    	}
    }
});

bot.on("guildMemberAdd", (member) => {
    member.sendMessage("Esto es una prueba y no hay pack");
});


bot.login('Mjk5NjkyNTk4NjUyODI5Njk2.C8sqQA.9jB2khnLNnKvSs9qNb74IlbNsy0');