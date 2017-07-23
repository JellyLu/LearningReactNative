const React = require('react');
const {
  View
} = require('react-native');
const styles = require('../styles/styles');
const Introduce = require('./introduce');

class PageContent extends React.Component {
  render() {
    return (
      <View style={styles.page}>
        <Introduce title={this.props.pageTitle} description={this.props.pageDescription} />
        {this.props.children}
      </View>
    );
  }
}

module.exports = PageContent;
