import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MyCart from "./MyCart";
import Checkout from "./Checkout";
import OrderSuccess from "./OrderSuccess";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/cart" element={<MyCart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/order-success" element={<OrderSuccess />} />
      </Routes>
    </Router>
  );
}

export default App;
