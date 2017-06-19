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
  }
});

module.exports = shareStyles;
