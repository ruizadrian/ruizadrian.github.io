function createPlayer() {
  var playerInstance = jwplayer('JWHCM_IC');
    playerInstance.setup({
      playlist: 'https://cdn.jwplayer.com/v2/playlists/8FkXr22R',
      autostart: true,
      autoplayadsmuted: true
    }); 
    
    playerInstance.on('playAttemptFailed', function (e){
      console.log(e);
    });
    playerInstance.on('adError', function (e){
      playerInstance.remove();
    });
}

window.onloadFuncs.push(function() {
  createPlayer();
});