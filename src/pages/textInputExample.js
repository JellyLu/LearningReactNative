const React = require('react');
const {View, TextInput} = require('react-native');
const PageContent = require('../components/pageContent');

class TextInputExample extends React.Component {
  constructor() {
    super();
    this.state = {text: ''};
  }

  render() {
    return (
      <PageContent pageTitle='TextInput'
                   pageDescription='A component for inputting text into the app via a keyboard.'>
        <View>
          <TextInput
            style={{height: 40, borderColor: 'gray', borderWidth: 1}}
            onChangeText={(text) => this.setState({text})}
            value={this.state.text}
            editable={true}
            maxLength={20}
            autoFocus={true}
            keyboardType='email-address' //default, numeric, email-address, phone-pad
            autoCapitalize='none' // enum('none', 'sentences', 'words', 'characters')
          />
       <TextInput
         style={{height: 100, borderColor: 'gray', borderWidth: 1, backgroundColor: this.state.text}}
         multiline={true}
         numberOfLines = {5}
         autoCapitalize='words'
         editable={false}
         onChangeText={(text) => this.setState({text})}
         value={this.state.text}
       />
        </View>
      </PageContent>
    );
  }
}

module.exports = TextInputExample;
