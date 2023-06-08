import { SET_CINEMA_SYSTEM } from "../actions/Types/QuayLyRapType";

const stateDefault = {
  CinemaSystem: [],
};
export const CinemaManagerReducer = (state = stateDefault, action) => {

  switch (action.type) {
    case SET_CINEMA_SYSTEM:
      state.CinemaSystem  = action.CinemaSystem;
      return {
        ...state,
      };
    default:
      return state;
  }
};
