import {
  applyMiddleware,
  combineReducers,
  legacy_createStore as createStore,
} from "redux";
import thunk from "redux-thunk";
import { CarouselReducer } from "./reducers/CarouselReducer";
import { QuanLyPhimReducer } from "./reducers/QuanLyPhimReducer";
const rootReducer = combineReducers({
  // state ung dung
  CarouselReducer,
  QuanLyPhimReducer
});
export const store = createStore(rootReducer, applyMiddleware(thunk));