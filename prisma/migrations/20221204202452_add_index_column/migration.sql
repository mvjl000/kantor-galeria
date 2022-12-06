/*
  Warnings:

  - A unique constraint covering the columns `[index]` on the table `Currency` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Currency" ADD COLUMN     "index" SERIAL NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Currency_index_key" ON "Currency"("index");
