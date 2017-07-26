const React = require('react');
const _ = require('lodash');
const {PropTypes} = React;
const {SectionList, Text} = require('react-native');
const Title = require('./components/title');
const styles = require('./styles/styles');
const ViewExample = require('./pages/viewExample');
const TextExample = require('./pages/textExample');
const ImageExample = require('./pages/imageExample');
const TextInputExample = require('./pages/textInputExample');
const ScrollViewExample = require('./pages/scrollViewExample');
const ButtonExample = require('./pages/buttonExample');
const PickerExample = require('./pages/pickerExample');
const SliderExample = require('./pages/sliderExample');
const SwitchExample = require('./pages/switchExample');
const FlatListExample = require('./pages/flatListExample');
const SecondListExample = require('./pages/sectionListExample');
const ActionSheetIOSExample = require('./pages/actionSheetIOSExample');

const views = {'View': ViewExample,
               'Text': TextExample,
               'Image': ImageExample,
               'TextInput': TextInputExample,
               'ScrollView': ScrollViewExample,
               'Button': ButtonExample,
                'Picker': PickerExample,
                'Slider': SliderExample,
                'Switch': SwitchExample,
                'FlatList': FlatListExample,
                'SecondList': SecondListExample,
                'ActionSheetIOS': ActionSheetIOSExample,
//                 'AdSupportIOS': AdSupportIOSExample,
//                 'AlertIOS': AlertIOSExample,
//                 'DatePickerIOS': DatePickerIOSExample,
//                 'ImagePickerIOS': ImagePickerIOSExample,
//                 'NavigatorIOS': NavigatorIOSExample,
//                 'ProgressViewIOS': ProgressViewIOSExample,
//                 'PushNotificationIOS': PushNotificationIOSExample,
//                 'SegmentControlIOS': SegmentControlIOSExample,
//                 'TabBarIOS': TabBarIOSExample
             };

const BasicComponents = [{view: 'View'}, {view: 'Text'}, {view: 'Image'}, {view: 'TextIput'},
                         {view: 'ScrollView'}, {view: 'Button'}, {view: 'Picker'}, {view: 'Slider'},
                         {view: 'Switch'}, {view: 'FlatList'}, {view: 'SecondList'}];

const iOSComponents = [{view: 'ActionSheetIOS'}, {view: 'AdSupportIOS'}, {view: 'AlertIOS'},
                       {view: 'DatePickerIOS'}, {view: 'ImagePickerIOS'}, {view: 'NavigatorIOS'},
                       {view: 'ProgressViewIOS'}, {view: 'PushNotificationIOS'}, {view: 'SegementControlIOS'},
                       {view: 'TabBarIOS'}];

class Setup extends React.Component {
  constructor() {
    super();
    this.state = {
        dataSource: [
            {data: BasicComponents, title: 'Basic Components'},
            {data: iOSComponents, title: 'iOS Components'}
        ]
    };
  }

  toView(item) {
    this.props.navigator.push({
     title: item,
     component: views[item],
     passProps: {style: styles.page}
   });
 }

 renderItem({item}) {
      console.log(item.view)
     return <Text onPress={() => this.toView(item.view)}
                  style={styles.row}
            >
              {item.view}
            </Text>;
 }

 renderSectionHeader({section}) {
     return (<Title>{section.title}</Title>);
   }

  render() {
    return (
      <SectionList
           keyExtractor={(item, index) => index}
           renderItem={this.renderItem.bind(this)}
           sections={this.state.dataSource}
           renderSectionHeader={this.renderSectionHeader}
      />
    );
  }
}

module.exports = Setup;
