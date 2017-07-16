/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

const React = require('react');
const {
  AppRegistry,
  StyleSheet,
  NavigatorIOS
} = require('react-native');
const Setup = require('./src/index');
const styles = require('./src/styles/styles');

export default class LearningReactNative extends React.Component {
  render() {
    return (
      <NavigatorIOS style={styles.container}
         initialRoute={{component: Setup, title: 'React-Native-Views'}} />
    );
  }
}

AppRegistry.registerComponent('LearningReactNative', () => LearningReactNative);
