const React = require('react');
const {View, Text} = require('react-native');
const Introduce = require('../components/introduce');

class TextExample extends React.Component {
  constructor() {
      super();
  }

  render() {
    return (
      <View style={this.props.style}>
      <Introduce title='Text' description='A component for displaying text.'/>
      <Text>
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>
          Birds Nest
        </Text>
        <Text numberOfLines={5}>
          This is not really a bird nest.
        </Text>
      </Text>
      </View> 
    );
  }
}

module.exports = TextExample;
