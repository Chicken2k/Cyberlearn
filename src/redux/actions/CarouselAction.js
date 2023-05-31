import axios from "axios";
import { DOMAIN } from "../../util/Setting/config";
import { SET_CAROUSEL } from "./Type/CarouselType";
import { LayDanhSachBanner } from "../../services/QuanLyPhimService";
export const getCarouselAction = () => {
  return async (dispatch) => {
    try {
      //Sử dụng tham số thamSo
      const result = await LayDanhSachBanner()

      dispatch({
        type: SET_CAROUSEL,
        arrImg: result.data.content,
      });
    } catch (errors) {
      console.log("errors", errors);
    }
  };
};
