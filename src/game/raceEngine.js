import getRandomBlock from "../utils/block.js";
import rollDice from "../utils/dice.js";
import logRollFunction from "../utils/logs.js";
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

    if (block === "RETA") {
      totalTestSkillFirst = character1.VELOCIDADE + diceResultFirst;
      totalTestSkillSecond = character2.VELOCIDADE + diceResultSecond;

      await logRollFunction(
        character1.NAME,
        block,
        diceResultFirst,
        "velocidade",
      );
      await logRollFunction(
        character2.NAME,
        block,
        diceResultSecond,
        "velocidade",
      );
    } else if (block === "CURVA") {
      totalTestSkillFirst = character1.MANOBRABILIDADE + diceResultFirst;
      totalTestSkillSecond = character2.MANOBRABILIDADE + diceResultSecond;

      await logRollFunction(
        character1.NAME,
        block,
        diceResultFirst,
        "manobrabilidade",
      );
      await logRollFunction(
        character2.NAME,
        block,
        diceResultSecond,
        "manobrabilidade",
      );
    } else if (block === "CONFRONTO") {
      totalTestSkillFirst = character1.PODER + diceResultFirst;
      totalTestSkillSecond = character2.PODER + diceResultSecond;

      await logRollFunction(character1.NAME, block, diceResultFirst, "poder");
      await logRollFunction(character2.NAME, block, diceResultSecond, "poder");
    }
  }
}

export default playerRaceEngine;
