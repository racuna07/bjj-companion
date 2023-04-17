import { SignOutButton, useUser } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface HeaderProps {}

const Header = ({}: HeaderProps) => {
  const { user, isSignedIn, isLoaded } = useUser();

  const UserImage = () => {
    return isSignedIn ? (
      <label tabIndex={0} className="btn-ghost btn-circle avatar btn">
        <div className="w-10 rounded-full">
          <Image
            alt="User Profile Image"
            src={user.profileImageUrl}
            height={40}
            width={40}
          />
        </div>
      </label>
    ) : null;
  };
  return (
    <header>
      <div className="navbar rounded-box bg-base-100 bg-opacity-70">
        <div className="flex-1">
          <Link href="/" className="btn-ghost btn text-xl normal-case">
            BJJ Companion
          </Link>
        </div>
        {isLoaded && !isSignedIn && (
          <Link href="/sign-in/">
            <button className="btn-primary btn">Sign In</button>
          </Link>
        )}
        {isLoaded && isSignedIn && (
          <div className="flex-none gap-2">
            <div className="dropdown-end dropdown">
              <UserImage />
              <ul
                tabIndex={0}
                className="dropdown-content menu rounded-box menu-compact mt-3 w-52 bg-base-100 p-2 shadow"
              >
                <li>
                  <Link href="/user/">Profile</Link>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <SignOutButton>Logout</SignOutButton>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
