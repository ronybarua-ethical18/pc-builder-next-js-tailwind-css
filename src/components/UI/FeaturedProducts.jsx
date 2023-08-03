import React from "react";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Avatar, Card, Rate } from "antd";
const { Meta } = Card;

export default function FeaturedProducts({ product }) {
  return (
    <Card
      style={{
        width: "100%",
      }}
      cover={
        <img
          alt="example"
          src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
        />
      }
      actions={[
        <SettingOutlined key="setting" />,
        <EditOutlined key="edit" />,
        <EllipsisOutlined key="ellipsis" />,
      ]}
    >
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">{product.productname}</h3>
        <div className="bg-green-400 text-white p-2 rounded-md">
          {product.status}
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
