import express from 'express';
import { createServer } from 'https';
import { readFileSync } from 'fs';
import { setRoutes } from './routes/index';
import { createSSLContext } from './config/ssl';

const app = express();
const PORT = process.env.PORT || 3000;

const sslOptions = createSSLContext();
const server = createServer(sslOptions, app);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

setRoutes(app);

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});