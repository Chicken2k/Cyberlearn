
import {SET_CAROUSEL} from "./Types/CarouselType"
import { getListBanner } from "../../services/FilmManagementService";
export const getCarouselAction = () => {
  return async (dispatch) => {
    try {
      //Sử dụng tham số thamSo
      const result = await getListBanner()

      dispatch({
        type: SET_CAROUSEL,
        arrImg: result.data.content,
      });
    } catch (errors) {
      console.log("errors", errors);
    }
  };
};
