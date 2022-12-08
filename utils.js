// get random dice rolls array
function getDiceRollArray(diceCount) {
  return new Array(diceCount).fill(0).map(() => Math.floor(Math.random() * 6) + 1);
}

function getDicePlaceholderHtml(diceCount) {
  return new Array(diceCount).fill(0).map(() => {
    return `<div class="placeholder-dice"></div>`
  }).join('');
}

// (100 * value) / total value = percentage
// (100 * 25) / 38 => 65.789 (25 = 65% of 38)
const getPercentage = (remainingHealth, maximumHealth) => (100 * remainingHealth) / maximumHealth;
// named export
export { getDiceRollArray, getDicePlaceholderHtml, getPercentage }