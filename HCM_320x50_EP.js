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
function buttonCreator(buttonDiv) {

    closeButton = document.createElement("Span");
    closeButton.style.position = 'fixed';
    closeButton.style.top = "-10px";
    closeButton.style.right = "-10px";
    closeButton.style.zIndex = "2147483645";
    closeButton.style.backgroundImage = "url('https://s3.amazonaws.com/script-tags/close.png')";
    closeButton.style.backgroundSize = 'contain';
    closeButton.style.backgroundRepeat = 'no-repeat';
    closeButton.style.width = "20px";
    closeButton.style.height = "20px";
    closeButton.onclick = function() {close_func();} ;

    buttonDiv.appendChild( closeButton )
}
function locateDivAd() {
    //
    // Determine DIV Ad image container
    //

    var seed_el = document.getElementById("HCM");
    var ad_el;
    var el;

    if (ad_el == null) {
	var findNext = seed_el;
	while (findNext = findNext.nextSibling) {
	    if (findNext.tagName == 'DIV') {
		if (findNext.id.indexOf("google_ads_iframe_") >= 0) {
		    ad_el = findNext;
    		    //alert(ad_el.id);
		    break;
		}
	    }
	}
    }

    if (ad_el == null) {
	var findPrevious = seed_el;
	while (findPrevious = findPrevious.nextSibling) {
	    if (findPrevious.tagName == 'DIV') {
		if (findPrevious.id.indexOf("google_ads_iframe_") >= 0) {
		    ad_el = findPrevious;
    		    //alert(ad_el.id);
		    break;
		}
	    }
	}
    }

    if (ad_el == null) {
	el = seed_el;
	while (el.parentNode) {
            el = el.parentNode;
            if (el.tagName == 'DIV') {
		if (el.id.indexOf("google_ads_iframe_") >= 0) {
		    ad_el = el;
		    //alert(ad_el.id);
		    break;
		}
	    }
	}
    }

    return ad_el
}


function buttonInjector() {

    var ad_el = locateDivAd();

    if (ad_el == null) {
	buttonCreator(seed_el.parentNode);
    }
    else {
	buttonCreator(ad_el);
    }

}
function eplanning() {
    var eplBody = window.parent.document.body;
    var eplFrame = eplBody.id;
    var epl = window.top.document.querySelector('iframe[id^='+eplFrame+']');
    epl.style.setProperty ("display", "block", "important");
    epl.style.setProperty ("position", "fixed", "important");
    epl.style.setProperty ("bottom", "0px", "important");
    epl.style.setProperty ("left", "50%", "important");
    epl.style.setProperty ("transform", "translate(-50%)", "important");
    epl.style.setProperty ("height", "60px", "important");
    epl.style.setProperty ("width", "340px", "important");
    epl.style.setProperty ("z-index", "2147483639", "important"); //added
}
function updateParentDiv() {
    //
    // Determine iFrame and style
    //
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

    frame.style.position = "fixed";
    frame.style.bottom = "0px"
    frame.style.left = "50%";
    frame.style.transform = 'translate(-50%)';

    frame.height = "60px";
    frame.width = "340px";

    frame.style.zIndex = "2147483640";

    //
    // Find HTML and Body and set style
    //
    var el;
    var closeButton;

    seed_el = document.getElementById("HCM");

    el = seed_el;
    while (el.parentNode) {
        el = el.parentNode;
        if (el.tagName == 'HTML') {
	    el.style.height = "100%";
	   }
        if (el.tagName == 'BODY') {
	    el.style.position = "fixed";
	    el.style.bottom = "0px";
	    el.style.left = "50%";
	    el.style.transform = 'translate(-50%)';
	}

    }


    //if (el.tagName == 'BODY') {
	//break;
    //}


    //
    // Reposition AD DIV Tag
    //

    var ad_el = locateDivAd();

    ad_el.style.height = "50px";
    ad_el.style.width = "320px";
    ad_el.style.position = "fixed";
    ad_el.style.bottom = "0px";
    ad_el.style.left = "50%";
    ad_el.style.transform = 'translate(-50%)';





    //
    // Inject Close Button
    //
    eplanning();
    buttonInjector();


}

window.onload = updateParentDiv;