/**
 * Exibe no console o teste de atributo realizado por um personagem.
 */
function logRoll(characterName, block, diceResult, attribute) {
  console.log(
    `${characterName} testou ${attribute} no bloco ${block} e tirou ${diceResult}`,
  );
}

export default logRoll;
