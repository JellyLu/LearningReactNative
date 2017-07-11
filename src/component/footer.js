const React = require('react');
const {View, Text} = require('react-native');
const {VisibilityFilters} = require('../constants/constants');
const FilterLink = require('./filterLink');

class Footer extends React.Component{
  isActive(filter) {
    const {visibilityFilter} = this.props;
    return visibilityFilter === filter;
  }
  render() {
    return (
      <Text>
      <Text>Show:</Text>
      <FilterLink active={this.isActive(VisibilityFilters.SHOW_ALL)} onClick={() => {this.props.onClick(VisibilityFilters.SHOW_ALL)}}>All</FilterLink>
      <Text>,</Text>
      <FilterLink active={this.isActive(VisibilityFilters.SHOW_ACTIVE)} onClick={() => {this.props.onClick(VisibilityFilters.SHOW_ACTIVE)}}>Active</FilterLink>
      <Text>,</Text>
      <FilterLink active={this.isActive(VisibilityFilters.SHOW_COMPLETED)} onClick={() => {this.props.onClick(VisibilityFilters.SHOW_COMPLETED)}}>Completed</FilterLink>
      </Text>
    );
  }
}

module.exports = Footer;
