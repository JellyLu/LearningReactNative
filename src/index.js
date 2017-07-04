'use strict';
const React = require('react');
const {Provider} = require('react-redux');
const store = require('./stores/todoAppStore');
const {NavigatorIOS} = require('react-native');
const styles = require('./styles/shareStyles');
const TodoApp = require ('./pages/todoApp');

class Setup extends React.Component {
    render() {
      return (
        <Provider store={store}>
          <NavigatorIOS style={styles.navigator}
          initialRoute={{component: TodoApp, title: 'ToDo List - J'}}
          />
        </Provider>
      );
    }
}


global.LOG = (...args) => {
  console.log('/------------------------------\\');
  console.log(...args);
  console.log('\\------------------------------/');
  return args[args.length - 1];
};

module.exports = Setup;
