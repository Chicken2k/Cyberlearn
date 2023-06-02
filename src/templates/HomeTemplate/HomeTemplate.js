import { Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Layout/Header/Header";
import HomeCarousel from "./Layout/HomeCarousel/HomeCarousel";
import Footer from "./Layout/Footer/Footer";

const HomeTemplate = ({ component: Component, ...restProps }) => {
  return (
    <Fragment>
      <Header />
      <Component />
      {/* <Routes>
        <Route {...restProps} element={<Component />} />
      </Routes> */}
      <hr className="mt-5" />
      <Footer />
    </Fragment>
  );
};

export default HomeTemplate;
