-- CreateTable
CREATE TABLE "Currency" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "fullname" TEXT NOT NULL,
    "buy" DECIMAL(65,30) NOT NULL,
    "sell" DECIMAL(65,30) NOT NULL,

    CONSTRAINT "Currency_pkey" PRIMARY KEY ("id")
);
