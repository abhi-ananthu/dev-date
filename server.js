import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import { createServer } from 'node:http';
import { Server } from 'socket.io';

const app = express();
const server = createServer(app);
const io = new Server(server);

io.on('connection', (socket) => {
  socket.broadcast('user connected');
});

server.listen(process.env.PORT, () => {
  console.log(
    `server listening on ${process.env.PROTOCOL}://${process.env.HOST}:${process.env.PORT}/`
  );
});
