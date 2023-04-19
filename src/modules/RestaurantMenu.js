import { Button, Card, Table } from "antd";
import { Link } from "react-router-dom";

const RestaurantMenu = ({ dishes }) => {
  const tableColumns = [
    {
      title: "Menu Dish",
      key: "name",
      dataIndex: "name",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      render: (price) => `£${price}`,
    },
    {
      title: "Action",
      key: "action",
      render: () => <Button danger>Remove</Button>,
    },
  ];

  const NewItemButton = () => (
    <Link to={"create"}>
      <Button type="primary">New Dish</Button>
    </Link>
  );
  return (
    <Card title="Menu" style={{ margin: 20 }} extra={NewItemButton()}>
      <Table dataSource={dishes} columns={tableColumns} rowKey={"id"} />
    </Card>
  );
};
export default RestaurantMenu;
