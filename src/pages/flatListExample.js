const React = require('react');
const {FlatList, Text} = require('react-native');
const PageContent = require('../components/pageContent');

const dataSource = [
    {title: 'A', key: 'a'},
    {title: 'B', key: 'b'},
    {title: 'C', key: 'c'},
    {title: 'D', key: 'd'},
    {title: 'E', key: 'e'},
    {title: 'F', key: 'f'},
];
class FlatListExample extends React.Component {
  render() {
    return (
      <PageContent pageTitle='FlatList'
                   pageDescription='A component for rendering performant scrollable lists.'>
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
      </PageContent>
    );
  }
}

module.exports = FlatListExample;
