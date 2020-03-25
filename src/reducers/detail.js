import {
  FETCH_DETAIL,
  FETCH_DETAIL_SUCCESS,
  FETCH_DETAIL_FAILED,
  TOOGLE_FAVORITE
} from "../actions/fetchNewsDetailAction";

const initialState = {
  detailData: [],
  isFetching: false,
  isError: false,
  color: ""
};

const asyncDetReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DETAIL:
      return {
        ...state,
        isFetching: true,
        isError: false
      };

    case FETCH_DETAIL_SUCCESS:
      return {
        ...state,
        detailData: action.data,
        isFetching: false,
        isError: false,
        color: action.color
      };

    case FETCH_DETAIL_FAILED:
      return {
        ...state,
        isError: true,
        isFetching: false
      };

    case TOOGLE_FAVORITE:
      return {
        ...state,
        detailData: {
          ...state.detailData,
          favorite: action.isFavorite
        }
      };

    default:
      return state;
  }
};

export default asyncDetReducer;
