const {connect} = require("./client.js");

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = function (key) {
  // terminate the game when ctrl + c is pressed
  if (key === '\u0003') {
  process.exit();
  }
};

connect();

