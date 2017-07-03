const {createStore} = require('redux');
const todoApp = require('../reducers/todoApp');

module.exports = createStore(todoApp);
