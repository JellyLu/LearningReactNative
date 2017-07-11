'use strict';

const React = require('react');
const {PropTypes} = React;
const styles = require('../styles/shareStyles');
const {
  View,
  Text,
  TouchableHighlight,
  AlertIOS
} = require('react-native');
const ToDoList = require('./todoList');
const ToDoEdit = require('./todoEdit');
const Footer = require('./footer');
const {
  updateTodo,
  deleteTodo,
  setVisibilityFilter } = require('../actions/actions');

class ToDoListContainer extends React.Component {
  constructor() {
    super();
    this.openItem = this.openItem.bind(this);
    this.alertMenu = this.alertMenu.bind(this);
    this.updateItem = this.updateItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.updateFilter = this.updateFilter.bind(this);
  }
  deleteItem(rowId) {
    const {dispatch} = this.props;
    dispatch(deleteTodo(rowId));
  }
  updateItem(item, id) {
    const {dispatch} = this.props;
    dispatch(updateTodo(item, id));
    this.props.navigator.pop();
  }
  openItem(rowData, rowId) {
    this.props.navigator.push({
      title: rowData && rowData.text || 'New Item',
      component: ToDoEdit,
      passProps: {item: rowData, id: rowId, update: this.updateItem}
    });
  }
  alertMenu(rowData, rowId) {
    AlertIOS.alert(
      'Quick Menu',
      null,
      [
        {text: 'Delete', onPress: () => this.deleteItem(rowId)},
        {text: 'Edit', onPress: () => this.openItem(rowData, rowId)},
        {text: 'Cancel'}
      ]
    );
  }
  updateFilter(filter) {
    const {dispatch} = this.props;
    dispatch(setVisibilityFilter(filter));
  }
  render() {
    return (
      <View style={{flex:1}}>
        <TouchableHighlight
        style={[styles.button, styles.saveButton]}
        underlayColor='#99d9f4'
        onPress={this.openItem}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableHighlight>
        <ToDoList
        items={this.props.visibleTodos}
        onPress={this.openItem}
        onLongPress={this.alertMenu} />
        <Footer
        visibilityFilter={this.props.visibilityFilter}
        onClick={this.updateFilter} />
      </View>
    );
  }
}

module.exports = ToDoListContainer;
