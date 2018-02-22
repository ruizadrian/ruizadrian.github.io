function createPlayer() {
  var playerInstance = jwplayer('JWHCM_IC');
    playerInstance.setup({
      //playlist: 'https://cdn.jwplayer.com/v2/playlists/FQQT1Opb',
      file:"http://content.jwplatform.com/videos/gNMNAnzl.mp4",
      autoplayadsmuted: true,
      autostart: true
    }); 
    
    playerInstance.on('adError', function (e){
      playerInstance.remove();
    });
}

window.onloadFuncs.push(function() {
  createPlayer();
});