const React = require('react');
const {Text} = require('react-native');

class TextExample extends React.Component {
  constructor() {
      super();
  }

  render() {
    return (
      <Text style={this.props.style}>Text</Text>
    );
  }
}

module.exports = TextExample;
