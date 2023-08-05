import React from "react";
import {
  EditOutlined,
  EllipsisOutlined,
  EyeOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Avatar, Card, Rate } from "antd";
import { products } from "../../../dummyProducts";
import Link from "next/link";
const { Meta } = Card;

export default function FeaturedProducts({ product }) {

  return (
    <Card
      style={{
        width: "100%",
      }}
      
      cover={
        // eslint-disable-next-line @next/next/no-img-element
        <img
          alt="example"
          src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
        />
      }
      actions={[
        // eslint-disable-next-line react/jsx-key
        <Link href={`/products/${product.id}`}><EyeOutlined key="setting"/></Link>,
        // <EditOutlined key="edit" />,
        // <EllipsisOutlined key="ellipsis" />,
      ]}
    >
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">{product.productname}</h3>
        <div className="bg-green-400 text-white p-2 rounded-md">
          <h6>{product.status}</h6>
        </div>
      </div>
      <h5>{product.category}</h5>
      <div className="flex items-center justify-between">
        <h4 className="text-xl font-bold mt-4">Tk. {product.price}</h4>
        <Rate allowHalf disabled value={product.averagerating} />
      </div>
    </Card>
  );
}
