import characterData from './data.js'; // import from default export
import Character from './Character.js'; // import from defualt export

// attack function
function attack() {
  render(); // call render to get fresh dice rolls
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