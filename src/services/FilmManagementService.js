import { put, post, get, deleteItem } from "./baseService";
import { GROUPID } from "../util/Setting/config";

export const getListBanner = () => {
console.log("run get list banner");
console.log(get(`/api/QuanLyPhim/LayDanhSachBanner`));
  return get(`/api/QuanLyPhim/LayDanhSachBanner`);
};
export const getMovieList = () => {
  return get(`/api/QuanLyPhim/LayDanhSachPhim?maNhom=${GROUPID}`);
};
