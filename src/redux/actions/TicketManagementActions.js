import { bookTickets, getBookingDetails } from "../../services/TicketManagementServices";
import { BOOK_TICKET, SET_TICKET_OFFICE_DETAILS } from "./Types/QuanLyDatVeType";


export const TicketManagementActions = (movieShowtimeCode) =>{
    return async (dispatch)=>{
        try{
            const result = await getBookingDetails(movieShowtimeCode)
            if(result.data.statusCode === 200)
            {
                dispatch({
                    type:SET_TICKET_OFFICE_DETAILS,
                    roomDetails:result.data.content
                })
            }
        }
        catch(errors){
            console.log('error', errors);
        }
    }
}
export const bookTicketAction =(bookingInformation)=>{
    return async ()=>{
        try{
            const result = await bookTickets(bookingInformation)
            
        }
        catch(error) {
        console.log('errors', error.response.data);
        }
    }
}