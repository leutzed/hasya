import { Router } from "express";

const callsRouter = Router();

callsRouter.get("/", CallsController.find);
callsRouter.get("/:id", CallsController.findById);
callsRouter.post("/", CallsController.save);
callsRouter.put("/:id", CallsController.update);
callsRouter.delete("/:id", CallsController.delete);

export { callsRouter };
