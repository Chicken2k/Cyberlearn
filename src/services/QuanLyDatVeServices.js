import { put, post, get, deleteItem } from "./baseService";



export const  layChiTietDatVe = (maLichChieu) => { 
  return get(`/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`);
}

export const datVe = (thongTinDatVe)=>{
  return post(`/api/QuanLyDatVe/DatVe`,thongTinDatVe)
}