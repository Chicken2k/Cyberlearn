import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { store } from "./redux/configStore";
import "antd/dist/reset.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { DOMAIN } from "./util/Setting/config";
// Câu hình realtime
import * as signalR from "@aspnet/signalr";

const root = ReactDOM.createRoot(document.getElementById("root"));
//Đoạn code để kết nối đến server lắng nghe sự kiện từ server
export const connection = new signalR.HubConnectionBuilder()
  .withUrl(`${DOMAIN}/DatVeHub`)
  .configureLogging(signalR.LogLevel.Information)
  .build();
//connection trao đổi dữ liệu với server hoặc đưa dữ liệu lên server
connection.start().then(() => {
  root.render(
    <Provider store={store}>
      <App />
    </Provider>
  );
}).catch((error) => { console.log(error);})

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
