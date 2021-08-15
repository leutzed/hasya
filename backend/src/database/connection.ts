import {
    CannotConnectAlreadyConnectedError,
    CannotExecuteNotConnectedError,
    Connection,
    createConnection,
} from "typeorm";

import { postgresConfig } from "../config/ormconfig";

let connection: Connection;

export async function start(): Promise<Boolean> {
    if (connection) {
        throw new CannotConnectAlreadyConnectedError("default");
    }

    try {
        connection = await createConnection(postgresConfig);
        connection.runMigrations();

        return true;
    } catch (e) {
        console.error(e);
        return false;
    }
}

export { connection };
