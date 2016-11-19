var Moment = require('moment-timezone');
var Discord = require('discord.io');


var bot = new Discord.Client({
    token: "MjQzMjMxOTAzMzU4OTEwNDY0.CvsCKA.jXhaUfYzzok5FT3tUsPU1Uhzf1c",
    autorun: true
});

var generalChatID = "232271198170382338";

bot.on("any", function(event) {
	console.log(event); //Logs every event
});

bot.editUserInfo({
    "avatar": "require('fs').readFileSync('C:/Users/breeze/node_modules/discord.io/images/robo.jpg', 'base64')" //Optional
})

bot.on('ready', function() {
    console.log(bot.username + " - (" + bot.id + ")");
});	

//Command Bounce
bot.on('message', function(user, userID, channelID, message, event) {
    if (message === "!commands") {
        bot.sendMessage({
            to: channelID,
            message: "```!logs | !gear | !attendance | !pawn | !simcraft | !resources | !website```"
        });
    }
});

//Text Bounce
bot.on('message', function(user, userID, channelID, message, event) {
    if (message === "!logs") {
        bot.sendMessage({
            to: channelID,
            message: "***Reign of Fire Logs >>> https://www.warcraftlogs.com/guilds/5151 \nArea 52 Emerald Nightmare Logs >>> https://www.warcraftlogs.com/rankings/server/18/10 \nEmerald Nightmare 95% Logs >>> https://www.warcraftlogs.com/statistics/10#dataset=95***"
        });
    }
	if (message === "!gear"){
		bot.sendMessage( {
			to: channelID,
			message: "***Reign of Fire Loot Spreadsheet >>> https://docs.google.com/spreadsheets/d/1vhZwxWMENb6wseDP4J5NHvls-_hmYnoIiTAc-52CxOY \nReign of Fire Loot History >>> https://docs.google.com/spreadsheets/d/1YDDrJsaQK_j2kyV6EfSc9e6XugI9IXUMLtXuzng5YwQ***"
		});
	}
	if (message === "!attendance"){
		bot.sendMessage( {
			to: channelID,
			message: "***Reign of Fire Attendance >>> https://docs.google.com/spreadsheets/d/13C-8hPqPEA3n46nRiunYn4gGeCgbL05Jjx5YoMV_vWU***"
		});
	}
	if (message === "!pawn" || message === "!simcraft"){
		bot.sendMessage( {
			to: channelID,
			message: "***https://www.youtube.com/watch?v=kPvjkW0ZkxM***"
		});
	}
	if (message === "!resources"){
		bot.sendMessage( {
			to: channelID,
			message: "***Legion To-Do List >>> https://docs.google.com/spreadsheets/d/1TiiI4huz4NXKfx7PGvvVTyP6xu8VaDNZ4-FEn69mOhc \nArtifact Power >>> https://docs.google.com/spreadsheets/d/11xQCzhiVM9gTZkUsu1UNs7z4dpwHpRQSUUZySY7xLv0***"
		});
	}	
	if (message === "!website"){
		bot.sendMessage( {
			to: channelID,
			message: "***Guild Website >>> rof.guildlaunch.com***"
		});
	}	
});

// Obviously a function to send files
function sendFiles(channelID, fileArr, interval) {
	var resArr = [], len = fileArr.length;
	var callback = typeof(arguments[2]) === 'function' ? arguments[2] : arguments[3];
	if (typeof(interval) !== 'number') interval = 1000;

	function _sendFiles() {
		setTimeout(function() {
			if (fileArr[0]) {
				bot.uploadFile({
					to: channelID,
					file: fileArr.shift()
				}, function(err, res) {
					resArr.push(err || res);
					if (resArr.length === len) if (typeof(callback) === 'function') callback(resArr);
				});
				_sendFiles();
			}
		}, interval);
	}
	_sendFiles();
}