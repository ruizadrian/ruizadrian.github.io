function createPlayer() {
  var playerInstance = jwplayer('player');
    playerInstance.setup({
      file:"https://cdn.jwplayer.com/v2/playlists/37CatBvi?format=mrss",
      autostart: true,
      autoplayadsmuted: true
    }); 
}

window.onloadFuncs.push(createPlayer());