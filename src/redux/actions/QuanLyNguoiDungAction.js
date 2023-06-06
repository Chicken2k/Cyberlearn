import { dangNhap } from "../../services/QuanLyNguoiDungService";
import { DANG_NHAP_ACTION } from "./Types/QuanLyNguoiDungType";
import {history} from '../../App'

export const dangNhapAction = (thongTinDangNhap) => {
  return async (dispatch) => {
    try {
      const result = await dangNhap(thongTinDangNhap);
     if (result.data.statusCode === 200) {
        dispatch({
          type: DANG_NHAP_ACTION,
          thongTinDangNhap: result.data.content,
        });
         //Chuyển hướng đăng nhập về trang trước đó
         window.history.back()
      }
    } catch (errors) {
      console.log("errors", errors);
    }
  };
};
