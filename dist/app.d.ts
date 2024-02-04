import express from 'express';
import { Routes } from './index';
declare class App {
    app: express.Application;
    port: string | number;
    env: string;
    constructor(routes: Routes[]);
    listen(): void;
    getServer(): express.Application;
    private connectToDatabase;
    private initializeMiddlewares;
    private initializeRoutes;
}
export default App;
