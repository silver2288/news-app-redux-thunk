export const FETCH_CATEGORIES = "FETCH_CATEGORIES";
export const fetch_categories = () => {
  return {
    type: FETCH_CATEGORIES
  };
};

export const FETCH_CATEGORIES_SUCCESS = "FETCH_CATEGORIES_SUCCESS";
export const fetch_categories_success = categories => {
  return {
    type: FETCH_CATEGORIES_SUCCESS,
    data: categories
  };
};

export const FETCH_CATEGORIES_FAILED = "FETCH_CATEGORIES_FAILED";
export const fetch_categories_failed = () => {
  return {
    type: FETCH_CATEGORIES_FAILED
  };
};

export const ADD_CATEGORIES = "ADD_CATEGORIES";
export const add_categories = id => {
  return {
    type: ADD_CATEGORIES,
    id
  };
};

export const REMOVE_CATEGORIES = "REMOVE_CATEGORIES";
export const remove_categories = id => {
  return {
    type: REMOVE_CATEGORIES,
    id
  };
};

function getCategories() {
  return dispatch => {
    dispatch(fetch_categories());
    return fetch("http://localhost:3000/typesNews")
      .then(data => data.json())
      .then(data => {
        dispatch(fetch_categories_success(data));
      })
      .catch(err => dispatch(fetch_categories_failed(err)));
  };
}

export const thunk_getCategories = () => {
  return function(dispatch, getState) {
    const current = Date.now();
    if (
      getState().categories.catData.length === 0 ||
      current - getState().categories.lastUpdated > 300000
    ) {
      return dispatch(getCategories());
    } else {
      return Promise.resolve();
    }
  };
};
