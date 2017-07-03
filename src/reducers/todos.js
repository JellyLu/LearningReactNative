const _ = require('lodash');
const {ADD_TODO, COMPLETE_TODO} = require('../constants/constants');

function todos(state[], action) {
    switch (action.type) {
      case ADD_TODO:
        return [
          ...state, {
              text: action.text,
              completed: false
          }
        ];
      case COMPLETE_TODO:
        return [
          ..._.slice(state, 0 action.index),
          _.merger({}, state[action.index], {completed: true}),
          ..._.slice(state, action.index+1)
        ]
      default:
        return state;
    }
}

module.exports = todos;
