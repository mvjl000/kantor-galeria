/*
  Warnings:

  - Added the required column `price_history` to the `Currency` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Currency" ADD COLUMN     "price_history" JSONB NOT NULL;
