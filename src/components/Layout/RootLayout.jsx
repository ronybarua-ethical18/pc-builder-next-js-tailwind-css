import React, { useState } from 'react';
import { useSession, signIn, signOut } from "next-auth/react"
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Breadcrumb, Button, Layout, Menu, theme } from 'antd';
import Link from 'next/link';
const { Header, Content, Footer, Sider } = Layout;

function getItem(label, key, icon, route, children) {
  return {
    key,
    icon,
    route, // Add the route property to the item
    children,
    label,
  };
}

const items = [
  getItem('Home', '1', <PieChartOutlined />, '/'), // Add the route for Home
  getItem('Categories', 'sub1', <UserOutlined />, null, [
    getItem('CPU / Processor', '3', null, '/categories/cpu-processor'), // Add the route for CPU / Processor
    getItem('Motherboard', '4', null, '/categories/motherboard'), // Add the route for Motherboard
    getItem('RAM', '5', null, '/categories/ram'), // Add the route for RAM
    getItem('Power Supply Unit', '6', null, '/categories/power-supply'), // Add the route for Power Supply Unit
    getItem('Storage Device', '7', null, '/categories/storage-device'), // Add the route for Storage Device
    getItem('Monitor', '8', null, '/categories/monitor'), // Add the route for Monitor
    getItem('Others', '9', null, '/categories/others'), // Add the route for Others
  ]),
];

const RootLayout = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  
  const [selectedKeys, setSelectedKeys] = useState(['1']);
  const [breadcrumbItems, setBreadcrumbItems] = useState(['User', 'Bill']);
  const {data:session} = useSession()

  console.log("session next auth", session)

  const handleMenuItemClick = ({ keyPath }) => {
    setSelectedKeys(keyPath);
    setBreadcrumbItems(keyPath.slice(1).filter((key) => key !== 'sub1'));
  };

  const generateMenuItems = (menuItems) => {
    return menuItems.map((item) => {
      if (item.children && item.children.length > 0) {
        return (
          <Menu.SubMenu key={item.key} icon={item.icon} title={item.label}>
            {generateMenuItems(item.children)}
          </Menu.SubMenu>
        );
      }
      return (
        <Menu.Item key={item.key} icon={item.icon}>
          {item.route ? <Link href={item.route}>{item.label}</Link> : item.label} {/* Use Link for items with route */}
        </Menu.Item>
      );
    });
  };
  
  const findItemByKey = (key, itemsList = items) => {
    for (const item of itemsList) {
      if (item.key === key) {
        return item;
      }
      if (item.children && item.children.length > 0) {
        const foundChildItem = findItemByKey(key, item.children);
        if (foundChildItem) {
          return foundChildItem;
        }
      }
    }
    return null;
  };
  
  const getLinkHref = (index) => {
    return breadcrumbItems.slice(0, index + 1).join("/");
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div className="demo-logo-vertical" />

        {/* Step 2: Add onClick handler to update selectedKeys and breadcrumbItems */}
        <Menu theme="dark" selectedKeys={selectedKeys} mode="inline" onClick={handleMenuItemClick}>
          {generateMenuItems(items)}
        </Menu>
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }} className='flex items-center justify-between mb-5'>
          <h1 className="text-2xl font-semibold text-blue-500 ml-10">PC Builder App</h1>
         <div className="flex items-center space-x-2">
         {!session?.user?.email ? <Link href={"/login"}><Button className=''>
            Login
          </Button></Link>:<Link href={"/login"} onClick={() => signOut()}><Button className=''>
            Logout
          </Button></Link>}
         <Link href={"/pc-builder"}><Button type='primary' className='mr-5 bg-blue-500'>
            PC Builder
          </Button></Link>
         </div>
        </Header>
        <Content style={{ margin: '0 16px' }}>
          {/* Step 3: Generate breadcrumb based on breadcrumbItems */}
          {/* <Breadcrumb style={{ margin: '16px 0' }}>
            {generateBreadcrumb()}
          </Breadcrumb> */}
          <div style={{ padding: 24, minHeight: 360, background: colorBgContainer }}>
            {children}
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }} className="text-xl">PC Builder App By Rony Barua</Footer>
      </Layout>
    </Layout>
  );
};

export default RootLayout;