// Global game state (phase 1 migration)
// Keep compatibility with existing game.js

window.hero = window.hero || {
  level: 1,
  hp: 100,
  maxHp: 100,
  gold: 0,
  potions: 3
};

window.story = window.story ?? 0;

window.inventory = window.inventory || ['🌟しんじゅ'];

window.party = window.party || [
  { name: '🐱ニャルン', atk: 8 }
];

window.elite = window.elite ?? 0;

// helper accessor (optional future use)
window.getState = function () {
  return {
    hero: window.hero,
    story: window.story,
    inventory: window.inventory,
    party: window.party,
    elite: window.elite
  };
};