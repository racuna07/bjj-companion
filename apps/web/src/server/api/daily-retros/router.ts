import { z } from "zod";

import {
  createTRPCRouter,
  privateProcedure,
  publicProcedure,
} from "~/server/api/trpc";

export const dailyRetrosRouter = createTRPCRouter({
  create: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      return {
        greeting: `Hello ${input.text}`,
      };
    }),
  getUserRetros: privateProcedure.query(async ({ ctx }) => {
    const userId = ctx.userId;

    const retros = await ctx.prisma.dailyRetro.findMany({
      where: { userId },
      orderBy: { createdAt: "desc" },
      take: 10,
    });
    console.log(retros)
    return retros;
  }),
});
