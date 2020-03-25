export const FETCH_NEWS = "FETCH_NEWS";
export const fetch_news = categoryId => {
  return {
    type: FETCH_NEWS,
    categoryId
  };
};

export const FETCH_NEWS_SUCCESS = "FETCH_NEWS_SUCCESS";
export const fetch_news_success = (news, categoryId) => {
  return {
    type: FETCH_NEWS_SUCCESS,
    data: news,
    categoryId
  };
};

export const FETCH_NEWS_FAILED = "FETCH_NEWS_FAILED";
export const fetch_news_failed = () => {
  return {
    type: FETCH_NEWS_FAILED
  };
};

function getNews(id) {
  return dispatch => {
    dispatch(fetch_news(id));
    return fetch(`http://localhost:3000/newsByType-${id}`)
      .then(data => data.json())
      .then(data => {
        dispatch(fetch_news_success(data, id));
      })
      .catch(err => dispatch(fetch_news_failed(err)));
  };
}

export const thunk_getNews = id => {
  return function(dispatch, getState) {
    const current = Date.now();

    if (
      !getState().news[id] ||
      (!getState().news[id].isFetching &&
        current - getState().news[id].lastUpdated > 300000)
    ) {
      return dispatch(getNews(id, getState()));
    } else {
      return Promise.resolve();
    }
  };
};
