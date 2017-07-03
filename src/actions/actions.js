const {ADD_TODO, COMPLETE_TODO, SET_VISIBILITY_FILTER} = require('../constants/constants');

function addTodo(text) {
  return {
    type: ADD_TODO,
    text
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
  setVisibilityFilter
};
