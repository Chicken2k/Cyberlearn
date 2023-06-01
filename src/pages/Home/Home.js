import React, { useEffect } from "react";
import HomeMenu from "./HomeMenu/HomeMenu";
import { useSelector, useDispatch } from "react-redux";
import Film from "../../components/Film/Film";
import MultipleRowSlick from "../../components/RSLick/MultipleRowSlick";
import { layDanhSachPhimAction } from "../../redux/actions/QuanLyPhimAction";
export default function Home(props) {
  // props.match.params
  const { arrFilm } = useSelector((state) => state.QuanLyPhimReducer);
  console.log(arrFilm);
  const dispatch = useDispatch();
  // se kich hoat sau khi load
  useEffect(() => {
    dispatch(layDanhSachPhimAction());
  }, []);
  // const renderArrFilm = () => {
  //  return arrFilm.map((item, index) => {
  //   return <Film key={index} />
  //   });
  // };

  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <MultipleRowSlick arrFilm={arrFilm} />
        </div>
      </section>

      <div className="mx-36">
        <HomeMenu />
      </div>
    </div>
  );
}
