import players from "./data/players.js";
import playerRaceEngine from "./game/raceEngine.js";

(async function main() {
  console.log(
    `Corrida entre ${players.playerFirst.NAME} e ${players.playerSecond.NAME} começando...\n`,
  );
  await playerRaceEngine(players.playerFirst, players.playerSecond);
})();
