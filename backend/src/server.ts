import express from "express";
import cors from "cors";
import { config } from "dotenv";

import * as postgresClient from "./database/connection";
import { router } from "./routes";

config();

const app = express();
app.use(express.json());
app.use(cors());

app.use(router);

postgresClient.start().then(() => {
    const port = process.env.PORT;
    app.listen(port, () => console.log(`Server running at port ${port}`));
});
