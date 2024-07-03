import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Home from "./Routes/Home/HomeComponent";
import NavigationBar from "./Routes/Navigation/NavigationBar";
import Shop from "./Component/shop/ShopComponent";
import Contact from "./Component/Contact";
import Authentication from "./Component/Authentication";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<NavigationBar />}>
        <Route index element={<Shop />} />
        <Route path="shop" element={<Home />} />
        <Route path="contact" element={<Contact />} />
        <Route path="auth" element={<Authentication />} />
      </Route>
    </Routes>
  );
};

export default App;
