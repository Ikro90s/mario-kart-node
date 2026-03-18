import { createInterface } from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

/**
 * Mostra no terminal a lista numerada de personagens disponíveis.
 */
function listCharacters(players) {
  console.log("Escolha os personagens pelo número:");
  players.forEach((character, index) => {
    console.log(`${index + 1} - ${character.name}`);
  });
}

/**
 * Converte a entrada do usuário em índice válido do array de jogadores.
 */
function parseIndex(choice, playersLength) {
  const parsed = Number(choice) - 1;
  const isValid =
    Number.isInteger(parsed) && parsed >= 0 && parsed < playersLength;

  return isValid ? parsed : -1;
}

/**
 * Busca personagem por nome, ignorando diferenças de maiúsculas/minúsculas.
 */
function findByName(players, name) {
  return players.find(
    (character) => character.name.toLowerCase() === String(name).toLowerCase(),
  );
}

/**
 * Pergunta repetidamente até receber uma opção válida no menu.
 */
async function askUntilValid(rl, message, players, excludedIndex = -1) {
  while (true) {
    const answer = await rl.question(message);
    const selectedIndex = parseIndex(answer, players.length);

    if (selectedIndex === -1) {
      console.log("Opção inválida. Tente novamente.");
      continue;
    }

    if (selectedIndex === excludedIndex) {
      console.log("Escolha um personagem diferente para o inimigo.");
      continue;
    }

    return selectedIndex;
  }
}

/**
 * Resolve a escolha de jogador e inimigo por argumentos ou menu interativo.
 */
async function chooseCharacters(players, options = {}) {
  const { playerName, enemyName } = options;

  if (playerName && enemyName) {
    const selectedPlayer = findByName(players, playerName);
    const selectedEnemy = findByName(players, enemyName);

    if (
      selectedPlayer &&
      selectedEnemy &&
      selectedPlayer.name !== selectedEnemy.name
    ) {
      return { player: selectedPlayer, enemy: selectedEnemy };
    }
  }

  if (!input.isTTY) {
    return {
      player: players[0],
      enemy: players[1],
    };
  }

  listCharacters(players);

  const rl = createInterface({ input, output });
  try {
    const playerIndex = await askUntilValid(
      rl,
      "Digite o número do seu personagem: ",
      players,
    );

    const enemyIndex = await askUntilValid(
      rl,
      "Digite o número do inimigo: ",
      players,
      playerIndex,
    );

    return {
      player: players[playerIndex],
      enemy: players[enemyIndex],
    };
  } finally {
    rl.close();
  }
}

export default chooseCharacters;
