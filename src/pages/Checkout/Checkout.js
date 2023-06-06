import React, { Fragment } from "react";
import "./Checkout.css";
import style from "./Checkout.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { QuanLyDatVeAction } from "../../redux/actions/QuanLyDatVeActions";
import "./Checkout.css";

export default function Checkout() {
  const useParam = useParams();
  const dispatch = useDispatch();
  const { userLogin } = useSelector((state) => state.QuanLyNguoiDungReducer);
  const { chiTietPhongVe } = useSelector((state) => state.QuanLyDatVeReducer);
  console.log(chiTietPhongVe);
  const { thongTinPhim, danhSachGhe } = chiTietPhongVe;
  useEffect(() => {
    const { id } = useParam;
    dispatch(QuanLyDatVeAction(id));
  }, []);

  const renderSeats = () => {
    return danhSachGhe.map((ghe, index) => {
      let classGheVip = ghe.loaiGhe === "Vip" ? "gheVip classGheDaDat" : "";
      let classGheDaDat = ghe.daDat === true ? "gheDaDat ":"";
      return (
        <Fragment key={index}>
          <button className={`ghe ${classGheVip} ${classGheDaDat}`}>{ghe.stt}</button>
          {(index +1)%16===0 ? <br/>:'' }
        </Fragment>
      );
    });
  };

  return (
    <div className="min-h-screen mt-5">
      <div className="grid grid-cols-12">
        <div className="col-span-9">
          <div className="flex flex-col items-center mt-5">
            <div
              className="bg-black"
              style={{ width: "80%", height: 15 }}
            ></div>
            <div className={`${style["trapezoid"]} text-center`}>
              <h3 className="mt-3 text-black">Màn hình</h3>
            </div>
            <div>{renderSeats()}</div>
          </div>
        </div>

        <div className="col-span-3">
          <h3 className="text-green-400 text-center text-4xl">0 đ</h3>
          <hr />
          <h3 className="text-xl mt-2">{thongTinPhim.tenPhim}</h3>
          <p>{thongTinPhim.diaChi}</p>
          <p>{thongTinPhim.ngayChieu}</p>
          <hr />
          <div className="flex flex-row my-5">
            <div className="w-4/5">
              <span className="text-red-400"> ghe</span>
              <span className="text-green-500 text-xl">STT GHE</span>
            </div>
            <div className="text-right col-span-1">
              <span className="text-green-800 text-lg"> 600</span>
            </div>
          </div>
          <hr />
          <div className="my-5">
            <i>Email</i> <br />
            {userLogin.email}
          </div>
          <hr />
          <div className="my-5">
            <i>Phone</i> <br></br>
            {userLogin.soDT}
          </div>
          <hr />
          <div className="mb-0 h-full flex flex-col items-center">
            <div className="bg-green-500 text-white w-full text-center py-3 font-bold text-2xl cursor-pointer">
              Dat Ve
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}