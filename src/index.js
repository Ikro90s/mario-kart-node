import players from "./data/players.js";

async function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}

(async function main() {
  console.log(
    `Corrida entre ${players.playerFirst.NAME} e ${players.playerSecond.NAME} começando...\n`,
  );
})();
