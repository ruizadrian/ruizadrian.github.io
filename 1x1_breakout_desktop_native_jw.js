// function close_func() {
//     var frame;
//     var w= document.defaultView || document.parentWindow;
//     var frames= w.parent.document.getElementsByTagName('iframe');
//     for (var i= frames.length; i-->0;) {
//         frame= frames[i];
//         try {
//             var d= frame.contentDocument || frame.contentWindow.document;
//             if (d===document)
//         break;
//         } catch(e) {}
//     }
//     frame.remove();
// }

// function buttonCreator(){
//     var closeButton = document.createElement("span");
//     closeButton.id = "closeButton";
//     closeButton.style.position = 'fixed';
//     closeButton.style.top = "5px";
//     closeButton.style.right = "5px";
//     closeButton.style.zIndex = "2147483647";
//     closeButton.style.backgroundImage = "url('https://s3.amazonaws.com/script-tags/closeX.png')";
//     closeButton.style.backgroundSize = 'contain';
//     closeButton.style.backgroundRepeat = 'no-repeat';
//     closeButton.style.width = "15px";
//     closeButton.style.height = "15px";
//     closeButton.onclick = function() {close_func();} ;
//     document.body.appendChild(closeButton);
// }

function eplanning() {

    var eplBody = window.parent.document.body;
    //alert(eplBody.id);
    var eplFrame = eplBody.id;
    var epl = window.top.document.querySelector('iframe[id^='+eplFrame+']');
    epl.style.setProperty ("display", "block", "important");
    //epl.style.setProperty ("position", "fixed", "important");
    //epl.style.setProperty ("bottom", "0px", "important");
    //epl.style.setProperty ("right", "0px", "important");
    epl.style.setProperty ("height", "400px", "important");
    epl.style.setProperty ("width", "600px", "important");
    epl.style.setProperty ("z-index", "2147483647", "important"); //added
}

function updateNativeDiv() {
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

    //frame.style.setProperty ("position", "fixed", "important");
    //frame.style.setProperty ("bottom", "0px", "important");
    //frame.style.setProperty ("right", "0px", "important");

    frame.height = "400px";
    frame.width = "600px";
    
    frame.style.setProperty ("display", "block", "important"); 
    frame.style.setProperty ("z-index", "2147483647", "important");

    var tag_id;
    var parentDiv = frame.parentNode;
    if (parentDiv.tagName == 'DIV') {
        tag_id = parentDiv.id;
        if( tag_id.indexOf("google_ads_iframe_") >= 0){
            parentDiv.style.setProperty ("display", "block", "important");
            //parentDiv.style.setProperty ("position", "fixed", "important");
            //parentDiv.style.setProperty ("bottom", "0px", "important");
            //parentDiv.style.setProperty ("right", "0px", "important");
            parentDiv.style.setProperty ("z-index", "2147483647", "important"); //added
            parentDiv.style.setProperty ("height", "400px", "important");
            parentDiv.style.setProperty ("width", "600px", "important");
            // parentDiv.height = "400px";
            // parentDiv.width = "600px";
        }
    }

    var HCM_Div = document.getElementById('JWHCM_IC');
    var gptDiv = HCM_Div.parentNode;
    var gptDiv2 = HCM_Div.parentNode;

    var HCM_IC = parentDiv;
    var gptDiv3 = HCM_IC.parentNode;

    if (gptDiv.tagName == 'DIV') {
        tag_id = gptDiv.id;
        if( tag_id.indexOf("gpt_unit_") >= 0){
            gptDiv.style.setProperty ("display", "block", "important");
            //gptDiv.style.setProperty ("position", "fixed", "important");
            //gptDiv.style.setProperty ("bottom", "0px", "important");
            //gptDiv.style.setProperty ("right", "0px", "important");
            gptDiv.style.setProperty ("z-index", "2147483647", "important"); //added
            gptDiv.style.setProperty ("height", "400px", "important");
            gptDiv.style.setProperty ("width", "600px", "important");
            // gptDiv.height = "400px";
            // gptDiv.width = "600px";
        }
    }

    if (gptDiv2.tagName == 'DIV') {
        tag_id = gptDiv2.id;
        if( tag_id.indexOf("google_ads_iframe_") >= 0){
            gptDiv2.style.setProperty ("display", "block", "important");
            //gptDiv2.style.setProperty ("position", "fixed", "important");
           // gptDiv2.style.setProperty ("bottom", "0px", "important");
            //gptDiv2.style.setProperty ("right", "0px", "important");
            gptDiv2.style.setProperty ("z-index", "2147483647", "important"); //added
            gptDiv2.style.setProperty ("height", "400px", "important");
            gptDiv2.style.setProperty ("width", "600px", "important");
            // gptDiv2.height = "400px";
            // gptDiv2.width = "600px";
        }
    }

     if (gptDiv3.tagName == 'DIV') {
        tag_id = gptDiv3.id;
        if( tag_id.indexOf("div-gpt-ad-") >= 0){
            gptDiv3.style.setProperty ("display", "block", "important");
            gptDiv3.style.setProperty ("z-index", "2147483647", "important"); //added
            gptDiv3.style.setProperty ("height", "400px", "important");
            gptDiv3.style.setProperty ("width", "600px", "important");
        }
    }

    //setTimeout(function() { buttonCreator(); }, 20000);
    //eplanning();

}

window.onloadFuncs = [];
window.onload = function(){
    for (var i in this.onloadFuncs){
        this.onloadFuncs[i]();
    }
}

window.onloadFuncs.push(updateNativeDiv);
