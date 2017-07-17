const React = require('react');
const {View, Text} = require('react-native');
const Introduce = require('../components/introduce');

class ViewExample extends React.Component {
  constructor() {
      super();
  }

  render() {
    return (
      <View style={this.props.style}>
        <Introduce title='View' description='The most fundamental component for building a UI.' />
        <View style={{flexDirection: 'row', height: 100, padding: 20}}>
          <View style={{backgroundColor: 'blue', flex: 0.3}} />
          <View style={{backgroundColor: 'red', flex: 0.5}} />
        </View>
      </View>
    );
  }
}

module.exports = ViewExample;
