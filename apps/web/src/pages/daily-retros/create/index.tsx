import { useForm } from "react-hook-form";
import type z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { DailyRetroSchema } from "~/server/api/daily-retros/schema";
import { api } from "~/utils/api";
import { useRouter } from "next/router";
import toast from "react-hot-toast";

type DailyRetroFormType = z.infer<typeof DailyRetroSchema>;

const CreateDailyRetroPage = () => {
  const router = useRouter();
  const { handleSubmit, register } = useForm<DailyRetroFormType>({
    defaultValues: { date: new Date() },
    resolver: zodResolver(DailyRetroSchema),
  });
  const context = api.useContext();

  const { mutate: createDailyRetro, isLoading } = api.dailyRetros.create.useMutation({
    onSuccess: () => {
      void context.dailyRetros.getUserRetros.invalidate();
      toast.success("Logged your daily retro!")
      void router.push("/");
    },
    onError: (e) => console.error(e),
  });
  const onFormSubmit = (data: DailyRetroFormType) => {
    createDailyRetro(data);
  };
  return (
    <div className="flex flex-col items-center">
      <h1 className="mb-8 text-3xl font-bold text-white">Create Daily Retro</h1>
      {isLoading && (
        <div className="text-xl text-white">Creating daily retro...</div>
      )}
      {!isLoading && (
        <form
          onSubmit={(e) => void handleSubmit(onFormSubmit)(e)}
          className="grid w-full grid-cols-1 gap-8 md:w-1/2 lg:w-1/3"
        >
          <label
            htmlFor="techinques"
            className="-mb-4 text-xl font-bold text-white"
          >
            Techniques
          </label>
          <textarea
            {...register("techniques")}
            className="textarea-bordered textarea"
            placeholder="Type something..."
          />
          <label htmlFor="wentWell" className="-mb-4 font-bold text-white">
            Went well
          </label>
          <textarea
            {...register("wentWell")}
            className="textarea-bordered textarea"
            placeholder="Type something..."
          />
          <label htmlFor="wentWrong" className="-mb-4 font-bold text-white">
            Went wrong
          </label>
          <textarea
            {...register("wentWrong")}
            className="textarea-bordered textarea"
            placeholder="Type something..."
          />
          <label htmlFor="toImprove" className="-mb-4 font-bold text-white">
            To improve
          </label>
          <textarea
            {...register("toImprove")}
            className="textarea-bordered textarea"
            placeholder="Type something..."
          />
          <button className="glass btn text-white" type="submit">
            Create
          </button>
        </form>
      )}
    </div>
  );
};
export default CreateDailyRetroPage;
