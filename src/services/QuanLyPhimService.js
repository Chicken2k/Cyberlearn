import { put, post, get, deleteItem } from "./baseService";
import { GROUPID } from "../util/Setting/config";

export const layDanhSachBanner = () => {
  return get(`/api/QuanLyPhim/LayDanhSachBanner`);
};
export const layDanhSachPhim = () => {
  return get(`/api/QuanLyPhim/LayDanhSachPhim?maNhom=${GROUPID}`);
};
