import {
  FETCH_NEWS,
  FETCH_NEWS_SUCCESS,
  FETCH_NEWS_FAILED
} from "../actions/fetchNewsAction";

function composeNews(
  item = {
    newsData: [],
    isFetching: false,
    isError: false,
    lastUpdated: null
  },
  action
) {
  switch (action.type) {
    case FETCH_NEWS:
      return {
        ...item,
        isFetching: true
      };

    case FETCH_NEWS_SUCCESS:
      return {
        ...item,
        isFetching: false,
        lastUpdated: Date.now(),
        newsData: action.data
      };

    case FETCH_NEWS_FAILED:
      return {
        ...item,
        isError: true,
        isFetching: false
      };

    default:
      return item;
  }
}

const asyncNewsReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_NEWS_SUCCESS:
    case FETCH_NEWS:
      return {
        ...state,
        [action.categoryId]: composeNews(state[action.categoryId], action)
      };

    case FETCH_NEWS_FAILED:
      return {
        ...state
      };

    default:
      return state;
  }
};

export default asyncNewsReducer;
