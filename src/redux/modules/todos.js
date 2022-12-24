import { v4 as uuidv4 } from "uuid";
// 1. action items만들기
const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";
const TOGGLE_TODO = "TOGGLE_TODO";

// 2. action creators만들기(component에서 사용하기위해 export해준다)
export const addTodo = (payload) => {
  // payload라는 객체(todo)가 들어감
  return {
    type: ADD_TODO,
    payload,
  };
};
export const deleteTodo = (payload) => {
  // payload라는 객체(todo의 id)가 들어가서 id를 이용하여 삭제구현
  return {
    type: DELETE_TODO,
    payload,
  };
};
export const toggleTodo = (payload) => {
  // payload라는 객체(todo의 id)가 들어가서 id의 isDone으로 토글구현
  return {
    type: TOGGLE_TODO,
    payload,
  };
};

// 3. initialState만들기(reducer구성할때 사용)
const initialState = [
  {
    id: uuidv4(),
    title: "제목1",
    content: "내용1입니다",
    isDone: false,
  },
  {
    id: uuidv4(),
    title: "제목2",
    content: "내용2입니다",
    isDone: true,
  },
  {
    id: uuidv4(),
    title: "제목3",
    content: "내용3입니다",
    isDone: false,
  },
];

// 4. reducer만들기
const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];
    case DELETE_TODO:
      return state.filter((item) => item.id !== action.payload);
    case TOGGLE_TODO:
      return state.map((item) => {
        if (item.id === action.payload) {
          return { ...item, isDone: !item.isDone };
        } else {
          return item;
        }
      });
    default:
      return state;
  }
};
// 5. export reducer
export default todos;
