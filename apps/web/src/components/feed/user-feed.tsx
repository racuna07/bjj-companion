import { api } from "~/utils/api";

const UserFeed = () => {
  const { data: dailyRetros, isLoading } = api.dailyRetros.getUserRetros.useQuery();
  return (
    <>
      {!isLoading && dailyRetros &&
        dailyRetros.map((retro) => (
          <div
            key={retro.id}
            className="flex flex-col gap-8 rounded-xl border border-white p-8"
          >
            <div className=" text-2xl font-bold text-white">
              {`${retro.date.toLocaleDateString()}  | Retrospective`}
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">Went Well</h3>
              <span className="text-white">{retro.wentWell}</span>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">Went Wrong</h3>
              <span className="text-white">{retro.wentWrong}</span>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">To Improve</h3>
              <span className="text-white">{retro.toImprove}</span>
            </div>
          </div>
        ))}
    </>
  );
};

export default UserFeed;
