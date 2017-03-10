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
				//closeButton.innerHTML = "x";
				closeButton.style.position = 'fixed';
				//closeButton.style.padding = "0px 2px 0px";
				//closeButton.style.background = "#CCC";
				closeButton.style.top = "3px";
				closeButton.style.right = "3px";
				closeButton.style.zIndex = "500";
				closeButton.style.backgroundImage = "url('http://www.hcodetestpage.com/close.png')";
				closeButton.style.backgroundSize = 'contain';
				closeButton.style.backgroundRepeat = 'no-repeat';
				closeButton.style.width = "15px";
				closeButton.style.height = "15px";
				console.log("made it to the end");
      }
		}
	}
}
function closeAd(){
		document.getElementById('close').onclick = function closeAd(){
				this.parentNode.parentNode.parentNode
				.removeChild(this.parentNode.parentNode);
				return false;
				console.log("inside close function");
		}
}
window.onload = updateParentDiv;


// closeButton = document.getElementById("HCM");
// closeButton.innerHTML = "zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz";
// closeButton.style.zIndex = "200";

// closeButton = document.createElement('span');
// closeButton.id = "close";
// closeButton.innerHTML = 'Xzxzxzxzxzxzxzxzxzxzxzxzxzxacdcdvcsdvcasvcasfvasfvsafvasfvasfvasfv';

// var dateSpan = document.createElement('span')
// dateSpan.innerHTML = dateString;
// var li = document.createElement('li');
// li.appendChild(dateSpan);
//
//
// function closeButton(){
//     document.getElementById('close').onclick = function closeButton(){
//         this.parentNode.parentNode.parentNode
//         .removeChild(this.parentNode.parentNode);
//         return false;
//     };
// };
