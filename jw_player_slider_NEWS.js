function createPlayer() {
  var playerInstance = jwplayer('JWHCM');
    playerInstance.setup({
      playlist: 'https://cdn.jwplayer.com/v2/playlists/hUn6yT7j',
      autoplayadsmuted: true,
      autostart: true
      //autoplayadsmuted: true
    }); 
    
    playerInstance.on('adError', function (e){
      playerInstance.remove();
    });
}

window.onloadFuncs.push(function() {
  createPlayer();
});