// Battle system (migration phase 3)
// Uses legacy compatibility via window globals

window.currentEnemy = null;

window.battle = function (enemy) {
  window.currentEnemy = enemy;

  const scene = document.getElementById('scene');
  const buttons = document.getElementById('buttons');

  scene.innerHTML = enemy.icon || '👾';

  window.log?.(`⚔️ ${enemy.name} があらわれた！`);

  buttons.innerHTML = `
    <button onclick="attack()">⚔️こうげき</button>
    <button onclick="healBattle()">🧪かいふく</button>
  `;

  window.attack = function () {
    const dmg = window.party.reduce((sum, m) => sum + m.atk, 0);

    enemy.hp -= dmg;
    window.log?.(`💥 ${dmg} ダメージ！`);

    if (enemy.hp <= 0) {
      win(enemy);
      return;
    }

    window.hero.hp -= enemy.atk;

    if (window.hero.hp <= 0) {
      window.hero.hp = window.hero.maxHp;
      window.log?.('💫 たおれた... もどされた');
      window.map?.();
    }

    window.update?.();
  };

  window.healBattle = function () {
    if (window.hero.potions <= 0) {
      window.log?.('❌ やくそうがない');
      return;
    }

    window.hero.potions--;
    window.hero.hp = Math.min(window.hero.maxHp, window.hero.hp + 40);
    window.update?.();
  };

  function win(enemy) {
    window.hero.gold += enemy.gold || 0;
    window.hero.level++;
    window.hero.maxHp += 10;
    window.hero.hp = window.hero.maxHp;

    if (enemy.join && !window.party.find(p => p.name === enemy.join.name)) {
      window.party.push(enemy.join);
      window.log?.(`🎉 ${enemy.join.name} がなかまになった！`);
    }

    if (enemy.story) window.story = enemy.story;

    window.log?.('🏆 しょうり！');

    if (enemy.boss) {
      window.log?.('🌟 ぼすをたおした！せかいはへいわになった！');
      return;
    }

    window.map?.();
  }
};