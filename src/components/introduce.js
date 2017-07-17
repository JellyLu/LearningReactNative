const React = require('react');
const {View} = require('react-native');
const styles = require('../styles/styles');
const Title = require('./title');
const Description = require('./description');

class Introduce extends React.Component {
    render() {
      return (
        <View style={styles.introduce}>
          <Title>{this.props.title}</Title>
          <Description>{this.props.description}</Description>
        </View>
      );
    }
}

module.exports = Introduce;
