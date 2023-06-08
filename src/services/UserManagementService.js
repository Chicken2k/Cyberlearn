import { put, post, get, deleteItem, postUser } from "./baseService";



export const  login = (loginInformation) => { // {taiKhoan:'',matKhau:''}
  return postUser(`/api/QuanLyNguoiDung/DangNhap`,loginInformation);
}
