import { type NextPage } from "next";
import { useUser } from "@clerk/nextjs";
import UserFeed from "~/components/feed/user-feed";
import PlusIcon from "~/components/icons/plus";

const Home: NextPage = () => {
  const { isLoaded, isSignedIn } = useUser();

  return (
    <div className="flex flex-col gap-12 h-full">
      <div className="grid grid-cols-1 gap-4 md:gap-8">
        {false ? (
          <UserFeed />
        ) : (
          <h1 className="m-auto text-3xl font-extrabold text-white">
            Sign in to see your daily retrospectives
          </h1>
        )}
      </div>
      <div className="mt-auto">
        {isLoaded && isSignedIn && (
          <button className="btn-circle btn">
            <PlusIcon />
          </button>
        )}
      </div>
    </div>
  );
};

export default Home;
