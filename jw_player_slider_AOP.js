function createPlayer() {
  var playerInstance = jwplayer('JWHCM');
    playerInstance.setup({
      playlist: 'https://cdn.jwplayer.com/v2/playlists/FQQT1Opb',
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