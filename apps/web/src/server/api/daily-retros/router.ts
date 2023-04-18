import { createTRPCRouter, privateProcedure } from "~/server/api/trpc";
import { DailyRetroSchema } from "~/server/api/daily-retros/schema";

export const dailyRetrosRouter = createTRPCRouter({
  create: privateProcedure
    .input(DailyRetroSchema)
    .mutation(async ({ input, ctx }) => {
      const userId = ctx.userId;
      const data = { ...input, userId };
      return ctx.prisma.dailyRetro.create({ data });
    }),
  getUserRetros: privateProcedure.query(async ({ ctx }) => {
    const userId = ctx.userId;

    return ctx.prisma.dailyRetro.findMany({
      where: { userId },
      orderBy: { createdAt: "desc" },
      take: 10,
    });
  }),
});
