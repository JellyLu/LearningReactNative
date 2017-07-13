const styles = require('../styles/shareStyles');
const React = require('react');
const Link = require('./link');

class FilterLink extends React.Component {
  render() {
    return (
        <Link style={styles.filterLink}
              active={this.props.active}
              onClick={this.props.onClick}>
              {this.props.children}
        </Link>
    );
  }
}

module.exports = FilterLink;
