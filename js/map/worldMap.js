// World map system (migration phase 4)
// Controls area selection and navigation

window.map = function () {
  const scene = document.getElementById('scene');
  const buttons = document.getElementById('buttons');

  window.update?.();

  scene.innerHTML = '🌎';

  window.log?.('🗺️ せかいにでた！');

  buttons.innerHTML = `
    <button onclick="forest()">🌲 もり</button>
    <button onclick="mountain()">⛰️ やま</button>
    <button onclick="treasure()">🎁 たからばこ</button>
    <button onclick="pharmacy()">💊 やくや</button>
    <button onclick="shop()">🏪 みせ</button>
    <button onclick="eliteFour()">👑 してんのう</button>
  `;
};

// simple placeholders (if not defined in old game.js yet)
window.forest ||= function () {
  window.battle?.({ name: 'ウルフ', icon: '🐺', hp: 40, atk: 8, gold: 20 });
};

window.mountain ||= function () {
  window.battle?.({ name: 'ホーク', icon: '🦅', hp: 70, atk: 12, gold: 40 });
};

window.treasure ||= function () {
  window.hero.gold += 30;
  window.inventory.push('💎');
  window.log?.('🎁 たからばこ！ +30G 💎');
  window.update?.();
};

window.pharmacy ||= function () {
  const scene = document.getElementById('scene');
  const buttons = document.getElementById('buttons');

  scene.innerHTML = '💊';

  buttons.innerHTML = `
    <button onclick="buyPotion()">🧪 20G</button>
    <button onclick="map()">⬅ もどる</button>
  `;
};

window.shop ||= function () {
  const scene = document.getElementById('scene');
  const buttons = document.getElementById('buttons');

  scene.innerHTML = '🏪';

  buttons.innerHTML = `
    <button onclick="buySword()">⚔️ 100G</button>
    <button onclick="map()">⬅ もどる</button>
  `;
};

window.eliteFour ||= function () {
  const names = ['ゴルド', 'アイス', 'サンダ', 'シャドウ'];
  const i = window.elite || 0;

  window.battle?.({
    name: 'してんのう ' + names[Math.min(i, 3)],
    icon: '👑',
    hp: 120 + i * 40,
    atk: 18 + i * 3,
    gold: 100,
    story: i + 1
  });

  window.elite = Math.min(4, i + 1);
};