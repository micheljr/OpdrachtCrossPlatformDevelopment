import React, { Component } from 'react';
import { View, ImageBackground, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import OneButton from '../components/OneButton';

class Home extends Component {
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
            <OneButton onPressed={this.handleEnterPress}>Enter</OneButton>
            {/* <Button
              style={button}
              title="Enter"
              onPress={this.handleEnterPress}
            /> */}
          </ImageBackground>
          {/* <Image
          source={require('../../assets/LordOfTheRings.jpg')}
          style={{ flex: 1 }}
        /> */}
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
    //paddingBottom: insets.paddingBottom,
  },
});

export default Home;
