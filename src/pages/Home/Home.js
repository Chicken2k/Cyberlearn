import React, { useEffect } from "react";
import HomeMenu from "./HomeMenu/HomeMenu";
import { useSelector, useDispatch } from "react-redux";
import Film from "../../components/Film/Film";
import MultipleRowSlick from "../../components/RSLick/MultipleRowSlick";
import { getMovieListAction } from "../../redux/actions/FilmManagementAction";
import { getListofCinemaSystemAction } from "../../redux/actions/CinemaManagerAction";
import HomeCarousel from "../../templates/HomeTemplate/Layout/HomeCarousel/HomeCarousel";
export default function Home(props) {
  // props.match.params
  const { arrFilm } = useSelector((state) => state.FilmManagementReducer);
  const { CinemaSystem } = useSelector((state) => state.CinemaManagerReducer);
  const dispatch = useDispatch();
  // se kich hoat sau khi load
  useEffect(() => {
    dispatch(getMovieListAction());
    dispatch(getListofCinemaSystemAction());
  }, []);
  // const renderArrFilm = () => {
  //  return arrFilm.map((item, index) => {
  //   return <Film key={index} />
  //   });
  // };

  return (
    <div>
    <HomeCarousel />
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <MultipleRowSlick arrFilm={arrFilm} />
        </div>
      </section>

      <div className="mx-36">
        <HomeMenu CinemaSystem={CinemaSystem} />
      </div>
    </div>
  );
}
