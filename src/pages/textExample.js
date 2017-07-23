const React = require('react');
const {Text} = require('react-native');
const PageContent = require('../components/pageContent');

class TextExample extends React.Component {
  render() {
    return (
      <PageContent pageTitle='Text'
                   pageDescription='A component for displaying text.'>
      <Text>
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>
          Birds Nest
        </Text>
        <Text numberOfLines={5}>
          This is not really a bird nest.
        </Text>
      </Text>
      </PageContent>
    );
  }
}

module.exports = TextExample;
