import { PrismaClient } from '@prisma/client';
import { z } from 'zod';
import { protectedProcedure, publicProcedure, router } from '../trpc';

const prisma = new PrismaClient();

export const appRouter = router({
  getCurrencies: publicProcedure.query(async () => {
    const currencies = await prisma.currency.findMany();

    return {
      currencies,
    };
  }),
  createCurrency: protectedProcedure
    .input(
      z.object({
        name: z.string(),
        image: z.string(),
        fullname: z.string(),
        buy: z.number(),
        sell: z.number(),
      }),
    )
    .mutation(async ({ input }) => {
      const currency = await prisma.currency.create({
        data: input,
      });

      return currency.fullname;
    }),
  deleteCurrency: protectedProcedure
    .input(
      z.object({
        id: z.number(),
      }),
    )
    .mutation(async ({ input }) => {
      try {
        const deleteCurrency = await prisma.currency.delete({
          where: {
            id: input.id,
          },
        });

        return {
          currencyId: deleteCurrency.id,
          status: 200,
        };
      } catch (error) {
        return {
          currencyId: input.id,
          status: 500,
        };
      }
    }),
  reindexCurrencies: protectedProcedure
    .input(
      z.object({
        currencies: z
          .object({
            id: z.number(),
            name: z.string(),
            fullname: z.string(),
            image: z.string(),
            buy: z.number(),
            sell: z.number(),
          })
          .array(),
      }),
    )
    .mutation(async ({ input }) => {
      try {
        await prisma.currency.deleteMany({});

        await prisma.currency.createMany({
          data: input.currencies,
        });

        return {
          status: 200,
        };
      } catch (error) {
        return {
          status: 500,
        };
      }
    }),
});

// export type definition of API
export type AppRouter = typeof appRouter;
