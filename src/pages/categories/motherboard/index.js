import RootLayout from "@/components/Layout/RootLayout";
import ProductsByCategory from "@/components/UI/ProductsByCategory";
import Head from "next/head";
import React from "react";

export default function Motherboard() {
  return (
    <div>
      <Head>
        <title>Motherboard</title>
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
       <h1 className="text-2xl text-blue-500 text-left mb-5">Motherboard</h1>
        <ProductsByCategory category="motherboard"/>
      </main>
    </div>
  );
}

Motherboard.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
