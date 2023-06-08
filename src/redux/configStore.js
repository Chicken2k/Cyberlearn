import {
  applyMiddleware,
  combineReducers,
  legacy_createStore as createStore,
} from "redux";
import thunk from "redux-thunk";
import { CarouselReducer } from "./reducers/CarouselReducer";
import { FilmManagementReducer } from "./reducers/FilmManagementReducer";
import { CinemaManagerReducer } from "./reducers/CinemaManagerReducer";
import { reducerUserManagement } from "./reducers/UserManagementReducer";
import { TicketManagementReducer } from "./reducers/TicketManagementReducer";
const rootReducer = combineReducers({
  // state ung dung
  CarouselReducer,
  FilmManagementReducer,
  CinemaManagerReducer,
  reducerUserManagement,
  TicketManagementReducer
});
export const store = createStore(rootReducer, applyMiddleware(thunk));
