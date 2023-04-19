import { Card, Table, Tag } from "antd";
import ordersHistory from "../assets/data/orders-history.json";

const OrderHistory = () => {
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
      render: (status) => (
        <Tag color={status === "Delivered" ? "green" : "volcano"}>
          {status.toUpperCase()}
        </Tag>
      ),
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
    <Card title="Orders History" style={{ margin: 20 }}>
      <Table
        dataSource={ordersHistory}
        columns={tableColumns}
        rowKey={"orderID"}
      />
    </Card>
  );
};

export default OrderHistory;
