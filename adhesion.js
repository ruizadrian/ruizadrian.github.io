function updateParentDiv() {
	var tag_id;
	var el;
	var closeButton;

if ( window.self != window.top) {
    el = window.parent.document.getElementsByName(window.self.name) [0];
}
else {
    el = document.getElementById("HCM");
}
	while (el.parentNode) {
		el = el.parentNode;
		if (el.tagName == 'DIV') {
			tag_id = el.id;
			if( tag_id.indexOf("div-gpt-ad") >= 0){
				el.style.position = 'fixed';
				el.style.left = "50%";
				el.style.transform = 'translate(-50%)';
				el.style.bottom = "0px";
        el.style.zIndex = "100";
				closeButton = document.getElementById("close");
				closeButton.style.position = 'fixed';
				closeButton.style.top = "3px";
				closeButton.style.right = "3px";
				closeButton.style.zIndex = "500";
				closeButton.style.backgroundImage = "url('http://www.hcodetestpage.com/close.png')";
				closeButton.style.backgroundSize = 'contain';
				closeButton.style.backgroundRepeat = 'no-repeat';
				closeButton.style.width = "20px";
				closeButton.style.height = "20px";
				closeButton.onclick = function() {this.parentNode.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode.parentNode); return false; console.log("closed the ad");};
				console.log("made it to the end");
      }
		}
	}
}
window.onload = updateParentDiv;
