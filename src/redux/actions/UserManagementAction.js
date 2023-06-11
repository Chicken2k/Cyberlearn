import {historyUserBookingService, login } from "../../services/UserManagementService";
import { HISTORY_USER_BOOKING, LOG_IN_ACTION } from "./Types/UserManagementType";

export const logInAction = (loginInformation) => {
  return async (dispatch) => {
    try {
      const result = await login(loginInformation);
      
     if (result.data.statusCode === 200) {
        dispatch({
          type: LOG_IN_ACTION,
          loginInformation: result.data.content,
        });
         //Chuyển hướng đăng nhập về trang trước đó
         window.history.back()
      }
    } catch (errors) {
      console.log("errors", errors);
    }
  };
};

export const historyUserBookingAction = ()=>{
  return async (dispatch)=>{
    try{ 
      dispatch({type:'DISPLAY_LOADING'})
    const result = await historyUserBookingService()
        if(result.data.statusCode === 200) {
          dispatch({
            type:HISTORY_USER_BOOKING,
            historyUserBooking: result.data.content
          })
        }
        dispatch({type:'HIDE_LOADING'})
    }
    catch(errors){
      dispatch({type:'HIDE_LOADING'})
      console.log("errors", errors);
    }
  
  }
}
