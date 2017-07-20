const React = require('react');
const _ = require('lodash');
const {PropTypes} = React;
const {ListView, Text} = require('react-native');
const styles = require('./styles/styles');
const ViewExample = require('./pages/viewExample');
const TextExample = require('./pages/textExample');
const ImageExample = require('./pages/imageExample');
const TextInputExample = require('./pages/textInputExample');
const ScrollViewExample = require('./pages/scrollViewExample');
const ButtonExample = require('./pages/buttonExample');
const PickerExample = require('./pages/pickerExample');
const SliderExample = require('./pages/sliderExample');

const views = {'View': ViewExample,
               'Text': TextExample,
               'Image': ImageExample,
               'TextInput': TextInputExample,
               'ScrollView': ScrollViewExample,
               'Button': ButtonExample,
                'Picker': PickerExample,
                'Slider': SliderExample,
              //  'Switch': SwitchExample,
              //  'FlatList': FlatListExample,
              //  'SecondList': SecondListExample
             };

class Setup extends React.Component {
  constructor() {
    super();
    const dataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: dataSource.cloneWithRows(_.keys(views))
    };
    this.toView = this.toView.bind(this);
  }

  toView(rowData) {
    this.props.navigator.push({
     title: rowData,
     component: views[rowData],
     passProps: {style: styles.page}
   });
 }

  render() {
    return (
      <ListView dataSource={this.state.dataSource}
                renderRow={(rowData) => <Text onPress={() => this.toView(rowData)} style={styles.row}>{rowData}</Text>}
      />
    );
  }
}

module.exports = Setup;
