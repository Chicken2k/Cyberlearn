import React, { useEffect } from "react";
import { Carousel } from "antd";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { getCarouselAction } from "../../../../redux/actions/CarouselAction";

const contentStyle = {
  height: "600px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
  backgroundSize: 'cover',
  // backgroundPosition: 'center',
};
export default function HomeCarousel(props) {
  // kết nối với vs state
  const { arrImg } = useSelector((state) => state.CarouselReducer);
  const dispatch = useDispatch();
  //se tu kich hoat sau khi load ra
  useEffect(() => {
    // 1 action = {type:'',data}
    //2 (phải cài middleware);
    //callBackFunciton(dispatch)
    dispatch(getCarouselAction());
  }, []);

  const renderImg = () => {
    return arrImg.map((item, index) => {
      return (
        <div key={index}>
          <div
            style={{ ...contentStyle, backgroundImage: `url(${item.hinhAnh})` }}
          >
            <img
              src={item.hinhAnh}
              className="w-full opacity-0 img"
              alt={item.hinhAnh}
            />
          </div>
        </div>
      );
    });
  };
  return <Carousel effect="fade">{renderImg()}</Carousel>;
}
