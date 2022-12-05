import { getDiceRollArray } from './utils.js'; // import from named export

// Character constructor v1.1
function Character(data) {

  Object.assign(this, data) // use Object.assign to properties
  // Character methods:
  this.getDiceHtml = function(diceCount) {
    return getDiceRollArray(diceCount).map(num=> {
      return `<div class="dice">${num}</div>`;
    }).join(''); // eliminate commas with join
  }
  this.getCharacterHtml = function() {
    const { name, avatar, health, diceCount } = this;
    const diceHtml = this.getDiceHtml(diceCount);
    // build html for the character render
    return `
      <div class="character-card">Ro
        <h4 class="name">${name}</h4>
        <img class="avatar" src="${avatar}"/>
        <p class="health">health: <b>${health}</b></p>
        <div class="dice-container">
          ${diceHtml}
        </div>
      </div>`;
  }
}

export default Character