var Moment = require('moment-timezone');
var Discord = require('discord.io');
var os = require("os");
var fs = require('fs');
var readline = require('readline');


var bot = new Discord.Client({
    token: "MjQzMjMxOTAzMzU4OTEwNDY0.CvsCKA.jXhaUfYzzok5FT3tUsPU1Uhzf1c",
    autorun: true
});

// 232271198170382338 roleID for admins (Ignore)

bot.on("any", function(event) {
	console.log(event); //Logs every event
});


bot.on('ready', function() {
    console.log(bot.username + " - (" + bot.id + ")");
});	

// bot.editUserInfo({
    // avatar: fs.readFileSync('images\\clock.png', 'base64'),
    // password: 'supersecretpass',
// })

bot.setPresence({
    game: "Hello"
})

//I'm lazy so I just hardcoded the admin list
var adminArr = ["198276506126909440", // Lanellas (Dronai)
				"203203384889704459", // Mclovin
				"154584462783414272", // Aenastar
				"218967389944020992", // Mango1
				"225112965655822337", // Mango2
				"230080820759494659", // Mike
				"206858287205974017", // MikeMonkey
				"242441721084903435"]; // Smash543

//User Update Files
bot.on('message', function(user, userID, channelID, message, event) {
	var counter = 0;
	while(counter < adminArr.length){
		if (userID === adminArr[counter]){
			var logs = message.substring(0,5);
			var gear = message.substring(0,5);
			var attendance = message.substring(0,11);
			var pawn = message.substring(0,5);
			var resources = message.substring(0,10);
			var website = message.substring(0,8);
			var test = message.substring(0,5);	
			
			if (logs === "$logs") {
				updateCommandFiles(logs, message, channelID);
				break;
			}
			else if (gear === "$gear") {
				updateCommandFiles(gear, message, channelID);
				break;
			}
			else if (attendance === "$attendance") {
				updateCommandFiles(attendance, message, channelID);
				break;
			}
			else if (pawn === "$pawn") {
				updateCommandFiles(pawn, message, channelID);
				break;
			}
			else if (resources === "$resources") {
				updateCommandFiles(resources, message, channelID);
				break;
			}
			else if (website === "$website") {
				updateCommandFiles(website, message, channelID);
				break;
			}
			else if (test === "$test") {
				updateCommandFiles(test, message, channelID);
				break;
			}
		}
		counter++;
	}
	if (!userID === adminArr[counter]){
		bot.sendMessage({
			to: channelID, 
			message: "```Nope, can't do that!```"
		});
		sendFiles(channelID, ["drobot\\images\nope.jpg"]);
	}
});

//User Clear Files
bot.on('message', function(user, userID, channelID, message, event) {
	var counter = 0;
	while(counter < adminArr.length){
		if (userID === adminArr[counter]){
			
			if (message === "*logs") {
				clearCommandFiles(message, channelID);
				break;
			}
			else if (message === "*gear") {
				clearCommandFiles(message, channelID);
				break;
			}
			else if (message === "*attendance") {
				clearCommandFiles(message, channelID);
				break;
			}
			else if (message === "*pawn") {
				clearCommandFiles(message, channelID);
				break;
			}
			else if (message === "*resources") {
				clearCommandFiles(message, channelID);
				break;
			}
			else if (message === "*website") {
				clearCommandFiles(message, channelID);
				break;
			}
			else if (message === "*test") {
				clearCommandFiles(message, channelID);
				break;
			}
		}
		counter++;
	}
	if (!userID === adminArr[counter]){
		bot.sendMessage({
			to: channelID, 
			message: "```Nope, can't do that!```"
		});
		sendFiles(channelID, ["drobot\\images\nope.jpg"]);
	}
});

//User Text Bounce
bot.on('message', function(user, userID, channelID, message, event) {
    if (message === "!commands") {
        bot.sendMessage({
            to: channelID,
            message: "```!logs | !gear | !attendance | !pawn | !simcraft | !resources | !website```"
        });
    }
    else if (message === "!logs") {
		readCommandFiles(message, channelID);
    }
    else if (message === "!gear") {
		readCommandFiles(message, channelID);
    }
    else if (message === "!attendance") {
		readCommandFiles(message, channelID);
    }
    else if (message === "!pawn") {
		readCommandFiles(message, channelID);
    }
    else if (message === "!resources") {
		readCommandFiles(message, channelID);
    }
    else if (message === "!website") {
		readCommandFiles(message, channelID);
    }
    else if (message === "!test") {
		readCommandFiles(message, channelID);
    }
});


