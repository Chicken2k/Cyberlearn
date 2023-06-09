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
  bookingSeatAction,
} from "../../redux/actions/TicketManagementActions";
import "./Checkout.css";
import { CloseOutlined, UserOutlined } from "@ant-design/icons";
import {
  BOOK_TICKET,
  SWITCH_TABS,
} from "../../redux/actions/Types/QuanLyDatVeType";
import { BookingInformation } from "../../_core/Models/BookingInformation";
import { Tabs } from "antd";
import { historyUserBookingAction } from "../../redux/actions/UserManagementAction";
import moment from "moment";
import { connection } from "../..";

function Checkout() {
  const useParam = useParams();
  const dispatch = useDispatch();
  const { userLogin } = useSelector((state) => state.reducerUserManagement);
  const { roomDetails, listofSeatsReserved, listGuestBooking } = useSelector(
    (state) => state.TicketManagementReducer
  );
  const { thongTinPhim, danhSachGhe } = roomDetails;
  const { id } = useParam;
  useEffect(() => {
  
    dispatch(TicketManagementActions(id));
    
    //vừa vào  trang load tất cả ghế đang đặt 
    
    connection.invoke('loadDanhSachGhe', id)
    
    //load danh sach ghe tu sever về (lắng nghe tín hiêu từ sever trả về )
    // nếu có 1 sự kiện nào trên sever thì thằng này lắng nghe
    connection.on("loadDanhSachGheDaDat", (listGuestBooking) => {
      listGuestBooking = listGuestBooking.filter(
        (items) => items.taiKhoan !== userLogin.taiKhoan
      );
      const arrListSeat = listGuestBooking.reduce((result, value, index) => {
        let arr = JSON.parse(value.danhSachGhe);
        return [...result, ...arr];
      }, []);
      // đưa dữ liệu ghế khách đặt vé redux
      dispatch({
        type: "BOOKING",
        arrListSeat: arrListSeat,
      });
    });
    // cài đặt sự kiện khi load trang
    window.addEventListener("beforeunload", clearGhe);

    return () => {
      clearGhe();
      window.removeEventListener("beforeunload", clearGhe);
    };
  }, []);
  const clearGhe = function (event) {
      connection.invoke('huyDat',userLogin.taiKhoan,id)
  };
  const renderSeats = () => {
    return danhSachGhe.map((seat, index) => {
      let classGheVip = seat.loaiGhe === "Vip" ? "gheVip classGheDaDat" : "";
      let classGheDaDat = seat.daDat === true ? "gheDaDat " : "";
      let classGheDangDat = "";
      let classGheDaDuocDat = "";
      let classSeatsCustomerOrdered = "";
      let indexGheDD = listofSeatsReserved.findIndex(
        (bookedChair) => bookedChair.maGhe === seat.maGhe
      );
      let indexSeatsCustomerOrdered = listGuestBooking.findIndex(
        (SeatsCustomer, index) => SeatsCustomer.maGhe === seat.maGhe
      );

      if (indexSeatsCustomerOrdered !== -1) {
        classSeatsCustomerOrdered = "seatsCustomerOrdered";
      }
      if (indexGheDD !== -1) {
        classGheDangDat = "gheDangDat";
      }
      if (userLogin.taiKhoan === seat.taiKhoanNguoiDat) {
        classGheDaDuocDat = "gheDaDuocDat";
      }
      return (
        <Fragment key={index}>
          <button
            onClick={() => {
              dispatch(bookingSeatAction(seat, id));
            }}
            disabled={seat.daDat}
            className={`ghe ${classGheVip} ${classGheDaDat} ${classGheDangDat} ${classGheDaDuocDat} ${classSeatsCustomerOrdered}`}
          >
            {seat.daDat === true ? (
              classGheDaDuocDat != "" ? (
                <UserOutlined className="iconUserOutlined" />
              ) : (
                <CloseOutlined className="iconUserOutlined" />
              )
            ) : classSeatsCustomerOrdered !== "" ? (
              <UserOutlined className="iconUserOutlined" />
            ) : (
              seat.stt
            )}
          </button>
          {(index + 1) % 16 === 0 ? (
            <div>
              <hr /> <br />
            </div>
          ) : (
            ""
          )}
        </Fragment>
      );
    });
  };
  const handleBooking = () => {
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
                  <th>Ghế đang đặt</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td style={{ textAlign: "center" }}>
                    <button className="ghe text-center">
                      {" "}
                      <UserOutlined className="iconUserOutlined" />{" "}
                    </button>{" "}
                  </td>
                  <td style={{ textAlign: "center" }}>
                    <button className="ghe gheDangDat text-center">
                      {" "}
                      <UserOutlined className="iconUserOutlined" />
                    </button>{" "}
                  </td>
                  <td style={{ textAlign: "center" }}>
                    <button className="ghe gheVip text-center">
                      <UserOutlined className="iconUserOutlined" />
                    </button>{" "}
                  </td>
                  <td style={{ textAlign: "center" }}>
                    <button className="ghe gheDaDat text-center">
                      {" "}
                      <CloseOutlined className="iconUserOutlined" />{" "}
                    </button>{" "}
                  </td>
                  <td style={{ textAlign: "center" }}>
                    <button className="ghe gheDaDuocDat text-center">
                      {" "}
                      <UserOutlined className="iconUserOutlined" />{" "}
                    </button>{" "}
                  </td>
                  <td style={{ textAlign: "center" }}>
                    <button className="ghe seatsCustomerOrdered text-center">
                      <UserOutlined className="iconUserOutlined" />
                    </button>
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
                handleBooking();
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
function BookingHistory() {
  const { historyUserBooking } = useSelector(
    (state) => state.reducerUserManagement
  );
  console.log(historyUserBooking);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(historyUserBookingAction());
  }, []);

  const renderHistory = () => {
    return historyUserBooking.thongTinDatVe?.map((ticket, index) => {
      return (
        <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
          <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
            <img
              alt="team"
              className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
              src={ticket.hinhAnh}
            />
            <div className="flex-grow">
              <h2 className="text-gray-900 title-font font-medium">
                {ticket.tenPhim}
              </h2>
              <p className="text-gray-500">
                Giờ chiếu : {moment(ticket.ngayDat).format("hh:mm A")} - Ngày
                chiếu {moment(ticket.ngayDat).format("DD-MM-YYYY")}
              </p>
              <p>
                {" "}
                Ghế đã đặt :
                {ticket.danhSachGhe
                  .sort((a, b) => {
                    return a.tenGhe - b.tenGhe;
                  })
                  .map((chair, index) => {
                    return <span key={index}> {chair.tenGhe}</span>;
                  })}
              </p>
            </div>
          </div>
        </div>
      );
    });
  };
  return (
    <Fragment>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-purple-600">
              Lịch sử đặt vé
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
              gentrify, subway tile poke farm-to-table. Franzen you probably
              haven't heard of them.
            </p>
          </div>
          <div className="flex flex-wrap -m-2">{renderHistory()}</div>
        </div>
      </section>
    </Fragment>
  );
}

export default function MyComponent() {
  const { tabActive } = useSelector((state) => state.TicketManagementReducer);
  const dispatch = useDispatch();
  const onChange = (key) => {
    dispatch({ type: SWITCH_TABS, tabActive: key });
  };

  const items = [
    {
      key: "1",
      label: `01  CHỌN GHẾ  & THANH TOÁN`,
      children: <Checkout />,
    },
    {
      key: "2",
      label: `02 LỊCH ĐẶT VÉ  `,
      children: <BookingHistory />,
    },
  ];
  return (
    <Tabs
      defaultActiveKey="1"
      activeKey={tabActive}
      items={items}
      onChange={onChange}
    />
  );
}
