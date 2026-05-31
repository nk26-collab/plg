// Party / Monsters system (migration phase 9)

// 仲間追加
window.addMonster = function (monster) {
  if (!monster) return;

  if (!window.party) window.party = [];

  const exists = window.party.find(m => m.name === monster.name);
  if (exists) return;

  window.party.push(monster);
  window.log?.(`👥 ${monster.name} がなかまになった！`);
  window.update?.();
};

// 仲間強化（シンプル進化）
window.evolveMonster = function (name) {
  const m = window.party.find(p => p.name === name);
  if (!m) return;

  m.atk = Math.floor((m.atk || 5) * 1.5);
  m.evolved = true;

  window.log?.(`✨ ${m.name} がしんかした！`);
  window.update?.();
};

// デフォルト仲間（初期化補助）
window.initParty = function () {
  if (!window.party || window.party.length === 0) {
    window.party = [
      { name: '🐱ニャルン', atk: 8 }
    ];
  }
};

// 自動初期化
window.initParty();