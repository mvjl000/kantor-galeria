-- AlterTable
ALTER TABLE "Currency" ALTER COLUMN "index" DROP DEFAULT;
DROP SEQUENCE "Currency_index_seq";
