import { Col, Row } from "antd";
import React from "react";
import Link from "next/link";
import { CloudServerOutlined, DashboardOutlined, DesktopOutlined, MonitorOutlined, NumberOutlined, TableOutlined, ThunderboltOutlined } from "@ant-design/icons";

export default function FeaturedCategory() {
  const categories = [
    { id: 1, category: "CPU / Processor", link:"/cpu-processor", icon:<DashboardOutlined className="text-4xl"/> },
    { id: 2, category: "Monitor", link:"/monitor", icon:<DesktopOutlined className="text-4xl" /> },
    { id: 3, category: "Storage Device", link:"/storage-device", icon:<CloudServerOutlined  className="text-4xl" /> },
    { id: 4, category: "RAM", link:"/ram", icon:<NumberOutlined className="text-4xl" /> },
    { id: 5, category: "Motherboard", link:"/motherboard", icon:<TableOutlined className="text-4xl" /> },
    { id: 6, category: "Power Supply Unit", link:"/power-supply", icon:<ThunderboltOutlined className="text-4xl" /> },
  ];
  return (
    <>
      <Row gutter={[16, 16]}>
        {categories.map((item) => (
          <Col xl={4} lg={8} md={12} sm={12} xs={24} key={item.id}>
            <Link href={item.link}>
            <div className="p-10 shadow-md rounded-md text-center cursor-pointer">
              <div>
                <>{item.icon}</>
               <h2 className="text-xl font-normal mt-3"> {item.category}</h2>
              </div>
            </div>
            </Link>
          </Col>
        ))}
      </Row>
    </>
  );
}
