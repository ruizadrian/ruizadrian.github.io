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
				closeButton = document.getElementById("HCM");
				closeButton.style.position = "absolute";
				closeButton.style.width = "15px";
				closeButton.style.height = "15px";
				closeButton.style.top = "0px";
				closeButton.style.right = "50px";
				closeButton.style.zIndex = "500";
				closeButton.style.backgroundImage = "url('close.png')";
				closeButton.style.backgroundRepeat = "no-repeat";
				console.log("made it to the end");
      }
		}
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
