import React, { useEffect } from "react";
import { Button, CustomCard } from "@tsamantanis/react-glassmorphism";
import "@tsamantanis/react-glassmorphism/dist/index.css";
import "../../assets/Styles/circle.css";
import { Rate, Tabs } from "antd";
import useSelection from "antd/es/table/hooks/useSelection";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from 'react-router-dom';
import { layThongTinLichChieuPhimAction } from "../../redux/actions/QuanLyRapAction";
import moment from 'moment';




const { TabPane } = Tabs;
export default function Detail(props) {
  const { filmDetail } = useSelector((state) => state.QuanLyPhimReducer);
  const dispatch = useDispatch();
  console.log(filmDetail)
  const { id } = useParams();
  useEffect(()=>{
     //Lấy thông tin param từ url
    dispatch(layThongTinLichChieuPhimAction(id))
  },[])

  return (
    <div
      style={{
        backgroundImage: `url(${filmDetail.hinhAnh})`,backgroundSize: '100%',backgroundPosition:'center',
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
              <img className="col-span-1" src={filmDetail.hinhAnh} style={{width:'100$',height:300}} alt="123"></img>
              <div className="col-span-2 ml-5" style={{marginTop:'25%'}}>
                <p className="text-sm">Ngay chieu :{moment(filmDetail.ngayKhoiChieu).format('DD.MM.YYYY')}</p>
                <p className="text-4xl leading-3">{filmDetail.tenPhim}</p>
                <p>{filmDetail.moTa}</p>
              </div>
            </div>
          </div>
          <div className="col-span-4">
          <h1 style={{marginLeft:'15%',color:'yellow',fontWeight:'bold',fontSize:15}}>Danh Gia</h1>
          <h1 style={{marginLeft:'5%'}} className="text-green-400 text-2xl"><Rate allowHalf value={filmDetail.danhGia / 2} style={{ color: '#78ed78', fontSize: 30 }} /></h1>
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
        <div className="mt-10 container">
          <Tabs tabPosition={"left"}>
            <TabPane tab="tab 1" key="1">
              alo123
            </TabPane>
            <TabPane tab="tab 2" key="2">
              alo123355
            </TabPane>
            <TabPane tab="tab 3" key="3">
              alo12344444444
            </TabPane>
          </Tabs>
        </div>
      </CustomCard>
    </div>
  );
}
