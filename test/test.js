// unit testing using mocha and chai
// run using npm test

var gMan = require("../src/gMan");

var expect = require("chai").expect;

describe("parseInput", function () {
  it("Test Case 1: input1.txt", function () {
    var inputArray = ["SOURCE 5 5 N", "DESTINATION 3 3", "PRINT_POWER"];
    var gBotPower = gMan.getPowerOfGMan(inputArray);
    expect(gBotPower).to.equal(150);
  });

  it("Test Case 2: input2.txt", function () {
    var inputArray = ["SOURCE 0 0 W", "DESTINATION 6 6", "PRINT_POWER"];
    var gBotPower = gMan.getPowerOfGMan(inputArray);
    expect(gBotPower).to.equal(70);
  });

  it("Test Case 3: input3.txt", function () {
    var inputArray = ["SOURCE 1 4 W", "DESTINATION 5 2", "PRINT_POWER"];
    var gBotPower = gMan.getPowerOfGMan(inputArray);
    expect(gBotPower).to.equal(130);
  });

  it("Test Case 4: input4.txt", function () {
    var inputArray = ["SOURCE 5 5 E", "DESTINATION 1 2",  "PRINT_POWER"];
    var gBotPower = gMan.getPowerOfGMan(inputArray);
    expect(gBotPower).to.equal(120);
  });

  it("Test Case 5: input5.txt", function () {
    var inputArray = ["SOURCE 0 5 W", "DESTINATION 6 1", "PRINT_POWER"];
    var gBotPower = gMan.getPowerOfGMan(inputArray);
    expect(gBotPower).to.equal(90);
  });

  it("Test Case 6: input6.txt", function () {
    var inputArray = ["SOURCE 1 1 S", "DESTINATION 1 2", "PRINT_POWER"];
    var gBotPower = gMan.getPowerOfGMan(inputArray);
    expect(gBotPower).to.equal(180);
  });

  it("Test Case 7: input7.txt", function () {
    var inputArray = ["SOURCE 3 1 W", "DESTINATION 5 1", "PRINT_POWER"];
    var gBotPower = gMan.getPowerOfGMan(inputArray);
    expect(gBotPower).to.equal(170);
  });

});
