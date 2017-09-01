function updateParentDiv() {
    //alert("in the updateParentDiv script");
    //
    // Determine iFrame and style
    //
    var frame;

    var w = document.defaultView || document.parentWindow;
    var frames = w.parent.document.getElementsByTagName('iframe');
    for (var i = frames.length; i-->0;) {
        frame = frames[i];
        try {
            var d = frame.contentDocument || frame.contentWindow.document;
            if (d===document)
		break;
        } catch(e) {}
    }
    //alert(frame.id);
    frame.style.position = "fixed";
    frame.style.bottom = "0px"
    frame.style.right = "0px";

    frame.height = "33%";
    frame.width = "75%"; 

    frame.style.zIndex = "2147483640";


}
//alert("before onload");

window.onloadFuncs = [];

window.onload = function(){
    for (var i in this.onloadFuncs){
        this.onloadFuncs[i]();
    }
}

window.onloadFuncs.push(updateParentDiv);
