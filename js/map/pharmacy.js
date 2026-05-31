// Pharmacy module (migration phase 6)

window.pharmacy = function () {
  const scene = document.getElementById('scene');
  const buttons = document.getElementById('buttons');

  scene.innerHTML = '💊';

  window.log?.('💊 やくやへようこそ');

  buttons.innerHTML = `
    <button onclick="buyPotion()">🧪 やくそう (20G)</button>
    <button onclick="buySuperPotion()">💊 ぜんかいふく (50G)</button>
    <button onclick="map()">⬅ もどる</button>
  `;
};

window.buyPotion = function () {
  if (window.hero.gold < 20) {
    window.log?.('❌ おかねがたりない');
    return;
  }

  window.hero.gold -= 20;
  window.hero.potions++;
  window.update?.();
  window.log?.('🧪 やくそうをかった');
};

window.buySuperPotion = function () {
  if (window.hero.gold < 50) {
    window.log?.('❌ おかねがたりない');
    return;
  }

  window.hero.gold -= 50;
  window.hero.hp = window.hero.maxHp;
  window.update?.();
  window.log?.('💊 HPぜんかいふく');
};