
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Product from "./pages/Product/Product";
import Products from "./pages/Products/Products";
import "./App.scss"

import { Routes, Route } from "react-router-dom";





const App = () => {
  return (
    <div className="app">
      
      <Navbar />
      <Routes >
        <Route path="/" element={<Home />}></Route>
        <Route path="/Products/:id" element={<Products />}></Route>
        <Route path="/Product/:id" element={<Product />}></Route>
      </Routes>
      <Footer/>
    </div>
  );
};

export default App;
