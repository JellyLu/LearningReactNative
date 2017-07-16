const {StyleSheet} = require('react-native');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  row: {
    fontSize: 20,
    color: 'gray',
    backgroundColor: '#eee',
    textAlign: 'center',
    height: 44,
    lineHeight: 44,
    marginBottom: 10
  },
  page: {
    marginTop: 64
  }
});

module.exports = styles;
