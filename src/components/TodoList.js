import React from "react";
// import Todo
import Todo from "./Todo";

const TodoList = ( props ) => {
  console.log( props.list );
  return (
    <div className='todo-list'>
      { props.list.map( ( item ) => (
        <Todo
          key={ item.id }
          todo={ item }
          toggleCompleted={ props.toggleCompleted }
        />

      ) )

      }
      <button className='clear-btn' onClick={ props.clearCompleted }>
        Clear Completed
          </button>
    </div>
  );
};

export default TodoList;
