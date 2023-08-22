import 'dotenv/config';
import cors from 'cors';
import express from 'express';

import agendaController from './controller/agendaController.js';

let server = express();
server.use(cors());
server.use(express.json());

server.use(agendaController);
server.listen(process.env.PORT, () => console.log('API subiu!!!'));