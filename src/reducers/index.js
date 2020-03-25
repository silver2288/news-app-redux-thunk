import { combineReducers } from "redux";
import categories from "./categories";
import news from "./news";
import detail from "./detail";

export default combineReducers({
  categories,
  news,
  detail
});
