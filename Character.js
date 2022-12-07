import { getDicePlaceholderHtml, getDiceRollArray } from './utils.js'; // import from named export

// Character constructor v1.1
function Character(data) {

  Object.assign(this, data) // use Object.assign to properties
  // Character props and methods:
  this.diceArray = getDicePlaceholderHtml(this.diceCount)

  this.getDiceHtml = function() {
    this.currentDiceScore = getDiceRollArray(this.diceCount)
    this.diceArray = this.currentDiceScore.map((num) => {
      return `<div class="dice">${num}</div>`
    }).join('') // eliminate commas with join
  }

  this.takeDamage = function(attackScoreArray) {
    const totalAttackScore = attackScoreArray.reduce((total, currentVal) => total + currentVal);
    this.health -= totalAttackScore;
    if (this.health <= 0) {
      this.health = 0;
      this.dead = true;
    } 
  }

  this.getCharacterHtml = function() {
    const { name, avatar, health, diceCount, diceArray } = this;
    // const diceHtml = this.getDiceHtml(diceCount); // not needed?
    // build html for the character render
    return `
      <div class="character-card">
        <h4 class="name">${name}</h4>
        <img class="avatar" src="${avatar}"/>
        <p class="health">health: <b>${health}</b></p>
        <div class="dice-container">
          ${diceArray}
        </div>
      </div>`;
  }
}

export default Character