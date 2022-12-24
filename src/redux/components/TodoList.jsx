import React from "react";
import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

const TodoList = ({ isActive }) => {
  // store에 있는 todos가져오기
  // state안에는 todos, users 등등 모든 reducer들이 있으므로 state.todos로 todos만 가져온다
  const todos = useSelector((state) => state.todos);

  return (
    <div>
      <h3>{isActive ? "할일" : "완료"}</h3>
      {todos
        .filter((item) => item.isDone === !isActive)
        .map((item) => {
          return <TodoItem key={item.id} item={item} isActive={isActive} />;
        })}
      {/* map함수는 항상 key prop을 넣어주어야한다 */}
    </div>
  );
};

export default TodoList;
