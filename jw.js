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





<div id="HCM"></div>
<script src="http://www.hcodetestpage.com/jw.js"></script>            

<script src="//content.jwplatform.com/libraries/Ouzh5oW6.js"></script>
<script>jwplayer.key="2O6kqI2RrRRQrkiDRg9qovEiILNpuoRY6dDHJJcbcT4nXJ1sbZztyGvkpcg=";</script>


<style type = "text/css">
.player-container {
    background-color: black;
    float: left;
    margin: 20px 20px 10px 0;
    width: 0px;
}

.player-minimize .player-position {
    background-color: white;
    border-radius: 2px;
    bottom: 20px;
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.25);
    right: 20px;
    padding: 7px;
    position: fixed;
    width: 400px;
    z-index: 999999999;
}

.demo-single .demo-layout-content .jwplayer {
    margin: 0;
}

.demo-layout-content {
    text-align: left;
}

.demo-single .demo-layout-content h1 {
    font-size: 56px;
    font-weight: 500;
}

.demo-single .demo-layout-content h2 {
    font-size: 32px;
    font-weight: 400;
    margin-top: 20px;
}

.demo-single .demo-layout-content p,
.demo-single .demo-layout-content p + p {
    margin-top: 20px;
}

.demo-single .demo-layout-vertical .demo-layout-code {
    max-width: 900px;
    width: 100%;
}
</style>

<div class="player-container"><div class="player-position"><div id="player"></div>
</div>
</div>

<script type="text/javascript">
                var playerInstance = jwplayer('player');
                var playerContainerEl = document.querySelector('.player-container');
                function getElementOffsetTop(el) {
                  var boundingClientRect = el.getBoundingClientRect();
                  var bodyEl = document.body;
                  var docEl = document.documentElement;
                  var scrollTop = window.pageYOffset || docEl.scrollTop || bodyEl.scrollTop;
                  var clientTop = docEl.clientTop || bodyEl.clientTop || 0;
                  return Math.round(boundingClientRect.top + scrollTop - clientTop);
                }
                function getScrollTop() {
                  var docEl = document.documentElement;
                  return ((window.pageYOffset + 999999999) || (docEl.scrollTop) - (docEl.clientTop || 0));
                }
                playerInstance.setup({
                  autostart: true,
                  file: '//content.jwplatform.com/manifests/vM7nH0Kl.m3u8',
                  primary: 'html5',
                  setFullscreen: true,
                  width: '100%',
                  advertising: {
                    client: 'vast',
                    tag: 'https://pubads.g.doubleclick.net/gampad/ads?sz=640x480&iu=/124319096/external/single_ad_samples&ciu_szs=300x250&impl=s&gdfp_req=1&env=vp&output=vast&unviewed_position_start=1&cust_params=deployment%3Ddevsite%26sample_ct%3Dskippablelinear&correlator='
                  }
                });
                playerInstance.on('ready', function() {
                        var config = playerInstance.getConfig();
                        var utils = playerInstance.utils;
                        var playerHeight = config.containerHeight;
                        var playerOffsetTop = getElementOffsetTop(playerContainerEl);
                        playerContainerEl.style.height = playerHeight + 'px';
                        function onScrollViewHandler() {
                            var minimize = getScrollTop() >= playerOffsetTop;

                            utils.toggleClass(playerContainerEl, 'player-minimize', minimize);
                            playerInstance.resize();
                        }

                        var isScrollTimeout = false;

                        window.onload = function() {
                            if (isScrollTimeout) return;
                            isScrollTimeout = true;
                            onScrollViewHandler();
                            setTimeout(function() {
                                isScrollTimeout = false;
                            }, 80);

                        };

                    });
                </script>
