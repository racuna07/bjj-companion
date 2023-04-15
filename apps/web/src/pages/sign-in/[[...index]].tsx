import { SignIn } from "@clerk/nextjs";

const SignInPage = () => (
  <main className="flex min-h-screen items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
    <SignIn path="/sign-in" routing="path" signUpUrl="/sign-up" />
  </main>
);
export default SignInPage;
