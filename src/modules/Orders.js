import { Card, Table, Tag } from "antd";
import orders from "../assets/data/orders.json";
import { useNavigate } from "react-router-dom";

const Orders = () => {
  const navigate = useNavigate();
  const tableColumns = [
    {
      title: "Order Id",
      dataIndex: "orderID",
      key: "orderID",
    },
    {
      title: "Status",
      key: "status",
      dataIndex: "status",
      render: (status) => {
        let color = status === "Accepted" ? "green" : "geekblue";
        if (status === "Declined") {
          color = "volcano";
        }
        return <Tag color={color}>{status.toUpperCase()}</Tag>;
      },
    },
    {
      title: "Delivery Address",
      dataIndex: "deliveryAddress",
      key: "deliveryAddress",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      render: (price) => `£${price}`,
    },
  ];
  return (
    <Card title="Orders" style={{ margin: 20 }}>
      <Table
        dataSource={orders}
        columns={tableColumns}
        rowKey={"orderID"}
        onRow={(orderItem) => ({ onClick: () => navigate(orderItem.orderID) })}
      />
    </Card>
  );
};

export default Orders;
