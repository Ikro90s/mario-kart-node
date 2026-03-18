async function logRollFunction(characterName, block, diceResult, attribute) {
  console.log(
    `${characterName} jogou dado de ${attribute} na curva ${block} e tirou ${diceResult}`,
  );
}

export default logRollFunction;
