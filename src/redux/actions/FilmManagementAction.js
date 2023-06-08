// import { getMovieList } from "../../services/FilmManagementServic";
import { getMovieList } from "../../services/FilmManagementService";
import { SET_LIST_MOVIE } from "./Types/QuanLyphimType";

export const getMovieListAction = () => {
  return async (dispatch) => {
    try {
      // lay data tu api
      const result = await getMovieList();
      dispatch({
        type: SET_LIST_MOVIE,
        arrFilm: result.data.content,
      });
    } catch (errors) {
      console.log("errors", errors);
    }
  };
};
