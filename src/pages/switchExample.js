const React = require('react');
const {Switch} = require('react-native');
const PageContent = require('../components/pageContent');

class SwitchExample extends React.Component {
  constructor() {
    super();
    this.state = {
        value: false
    }
  }

  render() {
    return (
      <PageContent pageTitle='Switch'
                   pageDescription='Renders a boolean input.'>
        <Switch disabled={true}/>
        <Switch onTintColor='lightgreen'
                tintColor='red'
                thumbTintColor='yellow'
                onValueChange={(value) => this.setState({value})}
                value={this.state.value}
         />
      </PageContent>
    );
  }
}

module.exports = SwitchExample;
