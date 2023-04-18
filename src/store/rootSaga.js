import { call, all } from "@redux-saga/core/effects";
import { categoriesSaga } from "./Categories/category.saga";
import { userSagas } from "./user/user.saga";

export function* rootSaga() {
  yield all([call(categoriesSaga), call(userSagas)]);
}

// box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
