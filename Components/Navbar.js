import { Menu } from "antd";

const Navbar = () => (
  <>
    <Menu
      theme="dark"
      mode="horizontal"
      defaultSelectedKeys={["1"]}
      style={{ lineHeight: "64px" }}
    >
      <div className="logo">LOGO</div>
      <Menu.Item key="1">Home</Menu.Item>
      <Menu.Item key="2">About</Menu.Item>
      <Menu.Item key="3">Contact</Menu.Item>
    </Menu>
  </>
);

export default Navbar;
