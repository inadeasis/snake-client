let connection;

const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

const message = {
  1: 'Welcome to Snek',
  2: 'I\'m a the Superstar',
  3: 'Yahoo!',
  4: 'Wowie zowie!',
  5: 'Let\'s-a go'
}

const handleUserInput = (key) => {
  // terminate the game when ctrl + c is pressed
    if (key === '\u0003') {
     process.exit();
    }

    // move up if w is pressed
    if (key === 'w') {
      connection.write("Move: up");
    }
  
    // move left if a is pressed
    if (key === 'a') {
      connection.write("Move: left");
    }

    // move down if s is pressed
    if (key === 's') {
      connection.write("Move: down");
    }

    // move right if d is pressed
    if (key === 'd') {
      connection.write("Move: right");
    }

    if (key in message) {
      connection.write(`Say: ${message[key]}`);
  }
};

module.exports = {setupInput}