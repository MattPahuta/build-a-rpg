import characterData from './data.js'; // import from default export
import Character from './Character.js'; // import from defualt export

// build characters
const wizard = new Character(characterData.hero);
const orc = new Character(characterData.monster);

// render charcaters v2.0
function render() {
  document.getElementById('hero').innerHTML = wizard.getCharacterHtml()
  document.getElementById('monster').innerHTML = orc.getCharacterHtml()
}

render()