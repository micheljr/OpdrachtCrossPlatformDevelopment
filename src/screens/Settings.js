import React, { Component } from 'react';
import { View, Button } from 'react-native';
import OneButton from '../components/OneButton';

class Settings extends Component {
  constructor(props) {
    super(props);
    this.onButtonPress = this.onButtonPress.bind(this);

    this.state = {
      theme: localStorage.getItem('theme') || 'light',
    };
  }

  onButtonPress = () => {
    const theme = localStorage.getItem('theme') || 'light';
    if (theme === 'light') {
      localStorage.setItem('theme', 'dark');
    } else {
      localStorage.setItem('theme', 'light');
    }
  };

  render() {
    return (
      <View>
        <OneButton onPressed={this.onButtonPress}>Switch theme</OneButton>
      </View>
    );
  }
}

export default Settings;
