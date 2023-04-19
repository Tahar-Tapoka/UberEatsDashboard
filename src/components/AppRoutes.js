import { Route, Routes } from "react-router-dom";
import dishes from "../../src/assets/data/dishes.json";
import DetailedOrder from "../modules/DetailedOrder";
import Orders from "../modules/Orders";
import RestaurantMenu from "../modules/RestaurantMenu";
import CreateMenuItem from "../modules/CreateMenuItem";
import OrderHistory from "../modules/OrderHistory";
import Settings from "../modules/Settings";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Orders />} />
      <Route path=":id" element={<DetailedOrder dishes={dishes} />} />
      <Route path="/menu" element={<RestaurantMenu dishes={dishes} />} />
      <Route path="/menu/create" element={<CreateMenuItem />} />
      <Route path="/order-history" element={<OrderHistory />} />
      <Route path="/settings" element={<Settings />} />
    </Routes>
  );
};
export default AppRoutes;
