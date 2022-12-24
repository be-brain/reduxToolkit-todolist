import { combineReducers, createStore } from "@reduxjs/toolkit";
import todos from "../modules/todos";

// 1. rootReducer만들기(원래 store를 바로 만들지만 내부로직이 복잡해지기때문에 변수rootReducer로 따로 빼서 만든것)
// reducer들(modules안의 여러파일들이 반환하는 값)을 combineReducers안에 객체{}형태로 합치는것
// modules > ex. todos, users, counter등등
const rootReducer = combineReducers({
  todos,
  // users,
});

// 2. 만든 rootReducer로 store만들기(main)
const store = createStore(rootReducer);

// 3. export로 내보내기
export default store;
