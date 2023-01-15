import React, { Component } from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import theme from '../styles/theme';

class Searchbar extends Component {
  constructor(props) {
    super(props);
    this.onChange = props.onChange;
  }

  render() {
    const { search } = styles;
    return (
      <TextInput
        placeholder="Zoeken"
        onChangeText={(text) => this.onChange(text)}
        style={search}
      />
    );
  }
}

const styles = StyleSheet.create({
  search: {
    height: 50,
    paddingLeft: 25,
    fontSize: theme.FONT_SIZE_LARGE,
    borderColor: theme.PRIMARY_COLOR,
    borderWidth: 2,
    borderRadius: 8,
  },
});

export default Searchbar;
