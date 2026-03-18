class Race {
  /**
   * Cria uma corrida entre dois personagens com dependências injetadas.
   */
  constructor(
    player,
    enemy,
    { rounds = 5, getRandomBlock, rollDice, logRoll },
  ) {
    this.player = player;
    this.enemy = enemy;
    this.rounds = rounds;
    this.getRandomBlock = getRandomBlock;
    this.rollDice = rollDice;
    this.logRoll = logRoll;
  }

  /**
   * Executa a corrida completa rodada a rodada.
   */
  async start() {
    console.log(
      `Corrida entre ${this.player.name} e ${this.enemy.name} começando...\n`,
    );

    for (let round = 1; round <= this.rounds; round += 1) {
      await this.runRound(round);
    }

    this.showFinalResult();
  }

  /**
   * Executa uma rodada: sorteia bloco, rola dados e aplica resultado.
   */
  async runRound(round) {
    const block = this.getRandomBlock();
    const playerDice = this.rollDice();
    const enemyDice = this.rollDice();

    console.log(`Rodada: ${round}`);
    console.log(`Bloco: ${block}`);

    this.logRoll(
      this.player.name,
      block,
      playerDice,
      this.getSkillLabel(block),
    );
    this.logRoll(this.enemy.name, block, enemyDice, this.getSkillLabel(block));

    const playerTotal = this.player.getSkillByBlock(block) + playerDice;
    const enemyTotal = this.enemy.getSkillByBlock(block) + enemyDice;

    this.applyRoundResult(playerTotal, enemyTotal);
    console.log("------------------------------");
  }

  /**
   * Traduz o bloco para o rótulo de atributo usado no log.
   */
  getSkillLabel(block) {
    const labels = {
      RETA: "velocidade",
      CURVA: "manobrabilidade",
      CONFRONTO: "poder",
    };

    return labels[block] ?? "atributo";
  }

  /**
   * Aplica o vencedor da rodada e atualiza os pontos.
   */
  applyRoundResult(playerTotal, enemyTotal) {
    if (playerTotal === enemyTotal) {
      console.log("\nOs jogadores empataram!");
      return;
    }

    const winner = playerTotal > enemyTotal ? this.player : this.enemy;
    winner.addPoint();
    console.log(`\n${winner.name} marcou um ponto!`);
  }

  /**
   * Exibe o placar final e o campeão da corrida.
   */
  showFinalResult() {
    console.log("\nResultado final:");
    console.log(`${this.player.name}: ${this.player.points} ponto(s)`);
    console.log(`${this.enemy.name}: ${this.enemy.points} ponto(s)`);

    if (this.player.points === this.enemy.points) {
      console.log("Empate geral!");
      return;
    }

    const champion =
      this.player.points > this.enemy.points
        ? this.player.name
        : this.enemy.name;

    console.log(`Vencedor: ${champion}`);
  }
}

export default Race;
