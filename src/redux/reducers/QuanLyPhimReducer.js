import {
  SET_DANH_SACH_PHIM,
  SET_FILM_DANG_CHIEU,
  SET_FILM_SAP_CHIEU,
} from "../actions/Types/QuanLyphimType";
import { SET_CHI_TIET_PHIM } from "../actions/Types/QuayLyRapType";

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
  dangChieu: true,
  sapChieu: true,
  arrFilmDefault: [],
  filmDetail:{}
};
export const QuanLyPhimReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case SET_DANH_SACH_PHIM:
      state.arrFilm = action.arrFilm === undefined ? state.arrFilmDefault : action.arrFilm;
      state.arrFilmDefault = action.arrFilm === undefined ? state.arrFilmDefault : action.arrFilm;
      return { ...state };
    case SET_FILM_DANG_CHIEU:
      state.arrFilm = state.arrFilmDefault.filter(
        (film) => film.dangChieu === state.dangChieu
      );
      return { ...state };
    case SET_FILM_SAP_CHIEU:
      state.arrFilm = state.arrFilmDefault.filter(
        (film) => film.sapChieu === state.dangChieu 
      );
      return { ...state };
    case SET_CHI_TIET_PHIM:
      state.filmDetail = action.filmDetail
    return { ...state };
    default:
      return { ...state };
  }
};
