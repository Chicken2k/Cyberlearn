import {
  SET_LIST_MOVIE,
  SET_FILM_PLAYING_SHOWING,
  SET_FILM_COMING_SOON,
} from "../actions/Types/FilmManagementType";
import { SET_DETAILS_MOVIE } from "../actions/Types/CinemaManagerType";

const stateDefault = {
  arrFilm: [
    {
      maPhim: 11078,
      tenPhim: "Avatar: Dòng chảy của nước 2 tiếp tục series",
      biDanh: "avatar-dong-chay-cua-nuoc-2-tiep-tuc-series",
      trailer: "https://www.youtube.com/watch?v=gq2xKJXYZ80",
      hinhAnh:
        "http://movieapi.cyberlearn.vn/hinhanh/avatar-dong-chay-cua-nuoc-2-tiep-tuc-series_gp01.jpg",
      moTa: "avartar 2 dong chay nuoc",
      maNhom: "GP01",
      ngayKhoiChieu: "2023-05-14T13:12:31.497",
      danhGia: 9,
      hot: false,
      dangChieu: true,
      sapChieu: false,
    },
    {
      maPhim: 11078,
      tenPhim: "Avatar: Dòng chảy của nước 2 tiếp tục series",
      biDanh: "avatar-dong-chay-cua-nuoc-2-tiep-tuc-series",
      trailer: "https://www.youtube.com/watch?v=gq2xKJXYZ80",
      hinhAnh:
        "http://movieapi.cyberlearn.vn/hinhanh/avatar-dong-chay-cua-nuoc-2-tiep-tuc-series_gp01.jpg",
      moTa: "avartar 2 dong chay nuoc",
      maNhom: "GP01",
      ngayKhoiChieu: "2023-05-14T13:12:31.497",
      danhGia: 9,
      hot: false,
      dangChieu: true,
      sapChieu: false,
    },
  ],
  movieIsPlay: true,
  upcomingMovie: false,
  arrFilmDefault: [],
  filmDetail:{}
};
export const FilmManagementReducer = (state = stateDefault, action) => {

  switch (action.type) {
    case SET_LIST_MOVIE:
      state.arrFilm = action.arrFilm === undefined ? state.arrFilmDefault : action.arrFilm;
      state.arrFilmDefault = action.arrFilm === undefined ? state.arrFilmDefault : action.arrFilm;
      return { ...state };
    case SET_FILM_PLAYING_SHOWING:
      state.arrFilm = state.arrFilmDefault.filter(
        (film) => film.dangChieu  === state.movieIsPlay
      );
      state.upcomingMovie = false
      state.movieIsPlay = true
      return { ...state };
    case SET_FILM_COMING_SOON:
      state.arrFilm = state.arrFilmDefault.filter(
        (film) => film.sapChieu  === state.upcomingMovie 
      );
      state.movieIsPlay = false
      state.upcomingMovie = true
      return { ...state };
    case SET_DETAILS_MOVIE:
      state.filmDetail = action.filmDetail
    return { ...state };
    default:
      return { ...state };
  }
};
