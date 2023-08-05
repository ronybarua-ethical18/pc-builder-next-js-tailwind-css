import RootLayout from "@/components/Layout/RootLayout";
import { Button, Col, Rate, Row } from "antd";
import Head from "next/head";
import React from "react";
import {
  CloudServerOutlined,
  DashboardOutlined,
  DesktopOutlined,
  MonitorOutlined,
  NumberOutlined,
  TableOutlined,
  ThunderboltOutlined,
} from "@ant-design/icons";
import Link from "next/link";
import { useSelector } from "react-redux";
import CompleteBuildModal from "@/components/UI/CompleteBuildModal";

export default function PCBuilder() {
  const { pcBuilderComponents } = useSelector((state) => state.product);
  const categories = [
    {
      id: 1,
      category: "CPU / Processor",
      link: "/categories/cpu-processor",
      icon: <DashboardOutlined className="text-4xl" />,
    },
    {
      id: 2,
      category: "Monitor",
      link: "/categories/monitor",
      icon: <DesktopOutlined className="text-4xl" />,
    },
    {
      id: 3,
      category: "Storage Device",
      link: "/categories/storage-device",
      icon: <CloudServerOutlined className="text-4xl" />,
    },
    {
      id: 4,
      category: "RAM",
      link: "/categories/ram",
      icon: <NumberOutlined className="text-4xl" />,
    },
    {
      id: 5,
      category: "Motherboard",
      link: "/categories/motherboard",
      icon: <TableOutlined className="text-4xl" />,
    },
    {
      id: 6,
      category: "Power Supply Unit",
      link: "/categories/power-supply",
      icon: <ThunderboltOutlined className="text-4xl" />,
    },
  ];

  const manipulateCategories = categories.map((category) => {
    const find = pcBuilderComponents.find(
      (item) => item.category.toLowerCase() === category.category.toLowerCase()
    );

    console.log("mani", find);
    if (find) {
      return {
        ...category,
        productname: find.productname,
        price: find.price,
        averagerating: find.averagerating,
        description: find.description,
      };
    }
    return category;
  });

  console.log("pc builder components", pcBuilderComponents);
  return (
    <div>
      <Head>
        <title>PCBuilder</title>
        <meta
          name="description"
          content="This is a PC Builder app by next-js"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={`min-h-screen w-[70%] m-auto border p-4`}>
        <div className="border px-2 py-3 flex items-center justify-between rounded-sm mb-5">
          <h2 className="text-2xl text-blue-700 font-medium">PC Builder App</h2>
          <CompleteBuildModal />
        </div>
        <Row gutter={[24, 24]}>
          {manipulateCategories.map((item) => (
            <Col
              span={12}
              key={item.id}
              className={`${item.productname && "pointer-events-none"}`}
            >
              <Link href={item.link}>
                <div className="p-10 shadow-md rounded-md text-center cursor-pointer">
                  <div>
                    <div className={`${item.productname && "opacity-10"}`}>
                      {item.icon}
                    </div>
                    <h2
                      className={`text-xl font-normal mt-3 ${
                        item.productname && "opacity-10"
                      }`}
                    >
                      {" "}
                      {item.category}
                    </h2>

                    {!item.productname && <Button className="mt-5">Select</Button>}
                  </div>
                </div>
                {item.productname && (
                  <>
                    <div className="shadow p-4 mt-2 flex items-center justify-between border border-blue-400">
                      <div>
                        <h2 className="text-xl font-medium">
                          {item.productname}
                        </h2>
                        <p className="">{item.description}</p>
                        <Rate value={item.averagerating} />
                      </div>
                      <h3 className="text-2xl text-green-500">
                        Tk. {item.price}
                      </h3>
                    </div>
                  </>
                )}
              </Link>
            </Col>
          ))}
        </Row>
      </main>
    </div>
  );
}

PCBuilder.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
