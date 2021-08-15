import { Request, Response } from "express";
import Issues from "../models/Issues";
import { getRepository } from "typeorm";

class IssuesController {
    async list(req: Request, res: Response) {
        const query = req.query;
        const repository = getRepository("issues");

        const issues = await repository.find({ where: query });
        res.send({ issues });
    }

    async save(req: Request, res: Response) {
        const { title, description, issuer } = req.body;

        const repository = getRepository("issues");
        const issue = new Issues();

        Object.assign(issue, { title, description, issuer });
        console.log(issue);

        const issues = await repository.save(issue);
        res.send({ issues });
    }
}

export default new IssuesController();
