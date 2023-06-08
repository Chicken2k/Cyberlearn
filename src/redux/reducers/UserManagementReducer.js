import { TOKEN, USER_LOGIN } from "../../util/Setting/config";
import {
  HISTORY_USER_BOOKING,
  LOG_IN_ACTION,
} from "../actions/Types/QuanLyNguoiDungType";

let user = {};
if (localStorage.getItem(USER_LOGIN)) {
  user = JSON.parse(localStorage.getItem(USER_LOGIN));
}
const stateDefault = {
  userLogin: user,
  historyUserBooking: {},
};

export const reducerUserManagement = (state = stateDefault, action) => {

  switch (action.type) {
    case LOG_IN_ACTION:
      const { loginInformation } = action;
      localStorage.setItem(USER_LOGIN, JSON.stringify(loginInformation));
      localStorage.setItem(TOKEN, JSON.stringify(loginInformation.accessToken));
      return { ...state };
    case HISTORY_USER_BOOKING:
      state.historyUserBooking = action.historyUserBooking;
      return { ...state };
    default:
      return { ...state };
  }
};
