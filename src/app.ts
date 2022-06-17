import express from 'express';
import cors from 'cors';
import { routes } from './api/routes/UserRoutes';

class App {
    public express: express.Application;

    public constructor() {
        this.express = express();
        this.middlewares();
        this.database();
        this.routes();
    }

    private middlewares() {
        this.express.use(express.json());
        this.express.use(cors());
        //this.express.use(loggerHTTP);
    }

    private async database(): Promise<void> {
        //await prismaClient.$connect()
    }

    private routes(): void {
        this.express.use('/api', routes);
        //this.express.use('/auth', public_routes);
        //this.express.use('/api/v1', routes);
    }
}

export default new App().express;
