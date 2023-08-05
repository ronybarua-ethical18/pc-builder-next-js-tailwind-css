import { Col, Row } from "antd";
import {
  UserOutlined,
} from "@ant-design/icons";
import Image from "next/image";
import RootLayout from "@/components/Layout/RootLayout";

const ProductDetailPage = ({ product }) => (
  <Row style={{ marginTop: "80px", alignItems: "center" }}>
    <Col md={6} lg={12}>
      <Image
        alt="example"
        src={product?.image}
        width={500}
        height={300}
        responsive
      />
    </Col>
    <Col md={6} lg={12} style={{ paddingLeft: "20px" }}>
      <h1 style={{ fontSize: "30px" }}>{product?.productname}</h1>
      <span
        style={{
          color: "gray",
          display: "block",
          fontSize: "20px",
        }}
      >
        <UserOutlined /> {product?.category}
      </span>
      <div
        className="line"
        style={{
          height: "5px",
          margin: "20px 0",
          background: "#000",
          width: "100%",
        }}
      ></div>

      {/* <p
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
          color: "gray",
          margin: "10px 0px",
          fontSize: "20px",
        }}
      >
        <span>
          <CalendarOutlined /> {news?.release_date}
        </span>
        <span>
          <CommentOutlined /> {news?.comment_count} Comments
        </span>
        <span>
          <ProfileOutlined /> {news?.category}
        </span>
      </p> */}

      <p style={{ fontSize: "25px", fontWeight: "lighter" }}>
        {product?.description}
      </p>
    </Col>
  </Row>
);
export default ProductDetailPage;

ProductDetailPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticPaths = async () => {
  const res = await fetch("http://localhost:3000/api/products");
  const products = await res.json();



  const paths = products?.data?.map((product) => ({
    params: { productId: String(product.id) },
  }));



  return { paths, fallback: false };
};

export const getStaticProps = async (context) => {
  const { params } = context;
  const res = await fetch(`http://localhost:3000/api/products?productId=${params.productId}`);
  const product = await res.json();


  console.log("data single", product);

  return {
    props: {
      product: product.data,
    },
  };
};
