import getRandomBlock from "../utils/block.js";
import rollDice from "../utils/dice.js";
async function playerRaceEngine(character1, character2) {
  //Inicializa cada rodada
  for (let round = 1; round <= 5; round++) {
    console.log(`Rodada: ${round}`);

    //Gera um bloco de corrida aleatório ( o da vez é o mesmo para os dois jogadores)
    let block = await getRandomBlock();
    console.log(`Bloco: ${block}`);

    //Rola os dados
    let diceResultFirst = await rollDice();
    let diceResultSecond = await rollDice();

    let totalTestSkillFirst = 0;
    let totalTestSkillSecond = 0;
  }
}

export default playerRaceEngine;
