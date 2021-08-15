import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class issues1629056302049 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "issues",
                columns: [
                    {
                        name: "id",
                        type: "integer",
                        isPrimary: true,
                        generationStrategy: "increment",
                        isGenerated: true,
                    },
                    {
                        name: "title",
                        type: "varchar",
                        isUnique: false,
                    },
                    {
                        name: "description",
                        type: "text",
                    },
                    {
                        name: "issuer",
                        type: "varchar",
                    },
                    {
                        name: "created",
                        type: "date",
                        default: "now()",
                    },
                ],
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {}
}
