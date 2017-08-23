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

    frame.height = "384px";
    frame.width = "512px";

    frame.style.zIndex = "2147483640";

    //
    // Find HTML and Body and set style
    //
    var el;
    var closeButton;

    var seed_el = document.getElementById("HCM");

    el = seed_el;
    while (el.parentNode) {
        el = el.parentNode;
        if (el.tagName == 'HTML') {
        el.style.height = "100%";
       }
        if (el.tagName == 'BODY') {
        el.style.height = "100%";
        el.style.width = "100%";

    }


    //
    // Reposition AD DIV Tag
    //

    //var ad_el = locateDivAd();

    //ad_el.style.height = "384px";
    //ad_el.style.width = "512px";

}

window.onload = updateParentDiv;