import {
  FETCH_CATEGORIES,
  SELECT_CATEGORY,
} from '../constants';

import data from '../data.json';

const getAsyncData = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(data), 50);
  });
};

export const fetchCategories = () => async (dispatch) => {
  try {
    const { categories } = await getAsyncData();
    dispatch({ type: FETCH_CATEGORIES, payload: categories });
  } catch (err) {
    console.log(err);
  }
};

export const selectCategory = id => ({
  type: SELECT_CATEGORY,
  payload: id,
});
