import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const Detail = () => {
  const paramId = useParams().id;
  // console.log(useParams()) = {id: '0e145de1-a23b-4071-b8fe-7389d749dabd'}
  // console.log(useParams().id) = 0e145de1-a23b-4071-b8fe-7389d749dabd

  const todos = useSelector((state) => state.todos);
  const filteredTodo = todos.filter((item) => item.id === paramId)[0];
  // console.log(todos.filter) = [{…}]
  // console.log(todos.filter[0]) = {…}
  return (
    <div>
      <h4>{filteredTodo.title}</h4>
      <p>{filteredTodo.content}</p>
    </div>
  );
};

export default Detail;
