import { Server } from "socket.io";

import { Events } from "../../../no-thanks-card-frontend/shared/WSEvents";

export function setup(io: Server) {
  io.sockets.on("connection", (socket) => {

    socket.on(Events.ROOM_JOIN, (roomNumber) => {
      socket.join(roomNumber);
    });
  });
}
