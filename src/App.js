import { Image, Layout } from "antd";
import SideMenu from "./components/SideMenu";
import AppRoutes from "./components/AppRoutes";

function App() {
  return (
    <Layout>
      <Layout.Sider style={{ height: "100vh", backgroundColor: "white" }}>
        <Image
          src="https://pbs.twimg.com/profile_images/1565795238681214977/jLoAN_gT_400x400.jpg"
          preview={false}
        />
        <SideMenu />
      </Layout.Sider>
      <Layout>
        <Layout.Content>
          <AppRoutes />
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
