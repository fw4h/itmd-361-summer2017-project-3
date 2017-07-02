$(document).ready(function() {
  $('.audio').mediaelementplayer({
    alwaysShowControls: true,
    features: ['playpause','volume','progress'],
    audioVolume: 'horizontal',
    audioWidth: 400,
    audioHeight: 120
  });
});