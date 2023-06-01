import { layDanhSachPhim } from "../../services/QuanLyPhimService";
import { SET_DANH_SACH_PHIM } from "./Types/QuanLyphimType";

export const layDanhSachPhimAction = () => {
  return async (dispatch) => {
    try {
      // lay data tu api
      const result = await layDanhSachPhim();
      dispatch({
        type: SET_DANH_SACH_PHIM,
        arrFilm: result.data.content,
      });
    } catch (errors) {
      console.log("errors", errors);
    }
  };
};
