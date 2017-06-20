'use strict';

const styles = require('../styles/shareStyles');
const React = require('react');
const {
  Text,
  View,
  TouchableHighlight
} = require('react-native');
const t = require('tcomb-form-native');

const Form = t.form.Form;

const ToDo = t.struct({Thing: t.Str, Complete: t.Bool});

const options = {
  fields: {
    Thing: {
      label: 'Add ToDo',
      placeholder: 'enter a to do item',
      autoFocus: true
    }
  }
};


class ToDoEdit extends React.Component {
  constructor() {
    super();
    this.onUpdate = this.onUpdate.bind(this);
  }

  onUpdate() {
    var value = this.refs.form.getValue();
    if(value) {
      this.props.update(value, this.props.id);
    }
  }

  render() {
    return (
      <View style={styles.todo}>
        <Form
          ref='form'
          type={ToDo}
          onChange={this._onChange}
          options={options}
          value={this.props.item} />
        <TouchableHighlight
          style={[styles.button, styles.saveButton]}
          onPress={this.onUpdate}
          underlayColor='#99d9f4'>
          <Text style={styles.buttonText}>Save</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

module.exports = ToDoEdit;
