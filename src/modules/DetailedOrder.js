import { Button, Card, Descriptions, Divider, List } from "antd";
import { useParams } from "react-router-dom";
import orders from "../assets/data/orders.json";

const DetailedOrder = ({ dishes }) => {
  const { id } = useParams();
  const order = orders.filter((od) => od.orderID === id); //not filter??
  return (
    <Card title={`Order ${id}`} style={{ margin: 20 }}>
      <Descriptions bordered column={{ lg: 1, md: 1, sm: 1 }}>
        <Descriptions.Item label="Costumer"> Simoh Tapoka</Descriptions.Item>
        <Descriptions.Item label="Costumer's address">
          {order[0]?.deliveryAddress}
        </Descriptions.Item>
      </Descriptions>
      <Divider />
      <List
        dataSource={dishes}
        renderItem={(item) => (
          <List.Item>
            <div style={{ fontWeight: "bold" }}>
              {item.quantity}x {item.name}
            </div>
            <div>£{item.price}</div>
          </List.Item>
        )}
      />
      <Divider />
      <div style={styles.totalContainer}>
        <h2>Total:</h2>
        <h3 style={{ fontWeight: "bold" }}>£{order[0]?.price}</h3>
      </div>
      <Divider />
      <div style={styles.buttonsContainer}>
        {order[0]?.status === "Pending" && (
          <div style={styles.buttonsRowContainer}>
            <Button
              block
              danger
              type="primary"
              size="large"
              style={styles.button}
            >
              Decline Order
            </Button>
            <Button block type="primary" size="large" style={styles.button}>
              Accept Order
            </Button>
          </div>
        )}
        {order[0]?.status === "Accepted" && (
          <Button block type="primary" size="large">
            Order is Ready
          </Button>
        )}
      </div>
    </Card>
  );
};

const styles = {
  totalContainer: {
    flexDirection: "row",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  buttonsContainer: {},
  buttonsRowContainer: { display: "flex", paddingBottom: 30 },
  button: { marginLeft: 20, marginRight: 20 },
};

export default DetailedOrder;
