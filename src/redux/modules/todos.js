import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
// 1. action items만들기
// const ADD_TODO = "ADD_TODO";
// const DELETE_TODO = "DELETE_TODO";
// const TOGGLE_TODO = "TOGGLE_TODO";

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

// createSlice = reducer만드는걸 도와준다/ 객체를 매개변수로 받는다{name, initialState, reducers}
const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo(state, action) {
      return [...state, action.payload];
    },
    deleteTodo(state, action) {
      return state.filter((item) => item.id !== action.payload);
    },
    toggleTodo(state, action) {
      return state.map((item) => {
        if (item.id === action.payload) {
          return { ...item, isDone: !item.isDone };
        } else {
          return item;
        }
      });
    },
  },
});
console.log("pppp:", todoSlice);
export default todoSlice.reducer;
export const todosActions = todoSlice.actions;

// 4. reducer만들기
// const todos = (state = initialState, action) => {
//   switch (action.type) {
//     case ADD_TODO:
//       return [...state, action.payload];
//     case DELETE_TODO:
//       return state.filter((item) => item.id !== action.payload);
//     case TOGGLE_TODO:
//       return state.map((item) => {
//         if (item.id === action.payload) {
//           return { ...item, isDone: !item.isDone };
//         } else {
//           return item;
//         }
//       });
//     default:
//       return state;
//   }
// };
// 5. export reducer
// export default todos;
