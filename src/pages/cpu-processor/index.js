import RootLayout from "@/components/Layout/RootLayout";
import ProductsByCategory from "@/components/UI/ProductsByCategory";
import Head from "next/head";
import React from "react";

export default function CPUProcessor() {
  return (
    <div>
      <Head>
        <title>CPU Processors</title>
        <meta
          name="description"
          content="This is a PC Builder app by next-js"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main
        className={`min-h-screen`}
      >
        <h1 className="text-2xl text-blue-500 text-left mb-5">CPU /Processors</h1>
        <ProductsByCategory category="cpu / processor"/>
      </main>
    </div>
  );
}

CPUProcessor.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
