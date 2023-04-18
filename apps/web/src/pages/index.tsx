import { type NextPage } from "next";
import { useUser } from "@clerk/nextjs";
import UserFeed from "~/components/feed/user-feed";
import Link from "next/link";

const Home: NextPage = () => {
  const { isLoaded, isSignedIn } = useUser();

  return (
    <div className="flex flex-col gap-12">
      <div className="flex flex-col gap-4 md:gap-8">
        {isLoaded && isSignedIn ? (
          <UserFeed />
        ) : (
          <h1 className="m-auto text-3xl font-extrabold text-white">
            Sign in to see your daily retrospectives
          </h1>
        )}
      </div>
      <div className="m-auto">
        {isLoaded && isSignedIn && (
          <Link href="/daily-retros/create">
            <button className="glass  btn w-full">Create</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Home;
