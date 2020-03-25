import { thunk_getNews } from "./fetchNewsAction";
import { add_categories, remove_categories } from "./fetchCategoriesAction";

export const toogleCategory = (id, isChecked, color) => {
  return function(dispatch, getState) {
    if (isChecked) {
      dispatch(add_categories(id));
    } else {
      dispatch(remove_categories(id));
    }
    dispatch(thunk_getNews(id, color));
  };
};
