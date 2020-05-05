import React from "react";
// ___ import components with handler functions ___ //
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";


// ___________ Instructions from readme ___________ //
// "App.js" will hold all the data needed for this project. It will also be the container for your Todo Components.All of your application data will be stored here. All of the handler functions should live here

// ________________________________________________ //

// __________ store given array of objects ________ //
const initialList = [
  {
    task: "Clean Theo's poop-igloo",
    id: 1528817077286,
    completed: false,
  },
  {
    task: "Move bottle/can returns to storage locker",
    id: 1528817084358,
    completed: false,
  },
  {
    task: "Stretch, persist data in window.localStorage",
    id: 1528817084357,
    completed: false
  },
];

// _____ "CCR" ==> class, constructor, render _____ //

class App extends React.Component {
  // ____________ Constructor w state _____________ //
  constructor () {
    super();
    this.state = {
      list: initialList,
    };
  }
  // ________ Class methods to update state _______ //

  // _____________ 1) toggleCompleted _____________ //
  toggleCompleted = ( todoId ) => {
    console.log( todoId );

    this.setState( {
      list: this.state.list.map( ( todo ) => {
        if ( todoId === todo.id ) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      } ),
    } );
  };

  // _________________ 2) addTodo _________________ //
  addTodo = ( e, todo ) => {
    e.preventDefault();
    const newTodo = {
      task: todo,
      id: Date.now(),
      completed: false,
    };
    this.setState( {
      list: [ ...this.state.list, newTodo ],
    } );
  };

  // _____________ 3) clearCompleted ______________ //
  clearCompleted = ( e ) => {
    e.preventDefault();
    this.setState( {
      list: this.state.list.filter( ( todo ) => !todo.completed ),
    } );
  };


  // _____________ Persist data and store locally  ______________ //

  componentDidMount () {
    // this.setState using JSON.parse accessing local storage.getItem using key 'list'...this changes the JSON string into an object to be rendered//
    this.setState( JSON.parse( window.localStorage.getItem( 'list' ) ) );
  }

  componentDidUpdate ( previousState ) {
    // send back the new object as string to setItem for 'list' //
    if ( this.state.list !== previousState.list ) {
      window.localStorage.setItem( 'list', JSON.stringify( this.state ) );
    }
  }

  // _______________ render / return _______________ //
  render () {
    console.log( this.state.list );
    return (
      <div className='App'>
        <div className='header'>
          <h2>Todo App</h2>
        </div>
        <TodoForm addTodo={ this.addTodo } />
        <TodoList
          list={ this.state.list }
          toggleCompleted={ this.toggleCompleted }
          clearCompleted={ this.clearCompleted }
        />
      </div>
    );
  }
}

export default App;