//Text Update Function
function updateCommandFiles(command, message, channelID) {
	if (command === "$logs"){
		fs.appendFile('drobot\\text\\logs.txt', message.replace('$logs ','') ,function(err){
			if (err) return console.log(err);
			else{
				bot.sendMessage({
					to: channelID, 
					message: "```Logs Updated!```"
				});
			}
		});
	}
	else if (command === "$gear"){
		fs.appendFile('drobot\\text\\gear.txt', message.replace('$gear ','') ,function(err){
			if (err) return console.log(err);
			else{
				bot.sendMessage({
					to: channelID, 
					message: "```Gear Updated!```"
				});
			}
		});
	}
	else if (command === "$attendance"){
		fs.appendFile('drobot\\text\\attendance.txt', message.replace('$attendance ','') ,function(err){
			if (err) return console.log(err);
			else{
				bot.sendMessage({
					to: channelID, 
					message: "```Attendance Updated!```"
				});
			}
		});
	}
	else if (command === "$pawn"){
		fs.appendFile('drobot\\text\\pawn.txt', message.replace('$pawn ','') ,function(err){
			if (err) return console.log(err);
			else{
				bot.sendMessage({
					to: channelID, 
					message: "```Pawn Updated!```"
				});
			}
		});
	}
	else if (command === "$resources"){
		fs.appendFile('drobot\\text\\resources.txt', message.replace('$resources ','') ,function(err){
			if (err) return console.log(err);
			else{
				bot.sendMessage({
					to: channelID, 
					message: "```Resources Updated!```"
				});
			}
		});
	}
	else if (command === "$website"){
		fs.appendFile('drobot\\text\\website.txt', message.replace('$website ','') ,function(err){
			if (err) return console.log(err);
			else{
				bot.sendMessage({
					to: channelID, 
					message: "```Website Updated!```"
				});
			}
		});
	}
	else if (command === "$test"){
		fs.appendFile('drobot\\text\\test.txt', message.replace('$test ','') ,function(err){
			if (err) return console.log(err);
			else{
				bot.sendMessage({
					to: channelID, 
					message: "```Test Updated!```"
				});
			}
		});
	}
}

//Text Read Function
function readCommandFiles(command, channelID) {
	if (command === "!logs"){
		fs.readFile('drobot\\text\\logs.txt' ,function(err,data){
			if (err) return console.log(err);
			else{
				bot.sendMessage({
					to: channelID, 
					tts: false,
					message: data
				});
			}
		});
	}
	else if (command === "!gear"){
		fs.readFile('drobot\\text\\gear.txt' ,function(err,data){
			if (err) return console.log(err);
			else{
				bot.sendMessage({
					to: channelID, 
					tts: false,
					message: data
				});
			}
		});
	}
	else if (command === "!attendance"){
		fs.readFile('drobot\\text\\attendance.txt' ,function(err,data){
			if (err) return console.log(err);
			else{
				bot.sendMessage({
					to: channelID, 
					tts: false,
					message: data
				});
			}
		});
	}
	else if (command === "!pawn"){
		fs.readFile('drobot\\text\\pawn.txt' ,function(err,data){
			if (err) return console.log(err);
			else{
				bot.sendMessage({
					to: channelID, 
					tts: false,
					message: data
				});
			}
		});
	}
	else if (command === "!resources"){
		fs.readFile('drobot\\text\\resources.txt' ,function(err,data){
			if (err) return console.log(err);
			else{
				bot.sendMessage({
					to: channelID, 
					tts: false,
					message: data
				});
			}
		});
	}
	else if (command === "!website"){
		fs.readFile('drobot\\text\\website.txt' ,function(err,data){
			if (err) return console.log(err);
			else{
				bot.sendMessage({
					to: channelID, 
					tts: false,
					message: data
				});
			}
		});
	}
	else if (command === "!test"){
		fs.readFile('drobot\\text\\test.txt' ,function(err,data){
			if (err) return console.log(err);
			else{
				bot.sendMessage({
					to: channelID, 
					tts: false,
					message: data
				});
			}
		});
	}
}	

//Text Clear Function
function clearCommandFiles(message, channelID) {
	if (message === "*logs"){
		fs.writeFile('drobot\\text\\logs.txt', '' ,function(err){
			if (err) return console.log(err);
			else{
				bot.sendMessage({
					to: channelID, 
					message: "```Logs Cleared!```"
				});
			}
		});
	}
	else if (message === "*gear"){
		fs.writeFile('drobot\\text\\gear.txt', '' ,function(err){
			if (err) return console.log(err);
			else{
				bot.sendMessage({
					to: channelID, 
					message: "```Gear Cleared!```"
				});
			}
		});
	}
	else if (message === "*attendance"){
		fs.writeFile('drobot\\text\\attendance.txt', '' ,function(err){
			if (err) return console.log(err);
			else{
				bot.sendMessage({
					to: channelID, 
					message: "```Attendance Cleared!```"
				});
			}
		});
	}
	else if (message === "*pawn"){
		fs.writeFile('drobot\\text\\pawn.txt', '' ,function(err){
			if (err) return console.log(err);
			else{
				bot.sendMessage({
					to: channelID, 
					message: "```Pawn Cleared!```"
				});
			}
		});
	}
	else if (message === "*resources"){
		fs.writeFile('drobot\\text\\resources.txt', '' ,function(err){
			if (err) return console.log(err);
			else{
				bot.sendMessage({
					to: channelID, 
					message: "```Resources Cleared!```"
				});
			}
		});
	}
	else if (message === "*website"){
		fs.writeFile('drobot\\text\\website.txt', '' ,function(err){
			if (err) return console.log(err);
			else{
				bot.sendMessage({
					to: channelID, 
					message: "```Website Cleared!```"
				});
			}
		});
	}
	else if (message === "*test"){
		fs.writeFile('drobot\\text\\test.txt', '' ,function(err){
			if (err) return console.log(err);
			else{
				bot.sendMessage({
					to: channelID, 
					message: "```Test Cleared!```"
				});
			}
		});
	}
}

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