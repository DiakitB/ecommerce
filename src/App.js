import Directory from "./component/directory/directory.component";
import Home from "./routes/home/home.component";
import { Routes, Route } from "react-router-dom";
import Navigation from "./routes/navigation/nav.component";
import Sali from "./routes/shop/shop.component";
import ShopPage from "./routes/shop/shopPage.component";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="a" element={<Sali />} />
          <Route path="b" element={<ShopPage />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
