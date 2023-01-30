import { combineReducers } from "redux";

import { userReducer } from "../redux/user/user-reducer";
import { cartReducer } from "./cart/cart-reducer";
import { CategoriesReducer } from "./categories/category-reducer";

export const rootReducer = combineReducers({
  user: userReducer,
  categories: CategoriesReducer,
  cart: cartReducer,
});
