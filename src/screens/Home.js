import React, { Component } from 'react';
import { View, Image, Button } from 'react-native';

class Home extends Component {
  handleSettingsPress = () => {
    this.props.navigation.navigate('Tabs');
  };

  render() {
    console.log('Hello world!');
    return (
      <View style={{ flex: 1 }}>
        <Image
          source={require('../../assets/LordOfTheRings.jpg')}
          style={{ flex: 1 }}
        />
        <Button title="Enter" onPress={this.handleSettingsPress} />
      </View>
    );
  }
}

export default Home;
