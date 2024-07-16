import { Routes, Route } from "react-router-dom";

import Home from "./Routes/Home/HomeComponent";
import NavigationBar from "./Routes/Navigation/NavigationBar";
import Shop from "./Component/shop/ShopComponent";
import Contact from "./Component/Contact";
import Authentication from "./Component/Authentication";
import CheckOut from "./Routes/checkout/CheckOut";

import "./App.scss";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<NavigationBar />}>
        <Route index element={<Shop />} />
        <Route path="shop" element={<Home />} />
        <Route path="contact" element={<Contact />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="checkout" element={<CheckOut />} />
      </Route>
    </Routes>
  );
};

export default App;
