import characterData from './data.js'; // import from default export
import Character from './Character.js'; // import from defualt export

// attack function
function attack() {
  wizard.getDiceHtml()
  orc.getDiceHtml()
  wizard.takeDamage(orc.currentDiceScore)
  orc.takeDamage(wizard.currentDiceScore)
  render(); // call render to get fresh dice rolls
  if (wizard.dead || orc.dead) {
    endGame()
  }
}

function endGame() {
  const endMessage = wizard.health === 0 && orc.health === 0 ? 'No victors - all creatures dead'
    : wizard.health > 0 ? 'Wizard wins'
    : 'Orc wins'

  const endEmoji = wizard.health > 0 ? "🔮" : "☠️"

  document.querySelector('.game-container').innerHTML = 
    `<div class="end-game">
      <h2>Game Over</h2>
      <h3>${endMessage}</h3>
      <p class="end-emoji">${endEmoji}</p>
    </div>` 
}

// render charcaters v2.0
function render() {
  document.getElementById('hero').innerHTML = wizard.getCharacterHtml()
  document.getElementById('monster').innerHTML = orc.getCharacterHtml()
}

document.getElementById('attack-button').addEventListener('click', attack);

// build characters
const wizard = new Character(characterData.hero);
const orc = new Character(characterData.monster);
// call render
render()