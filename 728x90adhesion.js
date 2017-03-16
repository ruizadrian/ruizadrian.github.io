function updateParentDiv() {
	var tag_id;
	var el;
	var closeButton;
  var innerDiv;
if ( window.self != window.top) {
    el = window.parent.document.getElementsByName(window.self.name) [0];

    // Reference iFrame
    el.height = "100px";
    el.width = "748px";
    el.style.zIndex = "900";


    // Reference iFrame
    window.self.document.getElementsByTagName("body")[0].style.margin="10px 10px 0px 10px";
    window.self.document.getElementsByTagName("body")[0].style.padding="0px";

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
		      el.style.zIndex = "800";
			    el.style.height = "100px";
			    el.style.width = "748px";
          innerDiv = document.querySelector('[id^="gpt_unit_"]');
          innerDiv.style.position = "fixed";
          innerDiv.style.bottom = "0px"
          innerDiv.style.left = "50%";
			    innerDiv.style.transform = 'translate(-50%)';
			    closeButton = document.getElementById("close");
			    closeButton.style.position = 'fixed';
			    closeButton.style.top = "-10px";
			    closeButton.style.right = "-10px";
			    closeButton.style.zIndex = "1000";
			    closeButton.style.backgroundImage = "url('https://s3.amazonaws.com/script-tags/close.png')";
			    closeButton.style.backgroundSize = 'contain';
			    closeButton.style.backgroundRepeat = 'no-repeat';
			    closeButton.style.width = "20px";
			    closeButton.style.height = "20px";
			    closeButton.onclick = function() {this.parentNode.parentNode.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode.parentNode.parentNode); return false;};
			}
		}
	}
}
window.onload = updateParentDiv;
