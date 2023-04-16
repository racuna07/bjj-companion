import { type NextPage } from "next";
import Head from "next/head";

import { api } from "~/utils/api";
import Header from "~/components/layout/header";

const Home: NextPage = () => {
  const { data: dailyRetros } = api.dailyRetros.getAll.useQuery();

  return (
    <>
      <Head>
        <title>BJJ Companion | Log</title>
        <meta name="description" content="BJJ Companion log" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex h-screen w-screen flex-col bg-gradient-to-b from-[#2e026d] to-[#15162c] p-4">
        <Header />
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <div className="grid grid-cols-1 gap-4 md:gap-8">
            {dailyRetros &&
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
          </div>
        </div>
        <div className="mt-auto flex">
          <button className="btn-circle btn">
            <svg
              fill="none"
              stroke="currentColor"
              strokeWidth={1.5}
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v12m6-6H6"
              />
            </svg>
          </button>
          <p className="ml-auto text-2xl text-white">By @roacfe</p>
        </div>
      </main>
    </>
  );
};

export default Home;
