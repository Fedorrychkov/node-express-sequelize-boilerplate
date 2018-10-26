const cookieParser = require('cookie-parser');
import express from 'express';
import morgan from 'morgan';
import winston from './config/winston';
import routerV1 from './routes/v1/routes';
import adminRoutesV1 from './routes/v1/adminRoutes';
import cors from 'cors';

require('dotenv').config();
require('./models');
const app = express();

app.use(morgan('combined', { stream: winston.stream }));
app.use(cookieParser());
app.use(cors());

app.use('/api/v1', routerV1);
app.use('/api/v1/admin', adminRoutesV1);

const server = app.listen(
    process.env.SERVER_PORT,
    () => winston.info(`app is working on http://localhost:${server.address().port}`)
);
