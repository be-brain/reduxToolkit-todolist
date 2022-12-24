import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteTodo, toggleTodo } from "../modules/todos";

const TodoItem = ({ item, isActive }) => {
  const dispatch = useDispatch();
  const handleToggleBtn = (id) => {
    dispatch(toggleTodo(id));
  };
  const handleDeleteBtn = (id) => {
    dispatch(deleteTodo(id));
  };
  const navigate = useNavigate();
  return (
    <div>
      <div key={item.id}>
        <h4>{item.title}</h4>
        <p>{item.content}</p>
        <button onClick={() => handleToggleBtn(item.id)}>
          {isActive ? "완료" : "취소"}
        </button>
        <button onClick={() => handleDeleteBtn(item.id)}>삭제</button>
        {/* handleToggleBtn(item.id), handleDeleteBtn(item.id)로 바로 넣어주면 함수가 즉시실행되어버리므로 한번감싸줌*/}
        <button onClick={() => navigate(`/${item.id}`)}>상세보기</button>
      </div>
    </div>
  );
};

export default TodoItem;
