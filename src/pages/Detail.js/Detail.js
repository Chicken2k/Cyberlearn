import React, { useEffect } from "react";
import { Button, CustomCard } from "@tsamantanis/react-glassmorphism";
import "@tsamantanis/react-glassmorphism/dist/index.css";
import "../../assets/Styles/circle.css";
import { Rate, Tabs } from "antd";
import useSelection from "antd/es/table/hooks/useSelection";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import { layThongTinLichChieuPhimAction } from "../../redux/actions/QuanLyRapAction";
import moment from "moment";

const { TabPane } = Tabs;
export default function Detail(props) {
  const { filmDetail } = useSelector((state) => state.QuanLyPhimReducer);
  const dispatch = useDispatch();
  const useParam = useParams();
  useEffect(() => {
    //Lấy thông tin param từ url
    const { id } =useParam
    dispatch(layThongTinLichChieuPhimAction(id));
  }, []);

  return (
    <div
      style={{
        backgroundImage: `url(${filmDetail.hinhAnh})`,
        backgroundSize: "100%",
        backgroundPosition: "center",
        minHeight: "100vh",
      }}
    >
      {" "}
      <CustomCard
        style={{ padding: 150, minHeight: "100vh" }}
        effectColor="#fff" // required
        color="#fff" // default color is white
        blur={10} // default blur value is 10px
        borderRadius={0} // default border radius value is 10px
      >
        <div className="grid grid-cols-12">
          <div className="col-span-5 col-start-3 ">
            <div className="grid grid-cols-3">
              <img
                className="col-span-1"
                src={filmDetail.hinhAnh}
                style={{ width: "100$", height: 300 }}
                alt="123"
              ></img>
              <div className="col-span-2 ml-5" style={{ marginTop: "25%" }}>
                <p className="text-sm">
                  Ngay chieu :
                  {moment(filmDetail.ngayKhoiChieu).format("DD.MM.YYYY")}
                </p>
                <p className="text-4xl leading-3">{filmDetail.tenPhim}</p>
                <p>{filmDetail.moTa}</p>
              </div>
            </div>
          </div>
          <div className="col-span-4">
            <h1
              style={{
                marginLeft: "15%",
                color: "yellow",
                fontWeight: "bold",
                fontSize: 15,
              }}
            >
              Danh Gia
            </h1>
            <h1
              style={{ marginLeft: "5%" }}
              className="text-green-400 text-2xl"
            >
              <Rate
                allowHalf
                value={filmDetail.danhGia / 2}
                style={{ color: "#78ed78", fontSize: 30 }}
              />
            </h1>
            <div className={`c100 p${filmDetail.danhGia * 10} big`}>
              <span className="text-white">{filmDetail.danhGia * 10}%</span>
              <div className="slice">
                <div className="bar"></div>
                <div className="fill"></div>
              </div>
            </div>
            <br />
          </div>
        </div>
        <div className="mt-10 ml-72 bg-white container">
          <Tabs defaultActiveKey="1" centered>
            <TabPane tab="Lịch chiếu" key="1" style={{ minHeight: 300 }}>
              <div>
                <Tabs tabPosition={"left"}>
                  {filmDetail.heThongRapChieu?.map((htr, index) => {
                    return (
                      <TabPane
                        tab={
                          <div className="flex flex-row items-center justify-center">
                            <img
                              className="rounded-full w-full"
                              style={{ width: 50 }}
                              src={htr.logo}
                            />
                            <div className="text-center ml-2">{htr.tenHeThongRap}</div>
                          </div>
                        }
                        key={index}
                      >
                        {htr.cumRapChieu.map((cumChieu, index) => {
                          return (
                            <div key={index}>
                              <div className="flex flex-row">
                                <img
                                  className="rounded-full w-full"
                                  src={cumChieu.hinhAnh}
                                  style={{ width: 50 }}
                                ></img>
                                <div>
                                  <p
                                    style={{
                                      fontSize: 20,
                                      fontWeight: "bold",
                                      lineHeight: 1,
                                    }}
                                  >
                                    {cumChieu.tenCumRap}
                                  </p>
                                  <p
                                    className="text-gray-400"
                                    style={{ marginTop: 0 }}
                                  >
                                    {cumChieu.diaChi}
                                  </p>
                                </div>
                              </div>
                              <div className="grid grid-cols-4">
                                {cumChieu.lichChieuPhim.map(
                                  (lichChieu, index) => {
                                    return (
                                      <NavLink
                                        to={`/checkout/${lichChieu.maLichChieu}`}
                                        key={index}
                                        className="col-span-1 text-green-800 font-bold"
                                      >
                                        {moment(
                                          lichChieu.ngayChieuGioChieu
                                        ).format("hh:mm A")}
                                      </NavLink>
                                    );
                                  }
                                )}
                              </div>
                            </div>
                          );
                        })}
                      </TabPane>
                    );
                  })}
                </Tabs>
              </div>
            </TabPane>
            <TabPane tab="Thông tin" key="2" style={{ minHeight: 300 }}>
              Thông tin
            </TabPane>
            <TabPane tab="Đánh giá" key="3" style={{ minHeight: 300 }}>
              Đánh giá
            </TabPane>
          </Tabs>
        </div>
      </CustomCard>
    </div>
  );
}
