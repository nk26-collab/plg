// UI system (migration phase 5)
// Centralized DOM updates and logging

window.log = function (text) {
  const logEl = document.getElementById('log');
  if (!logEl) return;

  logEl.innerHTML += text + '<br>';
  logEl.scrollTop = logEl.scrollHeight;

  window.saveGame?.();
};

window.update = function () {
  const status = document.getElementById('status');
  if (!status) return;

  const hero = window.hero;

  status.innerHTML = `
    ❤️ ${hero.hp}/${hero.maxHp} <br>
    ⭐ Lv.${hero.level} <br>
    💰 ${hero.gold} <br>
    🧪 ${hero.potions} <br>
    🎒 ${window.inventory.join(' ')} <br>
    👥 ${window.party.map(p => p.name).join(' ')}
  `;
};

window.renderButtons = function (html) {
  const el = document.getElementById('buttons');
  if (el) el.innerHTML = html;
};