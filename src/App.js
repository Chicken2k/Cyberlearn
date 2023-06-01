import "./App.css";
import { createBrowserHistory } from "history";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Fragment } from "react";
import HomeTemplate from "./templates/HomeTemplate/HomeTemplate";
import Home from "./pages/Home/Home";
import Contact from "./pages/Contact/Contact";
import News from "./pages/News/News";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";

export const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/" element={<HomeTemplate component={Home} />} />
        <Route path="/home" element={<HomeTemplate component={Home} />} />
        <Route path="/contact" element={<HomeTemplate component={Contact} />} />
        <Route path="/news" element={<HomeTemplate component={News} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
