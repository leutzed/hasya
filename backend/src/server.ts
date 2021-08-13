import express from "express";
import cors from "cors";
import { config } from "dotenv";

import Routes from "@/presentation/routes";

config();
const app = express();

app.use(express.json());
app.use(cors());

Routes(app);

const port = process.env.PORT;
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
