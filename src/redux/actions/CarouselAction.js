import axios from "axios";
import { DOMAIN } from "../../util/Setting/config";
import {SET_CAROUSEL} from "./Types/CarouselType"
import { layDanhSachBanner } from "../../services/QuanLyPhimService";
export const getCarouselAction = () => {
  return async (dispatch) => {
    try {
      //Sử dụng tham số thamSo
      const result = await layDanhSachBanner()

      dispatch({
        type: SET_CAROUSEL,
        arrImg: result.data.content,
      });
    } catch (errors) {
      console.log("errors", errors);
    }
  };
};
