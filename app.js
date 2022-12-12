import characterData from './data.js'; // import from default export
import Character from './Character.js'; // import from defualt export

// monsters array
let monstersArray = ['orc', 'demon', 'goblin'];
let isWaiting = false;

function getNewMonster() {
  const nextMonsterData = characterData[monstersArray.shift()];
  // *** Note: nexMonsterData as 'question' in ternary:
  // nextMonsterData evaluates to undefined (falsy) if there's no more monsters in array to assign as a value
  return nextMonsterData ? new Character(nextMonsterData) : {}; 
}

// attack function
function attack() {
  if (!isWaiting) {
    wizard.setDiceHtml()
    monster.setDiceHtml()
    wizard.takeDamage(monster.currentDiceScore)
    monster.takeDamage(wizard.currentDiceScore)
    render(); // call render to get fresh dice rolls
  
    if (wizard.dead) { // if wizard is dead, end the game
      endGame()
    } else if (monster.dead) {
        isWaiting = true;
        if (monstersArray.length > 0) {
          setTimeout(() => { 
            monster = getNewMonster()
            render()
            isWaiting = false;
          }, 1500)
        } else {
          endGame()
        }
    }
  }

}

function endGame() {
  isWaiting = true;
  const endMessage = wizard.health === 0 && monster.health === 0 ? 'No victors - all creatures dead'
    : wizard.health > 0 ? 'Wizard wins' // *** ToDo: update 'Wizard wins' to ${hero.name} wins
    : `The ${monster.name} wins` 

  const endEmoji = wizard.health > 0 ? "🔮" : "☠️"

  setTimeout(() => {
    document.querySelector('.game-container').innerHTML = 
    `<div class="end-game">
      <h2>Game Over</h2>
      <h3>${endMessage}</h3>
      <p class="end-emoji">${endEmoji}</p>
    </div>` 
  }, 1500)

}

// render charcaters v2.0
function render() {
  document.getElementById('hero').innerHTML = wizard.getCharacterHtml()
  document.getElementById('monster').innerHTML = monster.getCharacterHtml()
}

document.getElementById('attack-button').addEventListener('click', attack);

// build characters
const wizard = new Character(characterData.hero); // *** ToDo: update wizard to hero
let monster = getNewMonster();

render() // render the game board and initial characterss


class AdvertisingChannel {
  constructor(data){
      Object.assign(this, data)
      this.conversionRate = this.conversions / this.clicks * 100 
  }

  getAdvertisingChannel() {
      console.log('getting data...')
      const { site, adViews, clicks, conversions, conversionRate} = this;
      return `
      <div class="site-name">${site}</div>
      <div>Views: ${adViews}</div>
      <div>Clicks: ${clicks} </div>
      <div>Conversions: ${conversions}</div>
      <div>Conv. Rate: <span class="highlight"> ${conversionRate} %</span></div>  
      `
  }
}

const facebook = new AdvertisingChannel(adData.facebook)
const twitter = new AdvertisingChannel(adData.twitter)
const instagram = new AdvertisingChannel(adData.instagram)