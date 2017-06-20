'use strict';

const React = require('react');
const {ListView, Text} = require('react-native');
const styles = require('../styles/shareStyles');
const TodoListItem = require('./todoListItem');

class ToDoList extends React.Component {
  componentWillMount() {
        this.dataSource = new ListView.DataSource({
            rowHasChanged: (row1, row2) => row1 !== row2
        });
  }

  render() {
    const dataSource = this.dataSource.cloneWithRows(this.props.items);
    return (
      <ListView style={styles.listView}
      dataSource={dataSource}
      renderRow={
        (rowData, sectionId, rowId) =>
          <TodoListItem item={rowData}
          onPress={() => this.props.onPress(rowData, rowId)}
          onLongPress={() => this.props.onLongPress(rowData, rowId)} />
      }
      />
    );
  }
}

module.exports = ToDoList;
