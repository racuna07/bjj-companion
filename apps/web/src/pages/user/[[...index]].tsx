import { UserProfile } from "@clerk/nextjs";
import Header from "~/components/layout/header";

const UserProfilePage = () => {
  return (
    <main className="flex h-screen w-screen flex-col bg-gradient-to-b from-[#2e026d] to-[#15162c] p-4 overflow-y-scroll">
      <Header />
      <div className="justify-centerpx-4 flex flex-col items-center mt-16 ">
        <UserProfile routing="path" path="/user" />
      </div>
    </main>
  );
};
export default UserProfilePage;
