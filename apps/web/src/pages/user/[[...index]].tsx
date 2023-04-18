import { UserProfile } from "@clerk/nextjs";

const UserProfilePage = () => (
  <div className="flex justify-center">
    <UserProfile routing="path" path="/user" />
  </div>
);

export default UserProfilePage;
