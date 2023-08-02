import RootLayout from "@/components/Layout/RootLayout";
import Head from "next/head";
import React from "react";

export default function StorageDevice() {
  return (
    <div>
      <Head>
        <title>StorageDevice</title>
        <meta
          name="description"
          content="This is news portal of programming hero made by next-js"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main
        className={`min-h-screen`}
      >
        <h1 className="text-6xl text-purple-600">This is StorageDevice page</h1>
      </main>
    </div>
  );
}

StorageDevice.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
