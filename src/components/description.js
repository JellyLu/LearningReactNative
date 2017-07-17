const React = require('react');
const {Text} = require('react-native');
const styles = require('../styles/styles');

class Description extends React.Component {
    render() {
      return (
        <Text style={styles.description}>
          {this.props.children}
        </Text>
      );
    }
}

module.exports = Description;
