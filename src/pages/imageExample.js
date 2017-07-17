const React = require('react');
const {ScrollView, View, Image} = require('react-native');
const Introduce = require('../components/introduce');
const favIcon = require('../images/favicon.png');
class ImageExample extends React.Component {
  constructor() {
      super();
  }

  render() {
    return (
      <View style={this.props.style}>
        <Introduce title='Image' description='A component for displaying images.'/>
        <ScrollView>
          <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
            <Image style={{width: 100, height: 100}}
              blurRadius={9}
              source={favIcon}
            />
            <Image
              style={{width: 100, height: 100}}
              source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}
            />
            <Image
            style={{width: 50, height: 200}}
            source={favIcon}
            />
          </View>
          <View>
            <Image
              style={{width: 400, height: 100}}
              resizeMode='cover'
              source={ImageExample}
            />
            <Image
              style={{width: 400, height: 100}}
              resizeMode='stretch'
              source={favIcon}
            />
            <Image
              style={{width: 400, height: 100}}
              resizeMode='repeat'
              source={favIcon}
            />
            <Image
              resizeMode='contain'
              style={{width: 400, height: 100}}
              source={favIcon}
            />
            <Image
              resizeMode='center'
              style={{width: 400, height: 100}}
              source={favIcon}
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}

module.exports = ImageExample;
