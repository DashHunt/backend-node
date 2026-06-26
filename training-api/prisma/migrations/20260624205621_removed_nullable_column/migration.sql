/*
  Warnings:

  - Made the column `modificated_by` on table `Exercise` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Exercise" ALTER COLUMN "modificated_by" SET NOT NULL;
