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

function eplanning() {

    var eplBody = window.parent.document.body;
    //var eplFrame = eplBody.id;

    var eplFrame = window.parent.frameElement.id;
    var epl = window.top.document.querySelector('iframe[id^='+eplFrame+']');
    epl.style.setProperty ("display", "block", "important");
    epl.style.setProperty ("position", "fixed", "important");
    epl.style.setProperty ("bottom", "0px", "important");
    epl.style.setProperty ("right", "0px", "important");
    epl.style.setProperty ("height", "288px", "important");
    epl.style.setProperty ("width", "512px", "important");
    epl.style.setProperty ("z-index", "2147483647", "important"); //added
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
    frame.style.setProperty ("bottom", "0px", "important");
    frame.style.setProperty ("right", "0px", "important");

    frame.height = "288px";
    frame.width = "512px";
    
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
            parentDiv.height = "288px";
            parentDiv.width = "512px";
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
            gptDiv.height = "288px";
            gptDiv.width = "512px";
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
            gptDiv2.height = "288px";
            gptDiv2.width = "512px";
        }
    }

    eplanning();
    setTimeout(function() { buttonCreator(); }, 20000);
    

}

window.onloadFuncs = [];

window.onload = function(){
    for (var i in this.onloadFuncs){
        this.onloadFuncs[i]();
    }
}

window.onloadFuncs.push(updateParentDiv);
