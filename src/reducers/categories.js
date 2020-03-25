import {
  FETCH_CATEGORIES,
  FETCH_CATEGORIES_SUCCESS,
  FETCH_CATEGORIES_FAILED,
  ADD_CATEGORIES,
  REMOVE_CATEGORIES
} from "../actions/fetchCategoriesAction";

const initialState = {
  catData: [],
  isFetching: false,
  isError: false,
  lastUpdated: Date.now(),
  selected: []
};

const asyncCatReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CATEGORIES:
      return {
        ...state,
        isFetching: true,
        isError: false
      };

    case FETCH_CATEGORIES_SUCCESS:
      return {
        ...state,
        catData: action.data,
        isFetching: false,
        isError: false
      };

    case FETCH_CATEGORIES_FAILED:
      return {
        ...state,
        isError: true,
        isFetching: false
      };

    case ADD_CATEGORIES:
      return {
        ...state,
        //selected: [...state.selected, action.id]
        selected: state.selected.concat(action.id)
      };

    case REMOVE_CATEGORIES:
      return {
        ...state,
        selected: state.selected.filter(el => el !== action.id)
      };

    default:
      return state;
  }
};

export default asyncCatReducer;
