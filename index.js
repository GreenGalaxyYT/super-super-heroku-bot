const Discord = require('discord.js')
const bot = new Discord.Client();




const cheerio = require('cheerio')

const request = require('request')



const BOT_TOKEN = 'NjgyNjkwMzg5NTc2MjUzNDc3.XlgrFQ.mnk1r1F8jOXU0_p454rbxnMz1Pw'

const PREFIX = '!';

bot.on('ready', () =>{
    console.log('This bot is online.')

})

bot.on('message', message=>{

    let args = message.content.substring(PREFIX.length).split(" ");

    switch(args[0]){
        case 'ping':
            message.reply('pong!');
        break;
        case 'noob':
            message.reply('no u! https://cdn.discordapp.com/attachments/682690719680430103/682968389794398266/266-2668350_best-uno-reverse-card-1-5-best-uno.png');
        break;
        case 'cmds':
            message.reply('The commands are. info, ping, memes, noob. Those are the current commands.');
        break;
        case 'info':
            const embed = new Discord.RichEmbed()
            .setTitle('User Information')
            .addField('Player Name', message.author.username)
            .addField('Bot info', 'This bot is created by GreenGalaxy and still in development!')
            .addField('Version', '0.0.1')
            .addField('Current Server', message.guild.name)
            .setColor(0x54007B)
            .setFooter('Subscribe to GreenGalaxy. Bot made by GreenGalaxy.')
            message.channel.sendEmbed(embed);
        break;
        case 'memes':
            image(message);
    
            break;
        }
    
    });
    
    function image(message){
    
        var options = {
            url: "http://results.dogpile.com/serp?qc=images&q=" + "reddit memes",
            method: "GET",
            headers: {
                "Accept": "text/html",
                "User-Agent": "Chrome"
            }
        };
    
    
    
    
    
        request(options, function(error, response, responseBody) {
            if (error) {
                return;
            }
      
     
            $ = cheerio.load(responseBody); 
     
    
            var links = $(".image a.link");
     
            var urls = new Array(links.length).fill(0).map((v, i) => links.eq(i).attr("href"));
            
            console.log(urls);
    
            if (!urls.length) {
               
                return;
            }
     
            // Send result
            message.channel.send( urls[Math.floor(Math.random() * urls.length)]);
        });
     
    
    
    
    
    
    
    
    }
    
    client.login(process.env.BOT_TOKEN);
