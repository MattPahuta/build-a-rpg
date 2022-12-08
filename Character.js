import { getDicePlaceholderHtml, getDiceRollArray, getPercentage } from './utils.js'; // import from named export

// Character constructor v2.0
function Character(data) {

  Object.assign(this, data); // use Object.assign to properties
  this.maxHealth = this.health;

  this.diceHtml = getDicePlaceholderHtml(this.diceCount);

  this.setDiceHtml = function() {
    this.currentDiceScore = getDiceRollArray(this.diceCount)
    this.diceHtml = this.currentDiceScore.map((num) => {
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

  this.getHealthBarHtml = function() {
    const percent = getPercentage(this.health, this.maxHealth);
    return `
      <div class="health-bar-outer">
        <div class="health-bar-inner ${percent <= 25 ? "danger" : null}" style="width: ${percent}%;">
        </div>
      </div>`
  }

  this.getCharacterHtml = function() {
    const { name, avatar, health, diceCount, diceHtml } = this; // ToDo: remove diceCount
    const healthBar = this.getHealthBarHtml();
    return `
      <div class="character-card">
        <h4 class="name">${name}</h4>
        <img class="avatar" src="${avatar}"/>
        <p class="health">health: <b>${health}</b></p>
        ${healthBar}
        <div class="dice-container">
          ${diceHtml}
        </div>
      </div>`;
  }
}

export default Character