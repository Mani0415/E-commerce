import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomeAppliances } from "./components/HomeAppliances.jsx";
import { Technology } from "./components/Technology.jsx";
import { Stationary } from "./components/Stationary.jsx";
import Filesbar from "./components/Filesbar.jsx";
import Login from "./user/Login.jsx";
import Signup from "./user/Signup.jsx";
import NoMatch from "./components/NoMatch.jsx";
import Carousel from "./silderbars/Carousel.jsx";
import Profile from "./components/Profile.jsx";
import AdminPage from "./data/AdminPage.jsx";
import ProductDetails from "./data/ProductDetails.jsx";
import Deatails_user from "./data/Deatails_user.jsx";
import Footer from "./footer/Footer.jsx";
import {index} from './data/index.json'
import {home} from "./data/Home.json"
import {tech} from './data/Tech.json'
import {station} from './data/Station.json'
import Product from "./components/Product.jsx";
import Cart from "./cart/Cart.jsx";
import ProductView from "./data/ProductView.jsx";

const App = () => {
  return (
    <BrowserRouter>
      {/* <Home /> */}
      <Filesbar />
      <Routes>
        <Route path="/" element={<Carousel data={index} />} />
        <Route
          path="/Homeappliances"
          element={<HomeAppliances data={home} />}
        />
        <Route path="/Technologys" element={<Technology data={tech} />} />
        <Route path="/Stationary" element={<Stationary data={station} />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/admin" element={<AdminPage />}></Route>
        <Route path="/userdetails" element={<Deatails_user />}></Route>
        <Route path="/ProductDetails" element={<ProductDetails />}></Route>
        <Route path="/ProductView" element={<ProductView/>}/>
        <Route
          path="/product/:type/:id"
          element={<Product index={index} home={home} tech={tech} station={station}  />}
        />
        <Route path="/cart" element={<Cart/>}/>
        {/* <Route path="/product/:id" element={<Product data_home={home} category="tech"/>} /> */}
        <Route path="/Signup" element={<Signup />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
      {/* <Products/> */}
      <Footer />
    </BrowserRouter>
  );
};
export default App;
