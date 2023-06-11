import React, { Component } from "react";
import Slider from "react-slick";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import styleSlick from "./MultipleRowSlick.module.css";
import './MutipleRowSlick.css'
import Film from "../Film/Film";
import Film_Flip from "../Film/Film_Flip";
import { useDispatch, useSelector } from "react-redux";
import {
  SET_FILM_PLAYING_SHOWING,
  SET_FILM_COMING_SOON,
  SET_LIST_MOVIE,
} from "../../redux/actions/Types/FilmManagementType";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} ${styleSlick["slick-prev"]}`}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    ></div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} ${styleSlick["slick-prev"]}`}
      style={{ ...style, display: "block", left: "-50px" }}
      onClick={onClick}
    ></div>
  );
}

const MultipleRowSlick = (props) => {
  const dispatch = useDispatch();
  const { movieIsPlay, upcomingMovie } = useSelector(
    (state) => state.FilmManagementReducer
  );

  const renderFilms = () => {
    return props.arrFilm.slice(0, 12).map((item, index) => {
      return (
        <div className="mt-2" key={index}>
          <Film_Flip item={item} />
        </div>
      );
    });
  };
  let activeClassDC = movieIsPlay === true ? "active_Film" : "none_active_Film";

  let activeClassSC =
    upcomingMovie === true ? "active_Film" : "none_active_Film";
  const settings = {
    className: "center variable-width",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 2,
    speed: 500,
    rows: 2,
    slidesPerRow: 2,
    variableWidth: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div >
      <div className="button_Active_Film" style={{textAlign:'center',marginBottom:'10px' , }}>
        {/* <button
        className={`${styleSlick[activeClassDC]} px-8 py-3 font-semibold rounded bg-gray-800 text-white mr-2`}
        onClick={() => {
          const action = { type: SET_LIST_MOVIE };
          dispatch(action);
        }}
      >
        TẤT CẢ PHIM
      </button> */}

        <button
          className={`${styleSlick[activeClassDC]} px-8 py-3 font-semibold rounded bg-gray-800 text-white mr-2 border-gray-800 border`}
          onClick={() => {
            console.log("movieIsPlay", movieIsPlay);
            console.log("upcomingMovie", upcomingMovie);
            const action = { type: SET_FILM_PLAYING_SHOWING };
            dispatch(action);
          }}
        >
          PHIM ĐANG CHIẾU
        </button>
        <button
          className={`${styleSlick[activeClassSC]} px-8 py-3 font-semibold rounded bg-white text-gray-800 border-gray-800 border`}
          onClick={() => {
            console.log("upcomingMovie", upcomingMovie);
            console.log("movieIsPlay", movieIsPlay);
            const action = { type: SET_FILM_COMING_SOON };
            dispatch(action);
          }}
        >
          PHIM SẮP CHIẾU
        </button>
      </div>

      <Slider {...settings}>{renderFilms()}</Slider>
    </div>
  );
};

export default MultipleRowSlick;
