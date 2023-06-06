import { put, post, get, deleteItem } from "./baseService";



export const  dangNhap = (thongTinDangNhap) => { // {taiKhoan:'',matKhau:''}
  return post(`/api/QuanLyNguoiDung/DangNhap`,thongTinDangNhap);
}
