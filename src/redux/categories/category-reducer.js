import { CATEGORIES_ACTION_TYPES } from "./category-types";

export const CATEGORIES_INITIAL_STATE = {
  categories: [],
};

export const CategoriesReducer = (
  state = CATEGORIES_INITIAL_STATE,
  action = {}
) => {
  switch (action.type) {
    case CATEGORIES_ACTION_TYPES.SET_CATEGORIES_MAP:
      return { ...state, categories: action.payload };
    default:
      return state;
  }
};
