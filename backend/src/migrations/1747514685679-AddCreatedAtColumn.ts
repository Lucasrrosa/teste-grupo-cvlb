import { MigrationInterface, QueryRunner } from "typeorm";

export class AddCreatedAtColumn1747514685679 implements MigrationInterface {
    name = 'AddCreatedAtColumn1747514685679'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE "tasks"
            ADD "createdAt" TIMESTAMP NOT NULL DEFAULT now()
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE "tasks" DROP COLUMN "createdAt"
        `);
    }

}
