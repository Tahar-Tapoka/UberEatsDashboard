import { Menu } from "antd";
import { useNavigate } from "react-router-dom";

const SideMenu = () => {
  const menuItems = [
    {
      key: "/",
      label: "Orders",
    },
    {
      key: "menu",
      label: "Menu",
    },
    {
      key: "order-history",
      label: "Order History",
    },
    {
      key: "settings",
      label: "Settings",
    },
  ];
  const navigate = useNavigate();

  return <Menu items={menuItems} onClick={(item) => navigate(item.key)} />;
};
export default SideMenu;
