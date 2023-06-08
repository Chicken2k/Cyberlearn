import React, { Fragment } from "react";
import "./Checkout.css";
import style from "./Checkout.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  bookTickets,
  bookTicketAction,
  TicketManagementActions,
} from "../../redux/actions/TicketManagementActions";
import "./Checkout.css";
import { CloseOutlined, UserOutlined } from "@ant-design/icons";
import { BOOK_TICKET } from "../../redux/actions/Types/QuanLyDatVeType";
import { BookingInformation } from "../../_core/Models/BookingInformation";

export default function Checkout() {
  const useParam = useParams();
  const dispatch = useDispatch();
  const { userLogin } = useSelector((state) => state.reducerUserManagement);
  const { roomDetails, listofSeatsReserved } = useSelector(
    (state) => state.TicketManagementReducer
  );
  const { thongTinPhim, danhSachGhe } = roomDetails;
  const { id } = useParam;
  console.log(listofSeatsReserved);

  useEffect(() => {
    dispatch(TicketManagementActions(id));
  }, []);

  const renderSeats = () => {
    return danhSachGhe.map((ghe, index) => {
      let classGheVip = ghe.loaiGhe === "Vip" ? "gheVip classGheDaDat" : "";
      let classGheDaDat = ghe.daDat === true ? "gheDaDat " : "";
      let classGheDangDat = "";
      let classGheDaDuocDat = "";
      let indexGheDD = listofSeatsReserved.findIndex(
        (bookedChair) => bookedChair.maGhe === ghe.maGhe
      );

      if (indexGheDD !== -1) {
        classGheDangDat = "gheDangDat";
      }
      if (userLogin.taiKhoan === ghe.taiKhoanNguoiDat) {
        classGheDaDuocDat = "gheDaDuocDat";
      }
      return (
        <Fragment key={index}>
          <button
            onClick={() => {
              dispatch({
                type: BOOK_TICKET,
                selectedChair: ghe,
              });
            }}
            disabled={ghe.daDat}
            className={`ghe ${classGheVip} ${classGheDaDat} ${classGheDangDat} ${classGheDaDuocDat}`}
          >
            {ghe.daDat === true ? (
              classGheDaDuocDat != "" ? (
                <UserOutlined
                  style={{ fontWeight: "bold" }}
                />
              ) : (
                <CloseOutlined
                  style={{  fontWeight: "bold" }}
                />
              )
            ) : (
              ghe.stt
            )}
          </button>
          {(index + 1) % 16 === 0 ?<div><hr/> <br /></div> : ""}
        </Fragment>
      );
    });
  };
  const handleDatVe = () => {
    const bookingInformation = new BookingInformation();
    bookingInformation.maLichChieu = id; // Gán mã lịch chiếu từ useParams
    bookingInformation.danhSachVe = listofSeatsReserved;
    dispatch(bookTicketAction(bookingInformation));
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
          <div className="mt-5 flex justify-center">
            <table className=" divide-y divide-gray-200 w-2/3">
              <thead className="bg-gray-50 p-5">
                <tr>
                  <th>Ghế chưa đặt</th>
                  <th>Ghế đang đặt</th>
                  <th>Ghế vip</th>
                  <th>Ghế đã đặt</th>
                  <th>Ghế mình đặt</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td  style={{ textAlign: "center" }}>
                    <button className="ghe text-center">
                      {" "}
                      <UserOutlined
                        style={{ marginBottom: 7.5, fontWeight: "bold",textAlign: "center" }}
                      />{" "}
                    </button>{" "}
                  </td>
                  <td  style={{ textAlign: "center" }}>
                    <button className="ghe gheDangDat text-center">
                      {" "}
                      <UserOutlined
                        style={{ marginBottom: 7.5, fontWeight: "bold" }}
                      />
                    </button>{" "}
                  </td>
                  <td  style={{ textAlign: "center" }}>
                    <button className="ghe gheVip text-center">
                      <UserOutlined
                        style={{ marginBottom: 7.5, fontWeight: "bold" }}
                      />
                    </button>{" "}
                  </td>
                  <td  style={{ textAlign: "center" }}>
                    <button className="ghe gheDaDat text-center">
                      {" "}
                      <UserOutlined
                        style={{ marginBottom: 7.5, fontWeight: "bold" }}
                      />{" "}
                    </button>{" "}
                  </td>
                  <td  style={{ textAlign: "center" }}>
                    <button className="ghe gheDaDuocDat text-center">
                      {" "}
                      <UserOutlined
                        style={{ marginBottom: 7.5, fontWeight: "bold" }}
                      />{" "}
                    </button>{" "}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="col-span-3">
          <h3 className="text-green-400 text-center text-4xl">
            {listofSeatsReserved.reduce((total, currenvalue) => {
              return total + currenvalue.giaVe;
            }, 0)}{" "}
            đ
          </h3>
          <hr />
          <h3 className="text-xl mt-2">{thongTinPhim.tenPhim}</h3>
          <p>{thongTinPhim.diaChi}</p>
          <p>{thongTinPhim.ngayChieu}</p>
          <hr />
          <div className="flex flex-row my-5">
            <div className="w-4/5">
              <span className="text-red-500"> GHẾ </span>
              <span className="text-green-500 text-xl">
                {listofSeatsReserved
                  .sort((a, b) => {
                    return a.stt - b.stt;
                  })
                  .map((gheDDSST, index) => {
                    return <span key={index}> {gheDDSST.stt}</span>;
                  })}
              </span>
            </div>
            <div className="text-right col-span-1">
              <span className="text-green-800 text-lg">
                {" "}
                {listofSeatsReserved.reduce((total, currenvalue) => {
                  return total + currenvalue.giaVe;
                }, 0)}{" "}
                đ
              </span>
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
            <div
              onClick={() => {
                handleDatVe();
              }}
              className="bg-green-500 text-white w-full text-center py-3 font-bold text-2xl cursor-pointer"
            >
              Dat Ve
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
