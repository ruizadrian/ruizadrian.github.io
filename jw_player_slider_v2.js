function createPlayer() {
  var playerInstance = jwplayer('JWHCM');
  var errors = 0;
  playerInstance.setup({
    //file:"//content.jwplatform.com/players/37CatBvi-VFOh6ElZ.js",
    playlist: 'https://cdn.jwplayer.com/v2/playlists/8FkXr22R',
    //autostart: true,
    autoplayadsmuted: true,
    autostart: true
  }); 
  
  playerInstance.on('adError', function (e){
    errors++;
    if (errors = 2) {
      playerInstance.remove();
    }

  });



}


window.onloadFuncs.push(function() {
  createPlayer();
});