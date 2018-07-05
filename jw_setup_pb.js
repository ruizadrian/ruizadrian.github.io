function createPlayer() {
  var playerInstance = jwplayer('JWHCM_IC');
    playerInstance.setup({
      file:"http://content.jwplatform.com/videos/gNMNAnzl.mp4",
      autoplayadsmuted: true,
      autostart: true
    }); 
    
    playerInstance.on('adError', function (e){
      playerInstance.remove();
      googletag.pubads().definePassback('/138871148/HCTV.mw.300x250.backfill', [[300,250]])
                   .setClickUrl('%%CLICK_URL_UNESC%%')
                   .display();
    });
}

window.onloadFuncs.push(function() {
  createPlayer();
});