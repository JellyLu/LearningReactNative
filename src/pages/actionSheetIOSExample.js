const React = require('react');
const {
  ActionSheetIOS,
  Button
} = require('react-native');
const PageContent = require('../components/pageContent');

class ActionSheetIOSExample extends React.Component {
  constructor() {
    super();
  }

  showActionSheetWithOptions() {
    const options = {
        options: ['OK', 'Cancel', 'Stop'],
        cancelButtonIndex: 1,
        destructiveButtonIndex: 2,
        title: 'showActionSheetWithOptions',
        message: 'this is a action sheet'
    };

    ActionSheetIOS.showActionSheetWithOptions(options, (buttonIndex) => {
        console.log('showActionSheetWithOptions', buttonIndex);
    });
  }

  showShareActionSheetWithOptions() {
    const options = {
        url: 'http://www.baidu.com',
        message: 'showShareActionSheetWithOptions',
        subject: 'this is a action sheet',
        excludedActivityTypes: [] //'com.apple.reminders.RemindersEditorExtension'
    };

    ActionSheetIOS.showShareActionSheetWithOptions(options, (error) => {
        alert(error);
    }, (success, method) => {
        console.log('successCallback: ', method);
    });
  }

  render() {
    return (
      <PageContent pageTitle='ActionSheetIOS'
                   pageDescription='API to display an iOS action sheet or share sheet.'>

      <Button  color='#841584' title='showActionSheetWithOptions' onPress={this.showActionSheetWithOptions} />
      <Button  color='#841584' title='showShareActionSheetWithOptions' onPress={this.showShareActionSheetWithOptions} />
      </PageContent>
    );
  }
}

module.exports = ActionSheetIOSExample;
