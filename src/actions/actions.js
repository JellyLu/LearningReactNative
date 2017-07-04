const {
    ADD_TODO,
    UPDATE_TODO,
    DELETE_TODO,
    COMPLETE_TODO,
    SET_VISIBILITY_FILTER
} = require('../constants/constants');

function addTodo(text) {
  return {
    type: ADD_TODO,
    text
  };
}

function updateTodo(todo, index) {
  return {
    type: UPDATE_TODO,
    todo,
    index
  };
}

function deleteTodo(index) {
  return {
    type: DELETE_TODO,
    index
  };
}

function completeTodo(index) {
  return {
    type: COMPLETE_TODO,
    index
  }
}

function setVisibilityFilter(filter) {
  return {
    type: SET_VISIBILITY_FILTER,
    filter
  }
}

module.exports = {
  addTodo,
  completeTodo,
  updateTodo,
  deleteTodo,
  setVisibilityFilter
};
