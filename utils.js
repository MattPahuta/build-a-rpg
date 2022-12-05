// get random dice rolls array
function getDiceRollArray(diceCount) {
  return new Array(diceCount).fill(0).map(() => Math.floor(Math.random() * 6) + 1);
}

// named export
export { getDiceRollArray }