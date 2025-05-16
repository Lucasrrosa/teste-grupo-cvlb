import { MigrationInterface, QueryRunner } from "typeorm";

export class CreatingTodoEntity1747420946613 implements MigrationInterface {
    name = 'CreatingTodoEntity1747420946613'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE "todos" (
                "id" SERIAL NOT NULL,
                "title" character varying(255) NOT NULL,
                "description" text,
                "completed" boolean NOT NULL DEFAULT false,
                CONSTRAINT "PK_ca8cafd59ca6faaf67995344225" PRIMARY KEY ("id")
            )
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            DROP TABLE "todos"
        `);
    }

}
