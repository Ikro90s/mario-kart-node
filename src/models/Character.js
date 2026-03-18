class Character {
  /**
   * Cria um personagem com seus atributos base.
   */
  constructor({ name, speed, handling, power }) {
    this.name = name;
    this.speed = speed;
    this.handling = handling;
    this.power = power;
    this.points = 0;
  }

  /**
   * Retorna o atributo correto conforme o bloco atual da corrida.
   */
  getSkillByBlock(block) {
    const skillByBlock = {
      RETA: this.speed,
      CURVA: this.handling,
      CONFRONTO: this.power,
    };

    return skillByBlock[block] ?? 0;
  }

  /**
   * Soma 1 ponto ao personagem.
   */
  addPoint() {
    this.points += 1;
  }
}

export default Character;
