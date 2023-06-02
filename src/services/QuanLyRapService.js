import { put, post, get, deleteItem } from "./baseService";
import { GROUPID } from "../util/Setting/config";


export const layDanhSachHeThongRap = () => {
  return get(`/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=${GROUPID}`);
};
