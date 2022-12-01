
// hero and monster objects
const hero = {
  elementId: 'hero',
  name: 'Wizard',
  avatar: 'images/wizard.png',
  health: 60,
  diceCount: 3,
}

const monster = {
  elementId: 'monster',
  name: 'Orc',
  avatar: 'images/orc.png',
  health: 10,
  diceCount: 1,
}

// get random dice rolls array
function getDiceRollArray(diceCount) {
  return new Array(diceCount).fill(0).map(() => Math.floor(Math.random() * 6) + 1);
}

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
    const { elementId, name, avatar, health, diceCount } = this;
    const diceHtml = this.getDiceHtml(diceCount);
    // build html for the character render
    return `
      <div class="character-card">
        <h4 class="name">${name}</h4>
        <img class="avatar" src="${avatar}"/>
        <p class="health">health: <b>${health}</b></p>
        <div class="dice-container">
          ${diceHtml}
        </div>
      </div>`;
  }
}
// build characters
const wizard = new Character(hero);
const orc = new Character(monster);

// render charcaters v2.0
function render() {
  document.getElementById(wizard.elementId).innerHTML = wizard.getCharacterHtml()
  document.getElementById(orc.elementId).innerHTML = orc.getCharacterHtml()
}

render()


// build dice roll html
// function getDiceHtml(diceCount) {
//   return getDiceRollArray(diceCount).map(num=> {
//     return `<div class="dice">${num}</div>`;
//   }).join(''); // eliminate commas with join
// }

// render character v1.0
// function renderCharacter(data) {
//   const { elementId, name, avatar, health, diceCount } = data; // destructure data object
//   document.getElementById(elementId).innerHTML = 
//    `<div class="character-card">
//       <h4 class="name">${name}</h4>
//       <img class="avatar" src="${avatar}"/>
//       <p class="health">health: <b>${health}</b></p>
//       <div class="dice-container">
//         ${getDiceHtml(diceCount)}
//       </div>
//     </div>`;
// }

// renderCharacter(hero)
// renderCharacter(monster)