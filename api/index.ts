import express from 'express';
import { NODE_ENV, PORT } from './config/constants';
import connectToDatabase from './config/db/connectToDB';
import { corsErrorHandler, corsMiddleware } from './middleware/corsErrorHandler';

const app = express();
app.use(express.json());

// CORS middleware, to allow only domains in config/allowedDomains.ts
app.use(corsMiddleware);
app.use(corsErrorHandler);

const startServer = async () => {
    try {
        await connectToDatabase();

        app.listen(PORT, () => {
            console.info(`Server environment is ${NODE_ENV}`);
            console.info(`Server is running on http://localhost:${PORT}`);
        });
    } catch (error) {
        console.error('Unable to start the server; check DB connection...');
        process.exit(1);
    }
};

startServer();

export default app;
