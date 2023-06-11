import { connection } from "../..";
import { bookTickets, getBookingDetails } from "../../services/TicketManagementServices";
import { USER_LOGIN } from "../../util/Setting/config";
import { BOOK_TICKET, SET_TICKET_OFFICE_DETAILS, SUCCESSFUL_TICKET_BOOKING } from "./Types/TicketManagementType";


export const TicketManagementActions = (movieShowtimeCode) =>{
    return async (dispatch)=>{
        try{
            dispatch({type:'DISPLAY_LOADING'})
            const result = await getBookingDetails(movieShowtimeCode)
            if(result.data.statusCode === 200)
            {
                dispatch({
                    type:SET_TICKET_OFFICE_DETAILS,
                    roomDetails:result.data.content
                })
            }
            dispatch({type:'HIDE_LOADING'})  
        }
        catch(errors){
            dispatch({type:'HIDE_LOADING'})
            console.log('error', errors);
        }
    }
}
export const bookTicketAction =(bookingInformation)=>{
    return async (dispatch)=>{
        try{
            dispatch({type:'DISPLAY_LOADING'})
            const result = await bookTickets(bookingInformation)   
            await dispatch(TicketManagementActions(bookingInformation.maLichChieu))
            await dispatch({type:SUCCESSFUL_TICKET_BOOKING})
            dispatch({type:'HIDE_LOADING'})
        }
        catch(error) {
        dispatch({type:'HIDE_LOADING'})
        console.log('errors', error.response.data);
        }
    }
}


export const bookingSeatAction =(seat,movieShowtimeCode)=>{
    return async (dispatch,getState)=>{
        await  dispatch({
            // đưa dữ liệu lên reducer
            type: BOOK_TICKET,
            selectedChair: seat,
          })
          // call  api về backend
            let listofSeatsReserved = getState().TicketManagementReducer.listofSeatsReserved
            const userLocalStorage = JSON.parse(localStorage.getItem(USER_LOGIN));
            let userLogin = getState().reducerUserManagement.userLogin.taiKhoan
            //biến mảng thành chuỗi 
            listofSeatsReserved = JSON.stringify(listofSeatsReserved)
            // console.log(userLogin);
            // console.log(userLocalStorage.taiKhoan);
            //call api signlR
            //datGhe định nghĩa ở sever
            // connection.invoke('datGhe',userLocalStorage.taiKhoan,listofSeatsReserved.taiKhoan,movieShowtimeCode)
    }
}
