const styles = require('../styles/shareStyles');
const React = require('react');
const {Text} = require('react-native');

class Link extends React.Component {
  render() {
    return (
    this.props.active
    ? <Text style={[styles.link, styles.activeLink]}>{this.props.children}</Text>
    : (
        <Text style={styles.link} onPress={() => this.props.onClick()}>
            {this.props.children}
        </Text>
      )
    );
  }
}

module.exports = Link;
