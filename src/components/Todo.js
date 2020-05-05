import React from "react";

const Item = ( props ) => {
  console.log( props.todo );
  const getStyle = () => {
    return {
      textDecoration: props.todo.completed ? "line-through" : "none",
    };
  };
  return (
    <div
      style={ getStyle() }
      onClick={ () => props.toggleCompleted( props.todo.id ) }>
      <p>{ props.todo.task }</p>

    </div>
  );
};

export default Item;
