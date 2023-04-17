import { type NextPage } from "next";
import Head from "next/head";
import Header from "~/components/layout/header";
import { useUser } from "@clerk/nextjs";
import UserFeed from "~/components/feed/user-feed";

const Home: NextPage = () => {
  const { isLoaded, isSignedIn } = useUser();

  return (
    <>
      <Head>
        <title>BJJ Companion | Log</title>
        <meta name="description" content="BJJ Companion log" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex h-screen w-screen flex-col bg-gradient-to-b from-[#2e026d] to-[#15162c] p-4 overflow-y-scroll">
        <Header />
        <div className="flex flex-col items-center justify-center gap-12 px-4 mt-16">
          <div className="grid grid-cols-1 gap-4 md:gap-8">
            {isLoaded && isSignedIn ? (
              <UserFeed />
            ) : (
              <h1 className="m-auto text-3xl font-extrabold text-white">
                Sign in to see your daily retrospectives
              </h1>
            )}
          </div>
        </div>
        <div className="mt-auto flex">
          {isLoaded && isSignedIn && (
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
          )}
          <p className="ml-auto text-2xl text-white">By @roacfe</p>
        </div>
      </main>
    </>
  );
};

export default Home;
