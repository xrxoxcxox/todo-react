import React from 'react';
import PropTypes from 'prop-types';
import TodoM from '../../Todo';

function Todo(props) {
  return <TodoM {...props}/>
}

Todo.propTypes = {
  completed: PropTypes.bool,
  name: PropTypes.string,

  toggleTaskCompleted: PropTypes.func,
}

Todo.defaultProps = {
  name: 'Do Laundry'
};

export default Todo;
