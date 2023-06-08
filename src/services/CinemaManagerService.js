import { put, post, get, deleteItem } from "./baseService";
import { GROUPID } from "../util/Setting/config";


export const getListofTheaterSystems = () => {
  return get(`/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=${GROUPID}`);
};
export const getMovieShowtimeInformation = (movieCode) => {
  return get(`/api/QuanLyRap/LayThongTinLichChieuPhim?maPhim=${movieCode}`);
};