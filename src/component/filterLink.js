const React = require('react');
const Link = require('./link');

class FilterLink extends React.Component {
  render() {
    return (
        <Link active={this.props.active}
              onClick={this.props.onClick}>
              {this.props.children}
        </Link>
    );
  }
}

module.exports = FilterLink;
