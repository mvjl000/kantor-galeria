import { PrismaClient, Prisma } from '@prisma/client';
import { z } from 'zod';
import { publicProcedure, router } from '../trpc';

const prisma = new PrismaClient();

export const appRouter = router({
  hello: publicProcedure
    .input(
      z.object({
        text: z.string().nullish(),
      }),
    )
    .query(({ input }) => {
      return {
        greeting: `hello ${input?.text ?? 'world'}`,
      };
    }),
  getCurrencies: publicProcedure.query(async () => {
    const currencies = await prisma.currency.findMany();
    return {
      currencies,
    };
  }),
  createCurrency: publicProcedure
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
      console.log('currency', currency);
      return currency.fullname;
    }),
});

// export type definition of API
export type AppRouter = typeof appRouter;
