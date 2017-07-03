const {combineReudcers} = require('redux');
const todos = require('./todos');
const visibilityFilter = require('./visibilityFilter');

const todoApp = combineReudcers({
  todos,
  visibilityFilter
});

module.exports = todoApp;
