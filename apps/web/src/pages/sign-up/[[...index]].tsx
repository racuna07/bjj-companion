import { SignUp } from "@clerk/nextjs";

const SignUpPage = () => (
  <main className="flex min-h-screen items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
    <SignUp path="/sign-up" routing="path" signInUrl="/sign-in" />
  </main>
);
export default SignUpPage;
