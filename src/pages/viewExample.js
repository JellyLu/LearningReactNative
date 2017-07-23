const React = require('react');
const {View} = require('react-native');
const PageContent = require('../components/pageContent');

class ViewExample extends React.Component {
  render() {
    return (
      <PageContent pageTitle='View'
                   pageDescription='The most fundamental component for building a UI.'>
        <View style={{flexDirection: 'row', height: 100, padding: 20}}>
          <View style={{backgroundColor: 'blue', flex: 0.3}} />
          <View style={{backgroundColor: 'red', flex: 0.5}} />
        </View>
      </PageContent>
    );
  }
}

module.exports = ViewExample;
