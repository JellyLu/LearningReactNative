var StyleSheet = require('StyleSheet');

var shareStyles = StyleSheet.create({
  todo: {
    marginTop: 100,
    flex: 1,
    padding: 20,
    backgroundColor: 'white'
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },
  button: {
    height: 36,
    backgroundColor: '#48BBEC',
    justifyContent: 'center'
  },
  saveButton: {
    marginTop: 60,
    borderColor: '#48BBEC',
    borderWidth: 1,
    borderRadius: 8
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    padding: 20,
    marginLeft: 8,
    marginRight: 8,
    backgroundColor: '#eeeeee'
  },
  text: {
    fontSize: 18,
    marginLeft: 5,
    marginTop: 2,
    color: 'red'
  },
  completed: {
    color: 'green'
  },
  hr: {
    backgroundColor: 'rgba(255,255, 255, 0.2)',
    height: 5,
    marginLeft: 0,
    marginRight: 0
  },
  listView: {
    marginTop: 20
  },
  navigator: {
    flex: 1
  }
});

module.exports = shareStyles;
