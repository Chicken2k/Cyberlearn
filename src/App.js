import "./App.css";
import { createBrowserHistory } from "history";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { Fragment } from "react";
import HomeTemplate from "./templates/HomeTemplate/HomeTemplate";
import Home from "./pages/Home/Home";
import Contact from "./pages/Contact/Contact";
import News from "./pages/News/News";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Detail from "./pages/Detail.js/Detail";
// import CheckoutTemplate from "./templates/CheckoutTemplate/CheckoutTemplate";
import Checkout from "./pages/Checkout/Checkout";
import {Suspense, lazy} from 'react'
import UserTemplate from "./templates/UserTemplate/UserTemplate";

const CheckoutTemplateLazy = lazy(()=> import("./templates/CheckoutTemplate/CheckoutTemplate"))
export const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <Routes>
       
        <Route path="/" element={<HomeTemplate component={Home} />} />
        <Route path="/home" element={<HomeTemplate component={Home} />} />
        <Route path="/contact" element={<HomeTemplate component={Contact} />} />
        <Route path="/detail/:id" element={<HomeTemplate component={Detail} />} />
        <Route path="/news" element={<HomeTemplate component={News} />} />
       
        <Route path="/checkout/:id" element={
           <React.Suspense fallback='Loading ...'>
              <CheckoutTemplateLazy component={Checkout} />
            </React.Suspense>
        }/>
    
        <Route path="/login" element={<UserTemplate component={Login} />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
