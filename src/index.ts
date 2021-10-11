import "reflect-metadata";
import {createConnection} from "typeorm";
import * as express from "express";

const PORT = 3000 || process.env.PORT;

createConnection().then(async connection => {

    // create express app
    const app = express();


    // start express server
    app.listen(PORT);

    console.log(`Express server has started on port ${PORT}. Open http://localhost:${PORT} to see results`);

}).catch(error => console.log(error));
