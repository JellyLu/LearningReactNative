'use strict';
const React = require('react');
const {Text, NavigatorIOS} = require('react-native');
const styles = require('./styles/shareStyles');
const ToDoListContainer = require ('./component/todoListContainer');

class Setup  extends React.Component {
  render() {
    return (
      <NavigatorIOS
      style={styles.navigator}
      initialRoute={{component: ToDoListContainer, title: 'ToDo List - J'}}
      />
    );
  }
}

module.exports = Setup;
