// Story system (migration phase 8)
// Controls story progression and events

window.storyText = function (text) {
  window.log?.('📖 ' + text);
};

window.startStory = function () {
  const s = window.story || 0;

  if (s === 0) {
    window.storyText('むかし、このせかいはくらやみにつつまれていた...');
    window.storyText('あなたは「しんじゅ」をもとめるたびにでる。');
    window.story = 1;
  }

  if (s === 1) {
    window.storyText('まものがあらわれはじめた...');
    window.storyText('まずはもりへむかえ。');
  }

  if (s === 2) {
    window.storyText('だいちがゆれ、してんのうのきけんがせまる...');
  }

  if (s >= 3) {
    window.storyText('さいごのたたかいがちかい...');
  }
};

// trigger story on map enter
window.onEnterMap = function () {
  window.startStory?.();
};