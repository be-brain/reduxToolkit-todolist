import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { todosActions } from "../modules/todos";

const Input = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const newTodo = {
    id: uuidv4(),
    title,
    content,
    isDone: false,
  };
  // 입력한 값들은 store안에 저장되어있으므로 dispatch를 이용해서 추가해야한다
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    // dispatch(addTodo(newTodo));
    dispatch(todosActions.addTodo(newTodo));
  };

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleContent = (e) => {
    setContent(e.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="제목"
          value={title}
          onChange={handleTitle}
        ></input>
        &nbsp;
        <input
          type="text"
          placeholder="내용"
          value={content}
          onChange={handleContent}
        ></input>
        &nbsp;
        <button type="submit">추가</button>
      </form>
    </div>
  );
};

export default Input;
