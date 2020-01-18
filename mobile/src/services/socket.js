import socketio from "socket.io-client";

const socket = socketio("http://192.168.0.18:3000", {
  autoConnect: false
});

function subscribeToNewDevs(callbackFunction) {
  socket.on("new-dev", callbackFunction);
}

function connect(latitude, longitude, techs) {
  socket.io.opts.query = {
    latitude,
    longitude,
    techs
  };

  socket.connect();
}

function disconnect() {
  if (socket.connected) {
    socket.disconnect();
  }
}

export { connect, disconnect, subscribeToNewDevs };
