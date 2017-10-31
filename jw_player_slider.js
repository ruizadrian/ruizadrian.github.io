function createPlayer() {
  var playerInstance = jwplayer('JWHCM');
    playerInstance.setup({
      //file:"//content.jwplatform.com/players/37CatBvi-VFOh6ElZ.js",
      playlist: 'https://cdn.jwplayer.com/v2/playlists/8FkXr22R',
      autostart: true,
      autoplayadsmuted: true
    }); 
    
    playerInstance.on('adError', function (e){
      playerInstance.remove();
    });
}

window.onloadFuncs.push(function() {
  createPlayer();
});