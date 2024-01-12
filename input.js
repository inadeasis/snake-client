let connection;
const stdin = process.stdin;

const setupInput = (conn) => {
  connection = conn;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  handleUserInput();
  return stdin;
};

const handleUserInput = () => {
  // terminate the game when ctrl + c is pressed
  stdin.on('data', (key) => {
    if (key === '\u0003') {
     process.exit();
    }

    // move up if w is pressed
    if (key === 'w') {
      connection.write("Move: Up");
    }
  
    // move left if a is pressed
    if (key === 'a') {
      connection.write("Move: Left");
    }

    // move down if s is pressed
    if (key === 's') {
      connection.write("Move: Down");
    }

    // move right if d is pressed
    if (key === 'd') {
      connection.write("Move: Right");
    }
  })

return stdin;
};

module.exports = {setupInput}