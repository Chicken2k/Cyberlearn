import { put, post, get, deleteItem } from "./baseService";



export const  layChiTietDatVe = (maLichChieu) => { 
  return get(`/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`);
}
