import { Route, Routes } from "react-router-dom";
import dishes from "../src/assets/data/dishes.json";
import DetailedOrder from "./modules/DetailedOrder";
import Orders from "./modules/Orders";
import { Image, Layout } from "antd";

function App() {
  return (
    <Layout>
      <Layout.Sider style={{ height: "100vh", backgroundColor: "white" }}>
        <Image
          src="https://pbs.twimg.com/profile_images/1565795238681214977/jLoAN_gT_400x400.jpg"
          preview={false}
        />
      </Layout.Sider>
      <Layout>
        <Layout.Content>
          <Routes>
            <Route path="" element={<Orders />} />
            <Route path=":id" element={<DetailedOrder dishes={dishes} />} />
          </Routes>
        </Layout.Content>
        <Layout.Footer
          style={{ textAlign: "center", backgroundColor: "white" }}
        >
          <span>UberEats Reastaurant Dashboard @2023</span>
        </Layout.Footer>
      </Layout>
    </Layout>
  );
}

export default App;
