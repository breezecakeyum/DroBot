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
    avatar: require('fs').readFileSync('C:/Users/breeze/node_modules/discord.io/images/robo.jpg', 'base64'), //Optional
})

bot.on('ready', function() {
    console.log(bot.username + " - (" + bot.id + ")");
});	

//Text Bounce
bot.on('message', function(user, userID, channelID, message, event) {
    if (message === "!logs") {
        bot.sendMessage({
            to: channelID,
            message: "Reign of Fire Logs >>> https://www.warcraftlogs.com/guilds/5151\nArea 52 Emerald Nightmare Logs >>> https://www.warcraftlogs.com/rankings/server/18/10\nEmerald Nightmare 95% Logs >>> https://www.warcraftlogs.com/statistics/10#dataset=95"
        });
    }
	if (message === "lol"){
		bot.sendMessage( {
			to: channelID,
			message: "Haha!"
		});
	}
});

// bot.on('any', function(channelID, rawEvent) {
    // if (channelID === 244132831662440451) {
		// var arr = ['beep1.jpg', 'beep2.jpg', 'beep3.jpg'];
		// var i = 0; 
		
		// while (i < arr.length){
			// var intervalID = setInterval (function (){
				// bot.sendMessage({to: channelID, message: arr[i]});
				// sendFiles(channelID, [arr[i]]);
				// i++;
			// }, 10000);
		// }
		
		// i = 0;
    // }
// });

// bot.on('message', function(user, userID, channelID, message, rawEvent) {
	// var currentTime = new Date().toLocaleTimeString('en-US', {hour12:true});
	// var estTime = Moment().tz(currentTime, "America/New_York");
	
    // if (message === "!start") {
      // var intervalID = setInterval (function (){
		// sendFiles(channelID, ["clock.png"]);
		
		// bot.sendMessage({
			// to: channelID,
			// message: "Current EST time is: " + estTime
		// });	
		// bot.sendMessage({
			// to: channelID,
			// message: "Current Dronai time is: " + currentTime
		// });
      // }, 10000);
    // }
	// else if (message === "!stop"){
		// clearInterval(intervalID);
	// }
// });

//Display Current Time and Locale time
// bot.on('message', function(user, userID, channelID, message, rawEvent) {
	// var currentTime = new Date().toLocaleTimeString('en-US', {hour12:true});
	// var estTime = Moment().tz(currentTime, "America/New_York");
	
    // if (message === "!time") {
		// sendFiles(channelID, ["clock.png"]);
		
		// bot.sendMessage({
			// to: channelID,
			// message: "Current EST time is: " + estTime
		// });	
		// bot.sendMessage({
			// to: channelID,
			// message: "Current Dronai time is: " + currentTime
		// });
    // }
// });

// bot.on("message", function(user, userID, channelID, message, event) {
    // if (message === "!Live") {
        // getJSON("https://api.twitch.tv/kraken/streams/breezecakeyum", function(err, res) {
            // if (res.stream == null) {
                // bot.sendMessage({
					// to: channelID,
					// message: "is not live!"
				// });	
            // } else {
                // bot.sendMessage({
					// to: channelID,
					// message: "is live!"
				// });	
            // }
        // });
    // }
// });

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