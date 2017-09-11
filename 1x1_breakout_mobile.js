function close_func() {
    var frame;

    var w= document.defaultView || document.parentWindow;
    var frames= w.parent.document.getElementsByTagName('iframe');
    for (var i= frames.length; i-->0;) {
        frame= frames[i];
        try {
            var d= frame.contentDocument || frame.contentWindow.document;
            if (d===document)
        break;
        } catch(e) {}
    }
    frame.remove();

}

function buttonCreator(){
    var closeButton = document.createElement("span");
    closeButton.id = "closeButton";
    console.log("Button span created");
    console.log("closeButton ID: "+closeButton.id);
    console.log("closeButton element type: "+closeButton.nodeName);
    closeButton.style.position = 'fixed';
    closeButton.style.top = "5px";
    closeButton.style.left = "5px";
    closeButton.style.zIndex = "2147483645";
    closeButton.style.backgroundImage = "url('https://s3.amazonaws.com/script-tags/closeX.png')";
    closeButton.style.backgroundSize = 'contain';
    closeButton.style.backgroundRepeat = 'no-repeat';
    closeButton.style.width = "10px";
    closeButton.style.height = "10px";
    closeButton.onclick = function() {close_func();} ;
    document.body.appendChild(closeButton);

}

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
    frame.style.position = "fixed !important";
    frame.style.bottom = "0px !important";
    frame.style.right = "0px !important";

    frame.height = "170px !important";
    frame.width = "300px !important"; 

    frame.style.zIndex = "2147483640 !important";
    frame.style.display = "block !important";

    var tag_id;
    var parentDiv = frame.parentNode;
    if (parentDiv.tagName == 'DIV') {
        tag_id = parentDiv.id;
        if( tag_id.indexOf("google_ads_iframe_") >= 0){
           parentDiv.style.setProperty ("display", "block", "important");
        }
    }

    var HCM_Div = document.getElementById('JWHCM');
    var gptDiv = HCM_Div.parentNode;

    if (gptDiv.tagName == 'DIV') {
        tag_id = gptDiv.id;
        if( tag_id.indexOf("gpt_unit_") >= 0){
            gptDiv.style.setProperty ("display", "block", "important");
            gptDiv.style.setProperty ("position", "fixed", "important");
            gptDiv.style.setProperty ("bottom", "0px", "important");
            gptDiv.style.setProperty ("right", "0px", "important");
            gptDiv.height = "300px";
            gptDiv.width = "500px";
        }
    }

    setTimeout(function() { buttonCreator(); }, 10000);


}
//alert("before onload");

window.onloadFuncs = [];

window.onload = function(){
    for (var i in this.onloadFuncs){
        this.onloadFuncs[i]();
    }
}

window.onloadFuncs.push(updateParentDiv);
