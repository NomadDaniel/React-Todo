import React from "react";

// _____ "CCR" ==> class, constructor, render _____ //

class TodoForm extends React.Component {
  // ____________ Constructor w state _____________ //
  constructor () {
    super();
    this.state = {
      formValue: "",
    };
  }

  onChange = ( e ) => this.setState( { [ e.target.name ]: e.target.value } );

  // _______ Class methods to submit form and clear input afterwards _______ //
  onSubmit = ( e ) => {
    e.preventDefault();
    this.setState( { formValue: "" } );
    this.props.addTodo( e, this.state.formValue );
  };

  // _______________ render / return ______________ //
  render () {
    console.log( "rendering form" );
    return (
      <form onSubmit={ this.onSubmit }>
        <input
          type='text'
          value={ this.state.formValue }
          name='formValue'
          onChange={ this.onChange }
        />
        <button>Add</button>
      </form>
    );
  }
}

export default TodoForm;
