const React = require('react');
const {Slider} = require('react-native');
const PageContent = require('../components/pageContent');

class SliderExample extends React.Component {
  constructor() {
    super();
    this.state = {
        value: 50
    }
  }

  render() {
    return (
      <PageContent pageTitle='Slider'
                   pageDescription='A component used to select a single value from a range of values.'>
        <Slider maximumTrackTintColor='blue'
                minimumTrackTintColor='red'
                maximumValue={100}
                minimumValue={0}
                step={10}
                onSlidingComplete={(value) => this.setState({value})}
                onValueChange={(value) => console.log(value)}
                value={this.state.value}
        />
      </PageContent>
    );
  }
}

module.exports = SliderExample;
