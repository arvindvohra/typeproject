import "reflect-metadata";
import {createConnection} from "typeorm";
import * as express from "express";
import * as BodyParser from "body-parser";

import postRoutes from "./routes/postRoutes";
var bodyparser = require('body-parser');

createConnection().then(async connection => {

    const app = express();
    app.use(bodyparser.json());

    app.use('/', postRoutes);
    

    app.listen(8080, ()=> console.log("App running on port 8080."));

}).catch(error => console.log(error));
