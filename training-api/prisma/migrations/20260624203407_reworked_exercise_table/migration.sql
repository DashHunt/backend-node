/*
  Warnings:

  - You are about to drop the column `coachIdid` on the `Athlete` table. All the data in the column will be lost.
  - You are about to drop the column `coachIdid` on the `TrainingPlan` table. All the data in the column will be lost.
  - Added the required column `coachId` to the `Athlete` table without a default value. This is not possible if the table is not empty.
  - Added the required column `created_by_coach_id` to the `Exercise` table without a default value. This is not possible if the table is not empty.
  - Made the column `modificated_by` on table `Exercise` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `coachId` to the `TrainingPlan` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Athlete" DROP CONSTRAINT "Athlete_coachIdid_fkey";

-- DropForeignKey
ALTER TABLE "TrainingPlan" DROP CONSTRAINT "TrainingPlan_coachIdid_fkey";

-- AlterTable
ALTER TABLE "Athlete" DROP COLUMN "coachIdid",
ADD COLUMN     "coachId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Exercise" ADD COLUMN     "created_by_coach_id" INTEGER NOT NULL,
ALTER COLUMN "modificated_by" SET NOT NULL;

-- AlterTable
ALTER TABLE "TrainingPlan" DROP COLUMN "coachIdid",
ADD COLUMN     "coachId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Athlete" ADD CONSTRAINT "Athlete_coachId_fkey" FOREIGN KEY ("coachId") REFERENCES "Coach"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Exercise" ADD CONSTRAINT "Exercise_created_by_coach_id_fkey" FOREIGN KEY ("created_by_coach_id") REFERENCES "Coach"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TrainingPlan" ADD CONSTRAINT "TrainingPlan_coachId_fkey" FOREIGN KEY ("coachId") REFERENCES "Coach"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
