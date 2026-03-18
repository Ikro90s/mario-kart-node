import createPlayers from "./data/players.js";
import Race from "./models/Race.js";
import getRandomBlock from "./utils/block.js";
import rollDice from "./utils/dice.js";
import logRoll from "./utils/logs.js";
import chooseCharacters from "./services/characterSelector.js";

/**
 * Inicializa a aplicação, escolhe os personagens e executa a corrida.
 */
(async function main() {
  const players = createPlayers();
  const [playerName, enemyName] = process.argv.slice(2);

  const { player, enemy } = await chooseCharacters(players, {
    playerName,
    enemyName,
  });

  const race = new Race(player, enemy, {
    rounds: 5,
    getRandomBlock,
    rollDice,
    logRoll,
  });

  await race.start();
})();
