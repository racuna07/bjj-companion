import { type PropsWithChildren } from "react";
import Head from "next/head";
import Header from "~/components/layout/header";
import { Toaster } from "react-hot-toast";

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Head>
        <title>BJJ Companion | Log</title>
        <meta name="description" content="BJJ Companion log" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex h-screen w-screen ">
        <div className="max-w-screen max-h-screen h-full w-full justify-between overflow-x-hidden bg-gradient-to-b from-[#2e026d] to-[#15162c]">
          <Toaster/>
          <Header />
          <div className="m-16">{children}</div>
        </div>
      </main>
    </>
  );
};

export default Layout;
