var React = require('react');
var {Text} = require('react-native');
var ToDoList = require ('./component/todoList');

class Setup  extends React.Component {
  render() {
    var items = [{text: 'Learn react native', complete: false},
                {text: 'Make a to-do app', complete: true}];
    return (<ToDoList
      items={items}
      onPress={(rowData, rowId) => {alert('press' + rowData + '-' + rowId);}}
      onLongPress={(rowData, rowId) => {alert('long press'+ rowData + '-' + rowId);}}
      />);
  }
}

module.exports = Setup;
