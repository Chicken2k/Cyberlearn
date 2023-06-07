import { ThongTinLichChieu } from "../../_core/Models/ThongTinPhongVe";
import {
  DAT_VE,
  SET_CHI_TIET_PHONG_VE,
} from "../actions/Types/QuanLyDatVeType";

const stateDefault = {
  chiTietPhongVe: new ThongTinLichChieu(),
  danhSachGheDangDat: [],
};
export const QuanLyDatVeReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case SET_CHI_TIET_PHONG_VE:
      state.chiTietPhongVe = action.chiTietPhongVe;
      return { ...state };

    case DAT_VE:
      // cap nhap danh sach ghe dang dat
      let danhSachGheDangCapNhap = [...state.danhSachGheDangDat];
      let index = danhSachGheDangCapNhap.findIndex(
        (gheDD) => gheDD.maGhe === action.gheDuocChon.maGhe
      );
      if (index !== -1) {
        danhSachGheDangCapNhap.splice(index, 1);
      } else {
        danhSachGheDangCapNhap.push(action.gheDuocChon);
      }
      console.log(danhSachGheDangCapNhap);
        return { ...state, danhSachGheDangDat: danhSachGheDangCapNhap };
    default:
      return { ...state };
  }
};
