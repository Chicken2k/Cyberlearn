import { SET_DANH_SACH_PHIM } from "../actions/Types/QuanLyphimType";

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
};
export const QuanLyPhimReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case SET_DANH_SACH_PHIM:
      state.arrFilm = action.arrFilm;
      return { ...state };
    
    default:
      return { ...state };
  }
};
