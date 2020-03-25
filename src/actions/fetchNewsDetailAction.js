export const FETCH_DETAIL = "FETCH_DETAIL";
export const fetch_detail = (categoryId, id) => {
  return {
    type: FETCH_DETAIL,
    categoryId,
    id
  };
};

export const FETCH_DETAIL_SUCCESS = "FETCH_DETAIL_SUCCESS";
export const fetch_detail_success = detail => {
  return {
    type: FETCH_DETAIL_SUCCESS,
    data: detail
  };
};

export const FETCH_DETAIL_FAILED = "FETCH_DETAIL_FAILED";
export const fetch_detail_failed = () => {
  return {
    type: FETCH_DETAIL_FAILED
  };
};

export const TOOGLE_FAVORITE = "TOOGLE_FAVORITE";
export const toogle_favorite = isFavorite => {
  return {
    type: TOOGLE_FAVORITE,
    isFavorite
  };
};

export const thunk_getDetail = (categoryId, id) => {
  return function(dispatch, getState) {
    dispatch(fetch_detail(categoryId, id));
    return fetch(`http://localhost:3000/newsByType-${categoryId}-${id}`)
      .then(data => data.json())
      .then(data => {
        dispatch(fetch_detail_success(data));
      })
      .catch(err => dispatch(fetch_detail_failed(err)));
  };
};

export const thunk_getDetail_favorite = isFavorite => {
  return function(dispatch, getState) {
    dispatch(toogle_favorite(isFavorite));
  };
};
