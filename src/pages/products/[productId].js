import { Col, Rate, Row } from "antd";
import { UserOutlined } from "@ant-design/icons";
import Image from "next/image";
import RootLayout from "@/components/Layout/RootLayout";
import Head from "next/head";

const ProductDetailPage = ({ product }) => (
  <>
    <Head>
      <title>{product.productname}</title>
      <meta
        name="description"
        content="This is a PC Builder app by next-js"
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Row style={{ marginTop: "80px", alignItems: "start" }}>
      <Col md={6} lg={12}>
        <Image
          alt="example"
          src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW10Czf"
          width={700}
          // layout="fill"
          height={400}
          responsive
        />
      </Col>
      <Col md={6} lg={12}>
        <h1 style={{ fontSize: "30px" }}>{product?.productname}</h1>
        <h5 className="text-2xl font-light">{product.category}</h5>
        <p className="text-xl font-light mt-5">{product?.description}</p>
        <p className="text-lg">{product.keyfeatures}</p>
        <h5 className="text-lg mt-4">Individual Rating</h5>
        <Rate allowHalf value={product.individualrating} />

        <h5 className="text-lg mt-2">Average Rating</h5>
        <Rate allowHalf value={product.averagerating} />
        <div>
          <h3 className="text-xl mt-2">Reviews</h3>
          {
            product.reviews.map((review) =>(
              <>
              <div key={review.user} className="mt-2">
                <h3 className="font-semibold">{review.user}</h3>
                <p>{review.comment}</p>
                <Rate allowHalf value={review.rating} className="text-base"/>
              </div>
              </>
            ))
          }
        </div>

        <div className="flex items-center justify-between  mt-20">
          <h3 className="text-3xl text-green-500">Tk. {product.price}</h3>
          <div className="bg-green-400 text-white p-2 rounded-md">
            <h6>{product.status}</h6>
          </div>
        </div>
      </Col>
    </Row>
  </>
);
export default ProductDetailPage;

ProductDetailPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticPaths = async () => {
  try {
    // if(typeof window === 'undefined'){
    //   return { paths:[], fallback: false };
    // }

    const res = await fetch(`${process.env.LOCALHOST_URL}/api/products`);
    const products = await res.json();

    const paths = products?.data?.map((product) => ({
      params: { productId: String(product.id) },
    }));

    return { paths, fallback: false };
  } catch (error) {
    // Handle the error gracefully, e.g., show an error page
    console.error("Error fetching product paths:", error);
    return { paths: [], fallback: false };
  }
};

export const getStaticProps = async (context) => {
  try {
    // if(typeof window === 'undefined'){
    //   return {
    //     props: {
    //       product: [],
    //     },
    //   };
    // }


    const { params } = context;
    const res = await fetch(
      `${process.env.LOCALHOST_URL}/api/products?productId=${params.productId}`
    );
    const product = await res.json();

    console.log("data single", product);

    return {
      props: {
        product: product.data,
      },
    };
  } catch (error) {
    // Handle the error gracefully, e.g., show an error page
    console.error("Error fetching product data:", error);
    return {
      props: {
        product: [],
      },
    };
  }
};
