function eplanning() {

    var eplBody = window.parent.document.body;
    var eplFrame = eplBody.id;
    var epl = window.top.document.querySelector('iframe[id^='+eplFrame+']');
    epl.style.setProperty ("display", "block", "important");
    epl.style.setProperty ("height", "360px", "important");
    epl.style.setProperty ("width", "640px", "important");
    epl.style.setProperty ("z-index", "2147483647", "important"); //added
}

function updateNativeDiv() {
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

    frame.height = "360px";
    frame.width = "640px";
    
    frame.style.setProperty ("display", "block", "important"); 
    frame.style.setProperty ("z-index", "2147483647", "important");

    var tag_id;
    var parentDiv = frame.parentNode;
    if (parentDiv.tagName == 'DIV') {
        tag_id = parentDiv.id;
        if( tag_id.indexOf("google_ads_iframe_") >= 0){
            parentDiv.style.setProperty ("display", "block", "important");
            parentDiv.style.setProperty ("z-index", "2147483647", "important"); //added
            parentDiv.style.setProperty ("height", "360px", "important");
            parentDiv.style.setProperty ("width", "640px", "important");
        }
    }

    var HCM_Div = document.getElementById('JWHCM_IC');
    var gptDiv = HCM_Div.parentNode;
    var gptDiv2 = gptDiv.parentNode;
    // var gptDiv2 = HCM_Div.parentNode;


    var HCM_IC = parentDiv;
    var gptDiv3 = HCM_IC.parentNode;

    if (gptDiv.tagName == 'DIV') {
        tag_id = gptDiv.id;
        if( tag_id.indexOf("gpt_unit_") >= 0){
            gptDiv.style.setProperty ("display", "block", "important");
            gptDiv.style.setProperty ("z-index", "2147483647", "important"); //added
            gptDiv.style.setProperty ("height", "360px", "important");
            gptDiv.style.setProperty ("width", "640px", "important");
        }
    }

    // if (gptDiv2.tagName == 'DIV') {
    //     tag_id = gptDiv2.id;
    //     if( tag_id.indexOf("google_ads_iframe_") >= 0){
    //         gptDiv2.style.setProperty ("display", "block", "important");
    //         gptDiv2.style.setProperty ("z-index", "2147483647", "important"); //added
    //         gptDiv2.style.setProperty ("height", "360px", "important");
    //         gptDiv2.style.setProperty ("width", "640px", "important");
    //     }
    // }

    if (gptDiv2.tagName == 'DIV') {
        tag_id = gptDiv2.id;
        if( tag_id.indexOf("div-gpt-ad") >= 0){
            gptDiv2.style.setProperty ("display", "block", "important");
            gptDiv2.style.setProperty ("z-index", "2147483647", "important"); //added
            gptDiv2.style.setProperty ("height", "360px", "important");
            gptDiv2.style.setProperty ("width", "640px", "important");
        }
    }

     if (gptDiv3.tagName == 'DIV') {
        tag_id = gptDiv3.id;
        if( tag_id.indexOf("div-gpt-ad-") >= 0){
            gptDiv3.style.setProperty ("display", "block", "important");
            gptDiv3.style.setProperty ("z-index", "2147483647", "important"); //added
            gptDiv3.style.setProperty ("height", "360px", "important");
            gptDiv3.style.setProperty ("width", "640px", "important");
        }
    }

    //eplanning();

}

window.onloadFuncs = [];
window.onload = function(){
    for (var i in this.onloadFuncs){
        this.onloadFuncs[i]();
    }
}

window.onloadFuncs.push(updateNativeDiv);
