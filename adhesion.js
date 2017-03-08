function updateParentDiv() {
	var tag_id;
	var el;
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
        var closeButton = document.createElement('span')
        closeButton.innerHTML = 'X';
        var li = document.createElement('li');
        li.appendChild(closeButton);
        function close(){
          closeButton.onclick = function close()){
              this.parentNode.parentNode.parentNode
              .removeChild(this.parentNode.parentNode);
              return false;
          }
        }
			}
		}
	}
}
window.onload = updateParentDiv;




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
