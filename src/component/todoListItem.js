'use strict';

const styles = require('../styles/shareStyles');
const React = require('react');
const {
  View,
  Text,
  TouchableHighlight
} = require('react-native');

class TodoListItem extends React.Component{
  render() {
    const {item} = this.props;
    return (
      <View>
        <TouchableHighlight
        onPress={this.props.onPress}
        onLongPress={this.props.onLongPress}>
          <View style={styles.container}>
            <Text style={[styles.text, item.complete && styles.completed]}>
              {item.text}
            </Text>
          </View>
        </TouchableHighlight>
        <View style={styles.hr}/>
      </View>
    );
  }
}

module.exports = TodoListItem;
