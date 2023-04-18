import { type PropsWithChildren } from "react";
import Head from "next/head";
import Header from "~/components/layout/header";

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Head>
        <title>BJJ Companion | Log</title>
        <meta name="description" content="BJJ Companion log" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex h-screen w-screen ">
        <div className="max-w-screen max-h-screen w-full justify-between overflow-x-hidden overflow-y-scroll bg-gradient-to-b from-[#2e026d] to-[#15162c]">
          <Header />
          <div className="m-16 h-full">{children}</div>
        </div>
      </main>
    </>
  );
};

export default Layout;
