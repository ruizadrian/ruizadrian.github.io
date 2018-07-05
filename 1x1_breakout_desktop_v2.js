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
    closeButton.style.position = 'fixed';
    closeButton.style.top = "5px";
    closeButton.style.right = "5px";
    closeButton.style.zIndex = "2147483647";
    closeButton.style.backgroundImage = "url('https://s3.amazonaws.com/script-tags/closeX.png')";
    closeButton.style.backgroundSize = 'contain';
    closeButton.style.backgroundRepeat = 'no-repeat';
    closeButton.style.width = "15px";
    closeButton.style.height = "15px";
    closeButton.onclick = function() {close_func();} ;
    document.body.appendChild(closeButton);
}


function updateParentDiv() {

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

    frame.style.setProperty ("position", "fixed", "important");
    frame.style.setProperty ("bottom", "20px", "important");
    frame.style.setProperty ("right", "20px", "important");
    frame.style.setProperty ("width", "512px", "important");
    frame.style.setProperty ("height", "288px", "important");
    
    frame.style.setProperty ("display", "block", "important"); 
    frame.style.setProperty ("z-index", "2147483647", "important");

    var tag_id;
    var parentDiv = frame.parentNode;
    if (parentDiv.tagName == 'DIV') {
        tag_id = parentDiv.id;
        if( tag_id.indexOf("google_ads_iframe_") >= 0){
            parentDiv.style.setProperty ("display", "block", "important");
            parentDiv.style.setProperty ("position", "fixed", "important");
            parentDiv.style.setProperty ("bottom", "0px", "important");
            parentDiv.style.setProperty ("right", "0px", "important");
            parentDiv.style.setProperty ("z-index", "2147483647", "important"); //added
            parentDiv.style.setProperty ("width", "512px", "important");
            parentDiv.style.setProperty ("height", "288px", "important");
        }
    }

    var HCM_Div = document.getElementById('JWHCM');
    var gptDiv = HCM_Div.parentNode;
    var gptDiv2 = HCM_Div.parentNode;

    if (gptDiv.tagName == 'DIV') {
        tag_id = gptDiv.id;
        if( tag_id.indexOf("gpt_unit_") >= 0){
            gptDiv.style.setProperty ("display", "block", "important");
            gptDiv.style.setProperty ("position", "fixed", "important");
            gptDiv.style.setProperty ("bottom", "0px", "important");
            gptDiv.style.setProperty ("right", "0px", "important");
            gptDiv.style.setProperty ("z-index", "2147483647", "important"); //added
            gptDiv.style.setProperty ("width", "512px", "important");
            gptDiv.style.setProperty ("height", "288px", "important");
        }
    }

    if (gptDiv2.tagName == 'DIV') {
        tag_id = gptDiv2.id;
        if( tag_id.indexOf("google_ads_iframe_") >= 0){
            gptDiv2.style.setProperty ("display", "block", "important");
            gptDiv2.style.setProperty ("position", "fixed", "important");
            gptDiv2.style.setProperty ("bottom", "0px", "important");
            gptDiv2.style.setProperty ("right", "0px", "important");
            gptDiv2.style.setProperty ("z-index", "2147483647", "important"); //added
            gptDiv2.style.setProperty ("width", "512px", "important");
            gptDiv2.style.setProperty ("height", "288px", "important");
        }
    }

    setTimeout(function() { buttonCreator(); }, 60000);
}

window.onloadFuncs = [];
window.onload = function(){
    for (var i in this.onloadFuncs){
        this.onloadFuncs[i]();
    }
}

window.onloadFuncs.push(updateParentDiv);
