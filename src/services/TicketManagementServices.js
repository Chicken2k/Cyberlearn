import { put, post, get, deleteItem } from "./baseService";



export const  getBookingDetails = (movieShowtimeCode) => { 
  return get(`/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${movieShowtimeCode}`);
}

export const bookTickets = (bookingInformation)=>{
              
  return post(`/api/QuanLyDatVe/DatVe`,bookingInformation)
}