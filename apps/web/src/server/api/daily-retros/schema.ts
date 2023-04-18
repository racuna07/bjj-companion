import z from "zod";

export const DailyRetroSchema = z.object({
  date: z.date(),
  techniques: z.string().optional(),
  wentWell: z.string().optional(),
  wentWrong: z.string().optional(),
  toImprove: z.string().optional(),
});
