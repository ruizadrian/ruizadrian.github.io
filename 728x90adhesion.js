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

// function buttonCreator(buttonDiv) {
//
//     closeButton = document.getElementById("close");
//     closeButton.style.position = 'fixed';
//     closeButton.style.top = "-10px";
//     closeButton.style.right = "-10px";
//     closeButton.style.zIndex = "900000000000";
//     closeButton.style.backgroundImage = "url('https://s3.amazonaws.com/script-tags/close.png')";
//     closeButton.style.backgroundSize = 'contain';
//     closeButton.style.backgroundRepeat = 'no-repeat';
//     closeButton.style.width = "20px";
//     closeButton.style.height = "20px";
//     closeButton.onclick = function() {close_func();} ;
//
// }
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

    frame.height = "100px";
    frame.width = "748px";

    frame.style.zIndex = "90000000000";

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

    var ad_el;
    el = seed_el;
    while (el.parentNode) {
        el = el.parentNode;
        if (el.tagName == 'DIV') {
      if (el.id.indexOf("gpt_unit_") >= 0) {
		      ad_el = el;
		  break;
	    }

	}
        if (el.tagName == 'BODY') {
	    break;
	}

    }

    if (ad_el == false) {
	// Look for siblings

	el = seed_el;
	// Search next sibling


	el = seed_el;
	// Search prev sibling


    }

    if (ad_el != false) {
	buttonCreator(ad_el);
    }







	    //var par = document.querySelector('[id^="gpt_unit_"]');
      var sib = document.getElementById("HCM").nextSibling;
      var par = document.getElementById("HCM").parentElement;
      alert(par.id);
      alert(sib.id);
      // closeButton = document.getElementById("close");
      // closeButton.style.position = 'fixed';
      // closeButton.style.top = "-10px";
      // closeButton.style.right = "-10px";
      // closeButton.style.zIndex = "900000000000";
      // closeButton.style.backgroundImage = "url('https://s3.amazonaws.com/script-tags/close.png')";
      // closeButton.style.backgroundSize = 'contain';
      // closeButton.style.backgroundRepeat = 'no-repeat';
      // closeButton.style.width = "20px";
      // closeButton.style.height = "20px";
	    // closeButton.onclick = function() {close_func();} ;
	}

    }
}
window.onload = updateParentDiv;
