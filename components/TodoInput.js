import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTodoAction,addTodoAction2 } from '../redux';

const TodoInput = (props) => {
  const [todo, setTodo] = useState('');
 console.log(props)
  const onChange = (event) => {
    setTodo(event.target.value);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    props.addTodoAction({
      id: Date.now(),
      name: todo,
      complete: false
    });
    setTodo('');
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="form-div">
        <input
          type="text"
          name="todo"
          placeholder="Add a todo"
          value={todo}
          onChange={onChange}
        />
        <button className="btn btn-info btn-sm" type="submit">Add</button>
      </div>
    </form>
  );
};

const mapStateToProps = (state) => ({
  todos: state.todos,
  df: state.todos
});

export default connect(
  mapStateToProps,
  { addTodoAction,addTodoAction2 }
)(TodoInput);