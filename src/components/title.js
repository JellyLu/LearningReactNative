const React = require('react');
const {View, Text} = require('react-native');
const styles = require('../styles/styles');

class Title extends React.Component {
  render() {
    return (
      <Text style={styles.title}>{this.props.children}</Text>
    );
  }
}

module.exports = Title;
