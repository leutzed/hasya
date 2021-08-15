import IssuesController from "../controllers/IssuesController";
import { Router } from "express";

const issuesRouter = Router();

issuesRouter.get("/", IssuesController.list);
// issuesRouter.get("/:id", IssuesController.find);
issuesRouter.post("/", IssuesController.save);
// issuesRouter.put("/:id", IssuesController.update);
// issuesRouter.delete("/:id", IssuesController.delete);

export { issuesRouter };
