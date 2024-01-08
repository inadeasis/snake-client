const net = require("net");
// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host:"10.0.0.214", // IP address here,
    port: 50541   // PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  conn.on("connect", () => {
    console.log("Connecting ...");
});

  return conn;
};

module.exports = {connect}