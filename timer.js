// Start & Reset Functions
function startTimer() {
	sec = 59;
	countdown = setInterval(currentTime, 1000);
	toggle = false;
	//document.getElementById("startReset").innerHTML = "Reset";
}

function resetTimer(){
	clearInterval(countdown);
	toggle = true;
	document.getElementById("timer").innerHTML = "NEXT";
    document.getElementById("startReset").style.border = "10px solid #cfdcec";
    document.getElementById("startReset").style.background = "#4679BD";
    startTimer();
}

// Countdown Output
function currentTime() {
	switch(true){
		case (sec < 11 && sec > 0):
            document.getElementById("startReset").style.border = "30px solid red";
			document.getElementById("timer").innerHTML = String(sec);
			break;
		case (sec === 0):
			document.getElementById("timer").innerHTML = String(sec);
			clearInterval(countdown);
            document.getElementById("timer").innerHTML = "TIMES UP";
            document.getElementById("startReset").style.border = "30px solid red";
            document.getElementById("startReset").style.background = "red";
			break;
		default:
			document.getElementById("timer").innerHTML = String(sec);
			break;
	}
	sec--;
}

// Variables
var countdown, sec;
var toggle = true;
var timer = document.getElementById("timer");
var startReset = document.getElementById("startReset");

// Start/Reset Events
startReset.onclick = function(){
	switch(toggle){
		case true:
			startTimer();
			break;
		case false:
			resetTimer();
			break;
	}
};