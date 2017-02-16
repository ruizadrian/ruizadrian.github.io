<script type="text/javascript">
(function()
   {
     var lkqdSettings = {
       pid: 282,
       sid: 183601,
       playerContainerId: '',
       playerId: '',
       playerWidth: '',
       playerHeight: '',
       execution: 'interstitial',
       placement: '',
       playInitiation: 'user',
       volume: 100,
       trackImp: '',
       trackClick: '',
       custom1: '',
       custom2: '',
       custom3: '',
       pubMacros: '',
       dfp: false,
       lkqdId: new Date().getTime().toString() + Math.round(Math.random()*1000000000).toString(),
     };

     var lkqdVPAID;
     var creativeData = '';
     var environmentVars = { slot: document.getElementById(lkqdSettings.playerContainerId), videoSlot: document.getElementById(lkqdSettings.playerId), videoSlotCanAutoPlay: true, lkqdSettings: lkqdSettings };

     function onVPAIDLoad()
     {
       lkqdVPAID.subscribe(function() { lkqdVPAID.startAd(); }, 'AdLoaded');
     }

     var vpaidFrame = document.createElement('iframe');
     vpaidFrame.id = lkqdSettings.lkqdId;
     vpaidFrame.name = lkqdSettings.lkqdId;
     vpaidFrame.style.display = 'none';
     var vpaidFrameLoaded = function() {
       vpaidLoader = vpaidFrame.contentWindow.document.createElement('script');
       vpaidLoader.src = 'https://ad.lkqd.net/vpaid/formats.js?pid=282&sid=183601';
       vpaidLoader.onload = function() {
         lkqdVPAID = vpaidFrame.contentWindow.getVPAIDAd();
         onVPAIDLoad();
         lkqdVPAID.handshakeVersion('2.0');
         lkqdVPAID.initAd(lkqdSettings.playerWidth, lkqdSettings.playerHeight, 'normal', 600, creativeData, environmentVars);
       };
       vpaidFrame.contentWindow.document.body.appendChild(vpaidLoader);
     };
     vpaidFrame.onload = vpaidFrameLoaded;
     vpaidFrame.onerror = vpaidFrameLoaded;
     document.documentElement.appendChild(vpaidFrame);
   }();
</script>
