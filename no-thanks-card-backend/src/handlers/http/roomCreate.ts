import { Middleware } from "koa";

import {
    CreateRoomRequest, CreateRoomResponse
} from "../../../../no-thanks-card-frontend/shared/httpMsg/CreateRoomMsg";
import { Player } from "../../models/PlayerModel";
import { Room } from "../../models/RoomModel";

const roomCreate: Middleware = async (ctx, next) => {
  const req = ctx.request.body as CreateRoomRequest;
  const { name, password } = req;

  const creator = new Player(name, 1);

  const room = new Room(name, password);

  const res: CreateRoomResponse = {
    status: 200,
    msg: "ok",
    data: {
      roomNumber: room.roomNumber,
      ID: creator.ID,
    },
  };

  ctx.body = res;
};

export default roomCreate;