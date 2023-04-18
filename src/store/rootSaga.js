import { call, all } from "@redux-saga/core/effects";
import { categoriesSaga } from "./Categories/category.saga";

export function* rootSaga() {
  yield all([call(categoriesSaga)]);
}
