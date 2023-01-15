import React, { Component } from 'react';
import { View, ImageBackground, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import OneButton from '../components/OneButton';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      theme: localStorage.getItem('theme') || 'light',
    };
  }

  handleEnterPress = () => {
    this.props.navigation.navigate('Tabs');
  };

  render() {
    const { flex1, image } = styles;

    return (
      <SafeAreaView style={flex1}>
        <View style={flex1}>
          <ImageBackground
            source={require('../../assets/LordOfTheRings.jpg')}
            style={[flex1, image]}
          >
            <OneButton
              onPressed={this.handleEnterPress}
              thema={this.state.theme}
            >
              Enter
            </OneButton>
          </ImageBackground>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  flex1: {
    flex: 1,
  },
  image: {
    flexDirection: 'column',
    justifyContent: 'flex-end',
    padding: 10,
  },
});

export default Home;
