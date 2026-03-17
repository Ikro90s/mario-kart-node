import getRandomBlock from "../utils/block.js";

async function playerRaceEngine(character1, character2) {
  for (let round = 1; round <= 5; round++) {
    console.log(`Rodada: ${round}`);
    let block = await getRandomBlock();
    console.log(`Bloco: ${block}`);
  }
}

export default playerRaceEngine;
