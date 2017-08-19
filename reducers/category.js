import {
  FETCH_CATEGORIES,
  SELECT_CATEGORY,
} from '../constants';

const INITIAL_STATE = {
  categories: [],
  selectedCategory: '',
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_CATEGORIES:
      return { ...state, categories: action.payload };
    case SELECT_CATEGORY:
      return { ...state, selectedCategory: action.payload };
    default:
      return state;
  }
}
