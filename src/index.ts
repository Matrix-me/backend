import express from 'express';
import { config } from 'dotenv';

config();
const app = express();

import spacesRouter from './routes/spaces';
app.use('/', spacesRouter);

app.listen(process.env.PORT, () => {
    console.log(`Listening on port ${process.env.PORT}`);
});