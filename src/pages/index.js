import Image from "next/image";
import { Inter } from "next/font/google";
import RootLayout from "@/components/Layout/RootLayout";
import Head from "next/head";
import FeaturedProducts from "@/components/UI/FeaturedProducts";
import { Col, Row } from "antd";
import { products } from "../../dummyProducts";
import FeaturedCategory from "@/components/UI/FeaturedCategory";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>PC Builder Home</title>
        <meta
          name="description"
          content="This is news portal of programming hero made by next-js"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={` min-h-screen  text-black ${inter.className}`}>
        <h1 className="text-3xl text-left text-blue-500 ">Featured Products</h1>
        <h2 className="text-md mb-5">This are the featured products</h2>
        <Row gutter={[24, 24]}>
          {products
            .sort(() => 0.5 - Math.random())
            .slice(0, 6)
            ?.map((product) => (
              <Col span={6} key={product.key}>
                <FeaturedProducts product={product} />
              </Col>
            ))}
        </Row>
        <div>
          <h1 className="text-3xl text-left text-blue-500 mt-10">
            Featured Categories
          </h1>
          <h2 className="text-md mb-5">
            Get your desired component from featured categories
          </h2>
          <FeaturedCategory />
        </div>
      </main>
    </>
  );
}

Home.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
