import express from "express";
import "dotenv/config";
declare class App {
    port: string | number;
    app: express.Application;
    constructor();
    private mongodbconnection;
    listen(): void;
}
export default App;
