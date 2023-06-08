import { put, post, get, deleteItem, postUser } from "./baseService";



export const  login = (loginInformation) => { // {taiKhoan:'',matKhau:''}
  return post(`/api/QuanLyNguoiDung/DangNhap`,loginInformation);
}

export const historyUserBookingService = ()=>{
  return post(`/api/QuanLyNguoiDung/ThongTinTaiKhoan`) 
}