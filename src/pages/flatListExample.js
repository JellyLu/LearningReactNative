const React = require('react');
const {View, FlatList, Text} = require('react-native');
const Introduce = require('../components/introduce');

const dataSource = [
    {title: 'A', key: 'a'},
    {title: 'B', key: 'b'},
    {title: 'C', key: 'c'},
    {title: 'D', key: 'd'},
    {title: 'E', key: 'e'},
    {title: 'F', key: 'f'},
];
class FlatListExample extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <View style={this.props.style}>
        <Introduce title='FlatList' description='A component for rendering performant scrollable lists.'/>
        <FlatList
          data={[]}
          ListEmptyComponent={<Text>Empty List</Text>}
          renderItem={({item, separators}) => (
                         <Text>{item.title}</Text>
                        )}
        />
        <FlatList
          data={dataSource}
          renderItem={({item, separators}) => (
                        <Text>{item.title}</Text>
                      )}
        />
        <FlatList
           data={dataSource}
           renderItem={({item, separators}) => (
                         <Text>{item.title}</Text>
                      )}
           horizontal={false}
           numColumns={4}
        />
      </View>
    );
  }
}

module.exports = FlatListExample;
