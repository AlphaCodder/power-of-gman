const c = require("./constants");
const utils = require("./utils");

class GMAN {
  // properties of gman class
  sourceLocation = { x: c.zero, y: c.zero };
  targetLocation = { x: c.zero, y: c.zero };
  totalPower = c.TWO_HUNDRED;
  turns = c.zero;
  
  constructor(source, target) {
    this.sourceLocation = source;
    this.targetLocation = target;
  }
  calculateMoves = () => {
    return (
      Math.abs(this.sourceLocation.x - this.targetLocation.x) +
      Math.abs(this.sourceLocation.y - this.targetLocation.y)
    );
  };

  isTurnReqInXDir = (dir) => {
    if (dir === c.north || dir === c.south)
      if (this.sourceLocation.x != this.targetLocation.x) this.turns++;
      else if (this.sourceLocation.y != this.targetLocation.y) this.turns++;
  };

  isTurnReqInYDir = (dir) => {
    if (dir === c.east || dir === c.west)
      if (this.sourceLocation.y != this.targetLocation.y) this.turns++;
      else if (this.sourceLocation.x != this.targetLocation.x) this.turns++;
  };

  calculateTurns = (dir) => {
    this.isTurnReqInXDir(dir);
    this.isTurnReqInYDir(dir);
    return this.turns;
  };

  calculatePower = (dir) => {
    const distance = this.calculateMoves();
    const turns = this.calculateTurns(dir);
    return this.totalPower - ((distance * c.POWERLOSSBYMOVE) + ((turns + c.one) * c.POWERLOSSBYTURN));
  };
}

const getPowerOfGMan = (inputArray) => {
  const { source, target } = utils.parseInput(inputArray);
  const gman = new GMAN(source, target);
  return gman.calculatePower(source.direction);
};

module.exports.getPowerOfGMan = getPowerOfGMan;
