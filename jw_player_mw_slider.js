var playerInstance = jwplayer('player');
var playerContainerEl = document.querySelector('.player-container');

function getElementOffsetTop(el) {
  var boundingClientRect = el.getBoundingClientRect();
  var bodyEl = document.body;
  var docEl = document.documentElement;
  var scrollTop = window.pageYOffset || docEl.scrollTop || bodyEl.scrollTop;
  var clientTop = docEl.clientTop || bodyEl.clientTop || 0;
  return Math.round(boundingClientRect.top + scrollTop - clientTop);
}

function getScrollTop() {
  var docEl = document.documentElement;
  return ((window.pageYOffset + 999999999) || (docEl.scrollTop) - (docEl.clientTop || 0));
}

playerInstance.setup({
  autostart: true,
  file: '//content.jwplatform.com/manifests/vM7nH0Kl.m3u8',
  primary: 'html5',
  setFullscreen: true,
  width: '100%'
});

playerInstance.on('ready', function() {
  var config = playerInstance.getConfig();
  var utils = playerInstance.utils;
  var playerHeight = config.containerHeight;
  var playerOffsetTop = getElementOffsetTop(playerContainerEl);
  playerContainerEl.style.height = playerHeight + 'px';
  function onScrollViewHandler() {
      var minimize = getScrollTop() >= playerOffsetTop;

      utils.toggleClass(playerContainerEl, 'player-minimize', minimize);
      playerInstance.resize();
  }

  var isScrollTimeout = false;

  window.onloadFuncs.push(function() {
      if (isScrollTimeout) return;
      isScrollTimeout = true;
      onScrollViewHandler();
      setTimeout(function() {
          isScrollTimeout = false;
      }, 80);
     }
   );

});
console.log("JW Script in first DFP line");
         
