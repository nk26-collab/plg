// Save / Load system (migration phase 2)
// Works with legacy game.js via window globals

window.saveGame = function () {
  const data = {
    hero: window.hero,
    party: window.party,
    story: window.story,
    inventory: window.inventory,
    elite: window.elite
  };

  localStorage.setItem('shinju_save', JSON.stringify(data));
};

window.loadGame = function () {
  const raw = localStorage.getItem('shinju_save');
  if (!raw) return;

  try {
    const data = JSON.parse(raw);

    if (data.hero) Object.assign(window.hero, data.hero);
    if (data.party) window.party = data.party;
    if (data.story !== undefined) window.story = data.story;
    if (data.inventory) window.inventory = data.inventory;
    if (data.elite !== undefined) window.elite = data.elite;

  } catch (e) {
    console.warn('Save load failed', e);
  }
};

// auto-load on module import
window.loadGame();