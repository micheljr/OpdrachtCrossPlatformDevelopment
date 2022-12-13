import React from 'react';
import { getData } from '../utils/OneApi';
import { Text } from 'react-native';
import { Component } from 'react';

export default class Test extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <Text>{this.props.title}</Text>;
  }
}
