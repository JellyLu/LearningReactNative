const React = require('react');
const {
  Button,
  TouchableOpacity,
  Image
} = require('react-native');
const Introduce = require('../components/introduce');
const PageContent = require('../components/pageContent');
const favIcon = require('../images/favicon.png');

class ButtonExample extends React.Component {
  constructor() {
    super();
    this._onPress = this._onPress.bind(this);
  }

  _onPress() {
    alert('this is a button');
  }

  render() {
    return (
      <PageContent pageTitle='Button'
                   pageDescription='A basic button component for handling touches that should render nicely on any platform.'>

        <Button accessibilityLabel='This is a ok button'
                onPress={this._onPress}
                color='#841584'
                title='OK!'
        />

        <Button accessibilityLabel='This is a cancel button'
                disabled={true}
                title='Cancel'
        />

        <TouchableOpacity onPress={this._onPress}>
          <Image source={favIcon} />
        </TouchableOpacity>
      </PageContent>
    );
  }
}

module.exports = ButtonExample;
