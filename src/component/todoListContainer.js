'use strict';

const React = require('react');
const styles = require('../styles/shareStyles');
const {
  View,
  Text,
  TouchableHighlight,
  AlertIOS
} = require('react-native');
const ToDoList = require('./todoList');
const ToDoEdit = require('./todoEdit');


class ToDoListContainer extends React.Component {
  constructor() {
    super();
    this.state = {
        items: [{
                    text: 'Learn react native',
                    complete: true
                },
                {
                    text: 'Make a to-do app',
                    complete: false
                }]
    };
    this.openItem = this.openItem.bind(this);
    this.alertMenu = this.alertMenu.bind(this);
    this.updateItem = this.updateItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }
  deleteItem(rowId) {
    const items = this.state.items;
    items.splice(rowId, 1);
    this.setState({items: items});
  }
  updateItem(item, id) {
    const items = this.state.items;
    if(id) {
      items[id] = item;
    } else {
      items.push(item);
    }
    this.setState({items: items});
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
  render() {
    return (
      <View style={{flex:1}}>
        <ToDoList
        items={this.state.items}
        onPress={this.openItem}
        onLongPress={this.alertMenu} />
        <TouchableHighlight
        style={[styles.button, styles.saveButton]}
        underlayColor='#99d9f4'
        onPress={this.openItem}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

module.exports = ToDoListContainer;
