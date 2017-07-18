const React = require('react');
const {
  View,
  ScrollView,
  Image,
  RefreshControl
} = require('react-native');
const Introduce = require('../components/introduce');
const favIcon = require('../images/favicon.png');

class ScrollViewExample extends React.Component {
  constructor(props) {
   super(props);
   this.state = {
     refreshing: false,
   };
 }

 _onRefresh() {
   this.setState({refreshing: true});
   var promise = new Promise(function(resolve, reject) {
    setTimeout(function(){
        resolve('done');
    }, 2000);
   });

   promise.then(() => {
     this.setState({refreshing: false});
   });
 }

  render() {
    return (
      <View style={this.props.style}>
        <Introduce title='ScrollView' description='Provides a scrolling container that can host multiple components and views.'/>
        <ScrollView style={{height: 30, width: 100, backgroundColor: 'gray', aliginItem: 'center'}}
                    pagingEnabled={true}
                    horizontal={true}
        >
          <Image style={{width: 350, height: 30}} resizeMode='repeat' source={favIcon} />
        </ScrollView>

        <ScrollView style={{height: 200, width: 30, backgroundColor: 'red'}}
                    contentContainerStyle={{paddingVertical: 20}}
                    refreshControl={
                      <RefreshControl
                        refreshing={this.state.refreshing}
                        onRefresh={this._onRefresh.bind(this)}
                      />
                    }
        >
          <Image style={{width: 30, height: 200}} resizeMode='repeat' source={favIcon} />
        </ScrollView>
      </View>
    );
  }
}

module.exports = ScrollViewExample;
