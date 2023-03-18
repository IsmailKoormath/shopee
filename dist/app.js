"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const mongoose_1 = require("mongoose");
const express_1 = tslib_1.__importDefault(require("express"));
const ip_1 = tslib_1.__importDefault(require("ip"));
require("dotenv/config");
// const app =express()
class App {
    constructor() {
        this.port = process.env.PORT || 4000;
        this.app = (0, express_1.default)();
        this.mongodbconnection();
    }
    async mongodbconnection() {
        (0, mongoose_1.set)('strictQuery', false);
        try {
            await (0, mongoose_1.connect)('mongodb://127.0.0.1:27017/shopee');
            console.log("mongodb connected");
        }
        catch (error) {
            console.log(error);
        }
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log(`App listening on the port ${ip_1.default.address()}:${this.port}`);
        });
    }
}
exports.default = App;
//# sourceMappingURL=app.js.map