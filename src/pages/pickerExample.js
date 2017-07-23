const React = require('react');
const {View, Picker} = require('react-native');
const PageContent = require('../components/pageContent');

class PickerExample extends React.Component {
  constructor() {
    super();
    this.state = {
        language: 'Java'
    }
  }

  render() {
    return (
      <PageContent pageTitle='Picker'
                   pageDescription='Renders the native picker component on iOS and Android.'>
            <Picker selectedValue={this.state.language}
                    onValueChange={(itemValue, itemIndex) => {
                            this.setState({language: itemValue});
                            alert(itemIndex);
                        }}
            >
                <Picker.Item label='Java' value='Java' />
                <Picker.Item label='JavaScript' value='JavaScript' />
                <Picker.Item label='Swift' value='Swift' />
                <Picker.Item label='Objective-C' value='Objective-C' />
                <Picker.Item label='C++' value='C++' />
                <Picker.Item label='C' value='C' />
                <Picker.Item label='Matlab' value='Matlab' />
            </Picker>
      </PageContent>
    );
  }
}

module.exports = PickerExample;
