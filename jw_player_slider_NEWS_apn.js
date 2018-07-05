function createPlayer() {
  var playerInstance = jwplayer('JWHCM');
    playerInstance.setup({
      playlist: 'https://cdn.jwplayer.com/v2/playlists/hUn6yT7j',
      autoplayadsmuted: true,
      autostart: true
      //autoplayadsmuted: true
    }); 
    
}

window.onloadFuncs.push(function() {
  createPlayer();
});