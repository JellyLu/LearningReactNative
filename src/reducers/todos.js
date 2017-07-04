const _ = require('lodash');
const {
    ADD_TODO,
    UPDATE_TODO,
    DELETE_TODO,
    COMPLETE_TODO
} = require('../constants/constants');

function todos(state = [], action) {
    switch (action.type) {
      case ADD_TODO:
        return [
          ...state, {
              text: action.text,
              completed: false
          }
        ];
      case UPDATE_TODO:
        return action.index
          ? [..._.slice(state, 0, action.index),
          action.todo,
          ..._.slice(state, action.index+1)]
        : [...state, action.todo];
      case DELETE_TODO:
        return [
          ..._.slice(state, 0, action.index),
          ..._.slice(state, action.index+1)
        ];
      case COMPLETE_TODO:
        return [
          ..._.slice(state, 0, action.index),
          _.merger({}, state[action.index], {completed: true}),
          ..._.slice(state, action.index+1)
        ];
      default:
        return state;
    }
}

module.exports = todos;
