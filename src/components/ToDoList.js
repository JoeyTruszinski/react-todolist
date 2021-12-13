import React from "react";

const ToDoList = (props) => (
  <ul>
    {props.items.map((item, index) => (
      <li key={index}>{item}</li>
    ))}
  </ul>
);

export default ToDoList;
