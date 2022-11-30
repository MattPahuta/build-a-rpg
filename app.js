
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
  let newDiceRolls = [];
  for (let i = 0; i < diceCount; i++) {
    newDiceRolls.push(Math.floor(Math.random() * 6) + 1); // generate random rolls, 1-6
  }
  return newDiceRolls;
}

// build dice roll html
function getDiceHtml(diceCount) {
  return getDiceRollArray(diceCount).map(num=> {
    return `<div class="dice">${num}</div>`;
  }).join(''); // eliminate commas with join
}

// render character
function renderCharacter(data) {
  const { elementId, name, avatar, health, diceCount } = data; // destructure data object
  // const diceHtml = diceRoll.map(roll => {
  //   return `<div class="dice">${roll}</div>`
  // }).join('');

  // insert html into targeted div
  document.getElementById(elementId).innerHTML = 
   `<div class="character-card">
      <h4 class="name">${name}</h4>
      <img class="avatar" src="${avatar}"/>
      <p class="health">health: <b>${health}</b></p>
      <div class="dice-container">
        ${getDiceHtml(diceCount)}
      </div>
    </div>`;
}

renderCharacter(hero)
renderCharacter(monster)