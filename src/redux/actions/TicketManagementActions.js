import { bookTickets, getBookingDetails } from "../../services/TicketManagementServices";
import { BOOK_TICKET, SET_TICKET_OFFICE_DETAILS, SUCCESSFUL_TICKET_BOOKING } from "./Types/QuanLyDatVeType";


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
