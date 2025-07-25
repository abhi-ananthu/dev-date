import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import { createServer } from 'node:http';
import { Server } from 'socket.io';
import cors from 'cors';
import UserRouter from './routes/users.js';
import MatchRouter from './routes/matching.js';

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/user', UserRouter);
app.use('/match', MatchRouter);

const server = createServer(app);
const io = new Server(server);

io.on('connection', (socket) => {
  socket.on('message', (msg) => {
    socket.send(msg);
  });
});

server.listen(process.env.PORT, () => {
  console.log(
    `server listening on ${process.env.PROTOCOL}://${process.env.HOST}:${process.env.PORT}/`
  );
});
