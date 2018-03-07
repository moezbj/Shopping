import { combineReducers } from "redux";
import ProductReduce from "./ProductReduce";

export default combineReducers({
  prod: ProductReduce
});
