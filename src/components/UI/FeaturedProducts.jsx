/* eslint-disable react/jsx-key */
import React from "react";
import {
  EditOutlined,
  EllipsisOutlined,
  EyeOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Avatar, Button, Card, Rate } from "antd";
import { products } from "../../../dummyProducts";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { setPCBuildersComponents } from "@/redux/productSlice";
import { useRouter } from "next/router";
const { Meta } = Card;

export default function FeaturedProducts({ product }) {
  const dispatch = useDispatch()
  const {pcBuilderComponents} = useSelector(state => state.product)
  const router = useRouter()

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
      <div className="flex items-center justify-between mt-3">
      <Link href={`/products/${product.id}`}><EyeOutlined key="setting"/></Link>
        <Button type="primary" className="w-auto bg-blue-500" onClick={() =>{
          dispatch(setPCBuildersComponents([...pcBuilderComponents, product]))
          router.push("/pc-builder")
          }}>Add</Button>
      </div>
    </Card>
  );
}
