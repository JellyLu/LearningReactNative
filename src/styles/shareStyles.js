var StyleSheet = require('StyleSheet');

var shareStyles = StyleSheet.create({
  todo: {
    marginTop: 64,
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
    height: 44,
    backgroundColor: '#48BBEC',
    justifyContent: 'center'
  },
  saveButton: {
    marginTop: 65,
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
  navigator: {
    flex: 1
  },
  footer: {
    height: 44,
    marginBottom: 50,
    backgroundColor: '#48BBEC',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  activeLink: {
    color: 'white',
    fontSize: 25
  },
  link: {
    textAlign: 'center',
    fontSize: 18,
    color: 'blue'
  }
});

module.exports = shareStyles;
