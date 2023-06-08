import { login } from "../../services/UserManagementService";
import { LOG_IN_ACTION } from "./Types/QuanLyNguoiDungType";
import {history} from '../../App'

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
