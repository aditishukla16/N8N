/*
  Warnings:

  - Added the required column `nodes` to the `Workflow` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Workflow" ADD COLUMN     "nodes" JSONB NOT NULL;
