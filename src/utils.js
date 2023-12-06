const c = require("./constants");

const parseInput = (inputArray) => {
    const source = inputArray[c.zero].split(c.space);
    const target = inputArray[c.one].split(c.space);
    const sourceObj = { x: parseInt(source[c.one]), y: parseInt(source[c.two]),
      direction: source[c.three],
    };
    const targetObj = {    x: parseInt(target[c.one]),    y: parseInt(target[c.two]),  };
    return {    source: sourceObj,    target: targetObj,  };
  };

module.exports.parseInput = parseInput;