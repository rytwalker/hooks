import React, { useState, useEffect } from 'react';

const Todo = props => {
  const [todoName, setTodoName] = useState('');
  const [todoList, setTodoList] = useState([]);
  //   useEffect(() => {
  //     axios
  //       .get('url')
  //       .then(res => console.log(res.data))
  //       .catch(err => console.dir(err));
  //   });

  // useState object
  //   const [todoState, setTodoState] = useState({ userInput: '', todoList: [] });

  const inputChangeHandler = event => {
    setTodoName(event.target.value);
    // setTodoState({
    //   userInput: event.target.value,
    //   todoList: todoState.todoList
    // });
  };

  const todoAddHandler = () => {
    setTodoList(todoList.concat(todoName));
    // setTodoState({
    //   userInput: todoState.userInput,
    //   todoList: todoState.todoList.concat(todoState.userInput)
    // });
    localStorage.setItem('todos', JSON.stringify(todoList));
  };

  return (
    <React.Fragment>
      <input
        type="text"
        placeholder="Todo"
        onChange={inputChangeHandler}
        value={todoName}
        // value={todoState.userInput}
      />
      <button onClick={todoAddHandler} type="button">
        Add
      </button>
      <ul>
        {todoList.map(todo => (
          <li key={todo}>{todo}</li>
        ))}
        {/* {todoState.todoList.map(todo => (
          <li key={todo}>{todo}</li>
        ))} */}
      </ul>
    </React.Fragment>
  );
};

export default Todo;
