const React = require('react');
const {View, Text} = require('react-native');

class ViewExample extends React.Component {
  constructor() {
      super();
  }

  render() {
    return (
      <View style={this.props.style}><Text>View</Text></View>
    );
  }
}

module.exports = ViewExample;
