// get random dice rolls array
function getDiceRollArray(diceCount) {
  return new Array(diceCount).fill(0).map(() => Math.floor(Math.random() * 6) + 1);
}

function getDicePlaceholderHtml(diceCount) {
  return new Array(diceCount).fill(0).map(() => {
    return `<div class="placeholder-dice"></div>`
  }).join('');
}

// named export
export { getDiceRollArray, getDicePlaceholderHtml }