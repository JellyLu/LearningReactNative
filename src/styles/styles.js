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
  },
  title: {
    height: 44,
    fontSize: 20,
    paddingLeft: 10,
    lineHeight: 44,
    color: 'white',
    backgroundColor: '#05A5D1'
  },
  description: {
    fontSize: 15,
    backgroundColor: '#eee',
    padding: 10,
    paddingBottom: 20
  },
  introduce: {
    marginBottom: 10,
    fontFamily: 'Cochin'
  }
});

module.exports = styles;
