import { Application } from "express";
import { callsRouter } from "./callsRouter";

export default function (app: Application) {
    app.use(callsRouter);
}
