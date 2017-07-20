const React = require('react');
const {View, Slider} = require('react-native');
const Introduce = require('../components/introduce');

class SliderExample extends React.Component {
  constructor() {
    super();
    this.state = {
        value: 50
    }
  }

  render() {
    return (
      <View style={this.props.style}>
        <Introduce title='Slider' description='A component used to select a single value from a range of values.'/>
        <Slider maximumTrackTintColor='blue'
                minimumTrackTintColor='red'
                maximumValue={100}
                minimumValue={0}
                step={10}
                onSlidingComplete={(value) => this.setState({value})}
                onValueChange={(value) => console.log(value)}
                value={this.state.value}
        />
      </View>
    );
  }
}

module.exports = SliderExample;
