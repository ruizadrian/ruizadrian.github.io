function updateDivSize() {
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

    // frame.style.setProperty ("text-align", "center", "important");
    // frame.height = "100%";
    // frame.width = "100%";
    // frame.style.setProperty ("display", "block", "important"); 
    // frame.style.setProperty ("z-index", "2147483640", "important");

    var tag_id;
    var parentDiv = frame.parentNode;
    var HCM_Div = parentDiv;
    var gptDiv = HCM_Div.parentNode;
    // var gptDiv2 = gptDiv.parentNode;
    // var gptDiv3 = gptDiv2.parentNode;
    
    if (parentDiv.tagName == 'DIV') {
        tag_id = parentDiv.id;
        if( tag_id.indexOf("div-gpt-ad-") >= 0){
            parentDiv.removeAttribute("style");
            parentDiv.style.setProperty ("text-align", "center", "important");
        }
    }

    // var HCM_Div = document.getElementById('GRUUV');
    // console.log(gptDiv.tagName);
    // console.log(gptDiv2.tagName);
    // console.log(gptDiv3.tagName);
    // console.log(gptDiv.id);
    // console.log(gptDiv2.id);
    // console.log(gptDiv3.id);

    if (gptDiv.tagName == 'DIV') {
        tag_id = gptDiv.id;
        if( tag_id.indexOf("div-gpt-ad-") >= 0){
            //alert(tag_id);
            gptDiv.removeAttribute("style");
            // gptDiv.style.setProperty ("display", "block", "important");
            gptDiv.style.setProperty ("text-align", "center", "important");
            // gptDiv.style.setProperty ("height", "100%", "important");
            // gptDiv.style.setProperty ("width", "100%", "important");
        }
    }

    // if (gptDiv2.tagName == 'DIV') {
    //     tag_id = gptDiv2.id;
    //     if( tag_id.indexOf("div-gpt-ad-") >= 0){
    //         gptDiv2.style.setProperty ("display", "block", "important");
    //         gptDiv2.style.setProperty ("text-align", "center", "important");
    //         gptDiv2.style.setProperty ("height", "100%", "important");
    //         gptDiv2.style.setProperty ("width", "100%", "important");
    //     }
    // }

    // if (gptDiv3.tagName == 'DIV') {
    //     tag_id = gptDiv3.id;
    //     if( tag_id.indexOf("div-gpt-ad-") >= 0){
    //         gptDiv3.style.setProperty ("display", "block", "important");
    //         gptDiv3.style.setProperty ("text-align", "center", "important");
    //         gptDiv3.style.setProperty ("height", "100%", "important");
    //         gptDiv3.style.setProperty ("width", "100%", "important");
    //     }
    // }
}

window.onloadFuncs = [];

window.onload = function(){
    for (var i in this.onloadFuncs){
        this.onloadFuncs[i]();
    }
}

window.onloadFuncs.push(updateDivSize);
