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
    width: 100,
    backgroundColor: '#48BBEC',
    justifyContent: 'center'
  },
  saveButton: {
    borderColor: '#48BBEC',
    borderWidth: 1,
    borderRadius: 8
  },
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  text: {
    fontSize: 18,
    marginLeft: 5,
    marginTop: 2,
    color: '#222222'
  },
  completed: {
    color: '#cccccc'
  },
  hr: {
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    height: 1,
    marginLeft: 0,
    marginRight: 0
  }
});

module.exports = shareStyles;
