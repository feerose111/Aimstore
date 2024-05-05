import { BrowserRouter, Routes, Router, Route, Link } from "react-router-dom";
// import "./App.scss";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Category from "./components/Category/Category";
import SingleProduct from "./components/SingleProduct/SingleProduct";
import Newsletter from "./components/Footer/Newsletter/Newsletter";
import AppContext from "./utils/context";
import Products from "./components/Products/Products";
import SuccessPage from "./components/succesPage/successPage";
import AboutPage from "./components/AboutPage/AboutPage";
import { LoginRegister } from "./components/loginPage/LoginRegister";
import Apps from "./components/Admin/strapi/strapi";
import { useState } from "react";
import Layout from "./components/Layout";
function App() {
  const [ShowFooter, setShowFooter] = useState(true);
  return (
    <BrowserRouter>
      <AppContext>
        <Header />
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/category/:id" element={<Category />} />
            <Route path="/product/:id" element={<SingleProduct />} />
            <Route path="/success" element={<SuccessPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/admin" element={<Apps />} />
          </Route>
          <Route path="/login" element={<LoginRegister />} />
        </Routes>

        {/* <Newsletter/>
                <Footer /> */}
      </AppContext>
    </BrowserRouter>
  );
}

export default App;
