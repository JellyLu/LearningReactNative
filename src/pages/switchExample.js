const React = require('react');
const {View, Switch} = require('react-native');
const Introduce = require('../components/introduce');

class SwitchExample extends React.Component {
  constructor() {
    super();
    this.state = {
        value: false
    }
  }

  render() {
    return (
      <View style={this.props.style}>
        <Introduce title='Switch' description='Renders a boolean input.'/>
        <Switch disabled={true}/>
        <Switch onTintColor='lightgreen'
                tintColor='red'
                thumbTintColor='yellow'
                onValueChange={(value) => this.setState({value})}
                value={this.state.value}
         />
      </View>
    );
  }
}

module.exports = SwitchExample;
