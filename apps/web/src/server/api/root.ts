import { createTRPCRouter } from "~/server/api/trpc";
import { dailyRetrosRouter } from "~/server/api/daily-retros/router";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  dailyRetros: dailyRetrosRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
