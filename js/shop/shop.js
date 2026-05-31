// Shop module (migration phase 7)

window.shop = function () {
  const scene = document.getElementById('scene');
  const buttons = document.getElementById('buttons');

  scene.innerHTML = '🏪';

  window.log?.('🏪 みせへようこそ');

  buttons.innerHTML = `
    <button onclick="buySword()">⚔️ けん (100G)</button>
    <button onclick="buyShield()">🛡️ たて (80G)</button>
    <button onclick="map()">⬅ もどる</button>
  `;
};

window.buySword = function () {
  if (window.hero.gold < 100) {
    window.log?.('❌ おかねがたりない');
    return;
  }

  window.hero.gold -= 100;
  window.hero.atk = (window.hero.atk || 10) + 5;

  window.update?.();
  window.log?.('⚔️ けんをてにいれた！');
};

window.buyShield = function () {
  if (window.hero.gold < 80) {
    window.log?.('❌ おかねがたりない');
    return;
  }

  window.hero.gold -= 80;
  window.hero.maxHp += 20;
  window.hero.hp = window.hero.maxHp;

  window.update?.();
  window.log?.('🛡️ たてでつよくなった！');
};