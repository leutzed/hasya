import { Router } from "express";
import { issuesRouter } from "./issues";

const router = Router();

router.use("/issues", issuesRouter);

export { router };
