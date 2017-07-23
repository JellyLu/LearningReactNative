const React = require('react');
const {
    SectionList,
    Text
} = require('react-native');
const Title = require('../components/title');
const PageContent = require('../components/pageContent');

const sectionsone = [
                        {data: [{title: 'A'}, {title: 'B'}], title: 'A to B'},
                        {data: [{title: 'C'}, {title: 'D'}], title: 'C to D'}
                    ];
const sectiontwo = [
                        {data: [{title: 'E'}, {title: 'F'}], title: 'E to F', renderItem: ({item}) => <Text>{item.title}</Text>},
                        {data: [{title: 'G'}, {title: 'H'}], title: 'G to H', renderItem: ({item}) => <Text>{item.title}</Text>}
                    ];


class SectionListExample extends React.Component {
  constructor() {
    super();
    this.state = {
      dataSource: sectionsone
    };
  }

  renderItem({item}) {
    return (<Text>{item.title}</Text>);
  }

  renderSectionHeader({section}) {
    return (<Title>{section.title}</Title>);
  }

  render() {
    return (
      <PageContent pageTitle='SectionList'
                   pageDescription='Like FlatList, but for sectioned lists.'>
        <SectionList
          renderItem={this.renderItem}
          renderSectionHeader={this.renderSectionHeader}
          sections={this.state.dataSource}
        />

        <SectionList
            sections={sectiontwo}
            renderSectionHeader={this.renderSectionHeader}
        />
      </PageContent>
    );
  }
}

module.exports = SectionListExample;