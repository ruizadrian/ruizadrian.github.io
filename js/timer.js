// Variables
var countdown, sec;
var toggle = true;

// Default duration (1 minute, matches current setup)
var duration = 60;

var timer = document.getElementById("timer");
var startReset = document.getElementById("startReset");
var timerOptions = document.getElementById("timerOptions");

// Start & Reset Functions
function startTimer() {
	sec = duration - 1;
	countdown = setInterval(currentTime, 1000);
	toggle = false;
}

function resetTimer() {
	clearInterval(countdown);
	toggle = true;

	document.getElementById("timer").innerHTML = "NEXT";
	document.getElementById("startReset").style.border = "10px solid #cfdcec";
	document.getElementById("startReset").style.background = "#4679BD";

	startTimer();
}

// Change duration (30s / 60s / 120s)
function setDuration(newDuration) {
	duration = newDuration;

	// Stop any running countdown and reset to initial state
	clearInterval(countdown);
	toggle = true;

	document.getElementById("timer").innerHTML = "START";
	document.getElementById("startReset").style.border = "10px solid #cfdcec";
	document.getElementById("startReset").style.background = "#4679BD";
}

// Countdown Output
function currentTime() {
	switch (true) {
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

// Start/Reset Events
startReset.onclick = function () {
	switch (toggle) {
		case true:
			startTimer();
			break;
		case false:
			resetTimer();
			break;
	}
};

// Timer option button events
if (timerOptions) {
	timerOptions.addEventListener("click", function (e) {
		if (e.target && e.target.classList.contains("timer-option")) {
			var seconds = parseInt(e.target.getAttribute("data-seconds"), 10);
			setDuration(seconds);

			// Update active button styling
			var buttons = timerOptions.querySelectorAll(".timer-option");
			buttons.forEach(function (btn) {
				btn.classList.remove("active");
			});
			e.target.classList.add("active");
		}
	});
}