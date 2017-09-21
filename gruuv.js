function autoPlay() {
	window.document.querySelector('div[style*="https://cdn.adtags.mobi/shared/img/play.png"]').click();
}

function playTimer(){
	setTimeout(function() { autoplay(); }, 10000);
}

window.onload = playTimer;