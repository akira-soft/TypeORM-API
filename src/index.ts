import "reflect-metadata";
import {createConnection} from "typeorm";
import * as express from "express";
import * as cors from 'cors';
import * as helmet from 'helmet';
import ROUTES from "./routes";

const PORT = 3000 || process.env.PORT;

createConnection().then(async connection => {

    // create express app
    const app = express();
    
    // use of middlewares
    app.use(express.json());
    app.use(cors());
    app.use(helmet());

    // routes
    app.use('/api', ROUTES);

    // start express server
    app.listen(PORT);

    console.log(`Express server has started on port ${PORT}. Open http://localhost:${PORT}/api/clients to see results`);

}).catch(error => console.log(error));
