import { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";

function Layout() {
  const [cartCount, setCartCount] = useState(0); // ✅ Create cartCount state

  return (
    <>
      <Header cartCount={cartCount} /> {/* ✅ Pass cartCount to Header */}
      
      {/* ✅ Provide cartCount and setCartCount to child components */}
      <Outlet context={{ cartCount, setCartCount }} />

      <Footer />
    </>
  );
}

export default Layout;
