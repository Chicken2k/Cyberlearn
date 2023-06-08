import { ShowtimeInformation } from "../../_core/Models/ThongTinPhongVe";
import {
  BOOK_TICKET,
  SET_TICKET_OFFICE_DETAILS,
} from "../actions/Types/QuanLyDatVeType";

const stateDefault = {
  roomDetails: new ShowtimeInformation(),
  listofSeatsReserved: [],
};
export const TicketManagementReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case SET_TICKET_OFFICE_DETAILS:
      state.roomDetails  = action.roomDetails;
      return { ...state };

    case BOOK_TICKET:
      // cap nhap danh sach ghe dang dat
      let updatingChairList = [...state.listofSeatsReserved];
      let index = updatingChairList.findIndex(
        (bookedChair) => bookedChair.maGhe === action.selectedChair.maGhe
      );
      if (index !== -1) {
        updatingChairList.splice(index, 1);
      } else {
        updatingChairList.push(action.selectedChair);
      }
        return { ...state, listofSeatsReserved: updatingChairList };
    default:
      return { ...state };
  }
};
