import RootLayout from "@/components/Layout/RootLayout";
import Head from "next/head";
import React from "react";

export default function Others() {
  return (
    <div>
      <Head>
        <title>Others</title>
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
        <h1 className="text-6xl text-purple-600">This is Others page</h1>
      </main>
    </div>
  );
}

Others.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
