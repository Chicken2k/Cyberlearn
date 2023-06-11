import { put, post, get, deleteItem } from "./baseService";
import { GROUPID } from "../util/Setting/config";

export const getListBanner = () => {
  return get(`/api/QuanLyPhim/LayDanhSachBanner`);
};
export const getMovieList = () => {
  return get(`/api/QuanLyPhim/LayDanhSachPhim?maNhom=${GROUPID}`);
};
