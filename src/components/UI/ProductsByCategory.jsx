import React from "react";
import { products } from "../../../dummyProducts";
import { Col, Row } from "antd";
import FeaturedProducts from "./FeaturedProducts";

export default function ProductsByCategory({ category }) {
  const CPUCategoryData = products?.filter(
    (product) => product.category === category
  );
  const others =
    category === "others" &&
    products?.filter(
      (product) =>
        product.category !== "cpu / processor" &&
        product.category !== "power supply unit" &&
        product.category !== "ram" &&
        product.category !== "monitor" && 
        product.category !== "motherboard" &&
        product.category !== "storage device"
    );
  const categoryData = others ? others : CPUCategoryData;
  return (
    <div>
      <Row gutter={[16, 16]}>
        {categoryData?.map((product) => (
          <Col span={6} xl={6} lg={8} md={12} sm={24} xs={24} key={product.id}>
            <FeaturedProducts product={product} />
          </Col>
        ))}
      </Row>
    </div>
  );
}
